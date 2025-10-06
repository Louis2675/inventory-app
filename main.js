const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");
}

function openAddProductModal() {
  const addProductWindow = new BrowserWindow({
    minWidth: 500,
    minHeight: 400,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  addProductWindow.loadFile("add-product.html");
}

app.whenReady().then(createMainWindow);

ipcMain.handle("openAddProduct", () => {
  openAddProductModal();
});
