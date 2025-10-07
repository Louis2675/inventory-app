import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | null = null;
let addProductWindow: BrowserWindow | null = null;

function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  mainWindow.loadFile("index.html");
}

function openAddProductModal(): void {
  if (addProductWindow && !addProductWindow.isDestroyed()) {
    addProductWindow.focus();
    return;
  }

  addProductWindow = new BrowserWindow({
    minWidth: 500,
    minHeight: 400,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  addProductWindow.loadFile("add-product.html");

  addProductWindow.on("closed", () => {
    addProductWindow = null;
  });
}

app.whenReady().then(createMainWindow);

ipcMain.handle("openAddProduct", () => {
  openAddProductModal();
});
