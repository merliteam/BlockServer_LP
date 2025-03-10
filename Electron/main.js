// main.js (ES Modules)

// ------------- IMPORTS ------------- //
const { app, BrowserWindow } = electron;
import next from "next";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import electron from "electron";

// Emular __dirname en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------- CONFIG -------------- //
const isDev = false; // Pon true si quieres probar modo dev, false para producción
const port = 3000;   // Puerto donde servirás tu Next

// ------------- NEXT INIT ------------ //
// Ajusta "dir" para que apunte un nivel arriba, donde están "pages" y ".next"
const nextApp = next({
  dev: isDev,
  dir: path.join(__dirname, ".."), 
});
const handle = nextApp.getRequestHandler();

// ------------- GLOBALS -------------- //
let mainWindow;

// ------------- FUNCIONES ------------- //
async function startApp() {
  try {
    console.log("1) Preparando Next...");
    // Prepara Next en este mismo proceso
    await nextApp.prepare();
    console.log("2) Next preparado. Creando servidor...");

    // Levanta un servidor HTTP que use Next
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`3) Servidor Next en http://localhost:${port}`);

      // Cuando el servidor está listo, abrimos la ventana de Electron
      createMainWindow();
    });
  } catch (error) {
    console.error("Error preparando Next:", error);
  }
}

function createMainWindow() {
  console.log("4) Creando BrowserWindow...");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Carga la ruta que necesites (por ejemplo "/server-wizard")
  mainWindow.loadURL(`http://localhost:${port}/server-wizard`);

  // Abre DevTools (opcional para debug):
  // mainWindow.webContents.openDevTools({ mode: "detach" });
}

// ------------- EVENTOS APP ------------- //
app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
