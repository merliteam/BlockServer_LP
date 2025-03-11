// server.js
const next = require('next');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // Por defecto, buscará la carpeta .next en la raíz
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  http.createServer((req, res) => {
    return handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> SSR server ready on http://localhost:${port}`);
  });
});
