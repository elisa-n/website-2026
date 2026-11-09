import { existsSync, renameSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { postPaths } from './src/lib/post-files.js';

/** @type {import('@react-router/dev/config').Config} */
export default {
  appDirectory: 'src',
  // No server at runtime: every page is rendered to a static HTML file at build time.
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [
      ...new Set([
        ...getStaticPaths(),
        ...postPaths().map((post) => post.path),
        '/sitemap.xml',
        '/robots.txt',
        '/404',
      ]),
    ];
  },
  async buildEnd({ reactRouterConfig }) {
    const client = join(reactRouterConfig.buildDirectory, 'client');

    // Hosts such as Netlify and GitHub Pages serve /404.html for unknown URLs.
    const notFoundDir = join(client, '404');
    if (existsSync(join(notFoundDir, 'index.html'))) {
      renameSync(join(notFoundDir, 'index.html'), join(client, '404.html'));
      rmSync(notFoundDir, { recursive: true, force: true });
    }

    // Every page is prerendered, so the SPA fallback and the data files for
    // the sitemap and robots.txt routes are never requested.
    for (const file of ['__spa-fallback.html', 'sitemap.xml.data', 'robots.txt.data']) {
      rmSync(join(client, file), { force: true });
    }
  },
};
