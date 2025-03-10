// server.js (ES Module)
import { createServer } from "http";
import next from "next";

// Con ES modules, __dirname no existe, pero podemos obtenerlo así:
import { fileURLToPath } from "url";
import path from "path";

// Emular __dirname en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = false; // modo producción
const port = 3000;

// Sube un nivel desde /Electron a la carpeta /block-server:
const app = next({
  dev,
  dir: path.join(__dirname, ".."),
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Servidor Next en http://localhost:${port}`);
  });
});
