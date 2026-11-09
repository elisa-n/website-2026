// Serves the production build the way a static host does:
// /blog -> blog/index.html, unknown paths -> 404.html with a 404 status.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(import.meta.dirname, 'build/client');
const port = Number(process.env.PORT ?? 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.data': 'text/x-script',
};

async function resolveFile(urlPath) {
  const path = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  for (const candidate of [join(root, path), join(root, path, 'index.html')]) {
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const file = await resolveFile(pathname);

  if (file) {
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } else {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    res.end(await readFile(join(root, '404.html')));
  }
}).listen(port, () => {
  console.log(`Serving build/client at http://localhost:${port}`);
});
