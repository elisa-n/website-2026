import { createServer } from 'vite';

const server = await createServer({
  server: { port: 3000, strictPort: true },
});

await server.listen();
server.printUrls();
