"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var path_1 = require("path");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = (0, path_1.dirname)(__filename);
var electron_1 = require("electron");
var path = require("path");
var mainWindow = null;
var addProductWindow = null;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    mainWindow.loadFile("index.html");
}
function openAddProductModal() {
    if (addProductWindow && !addProductWindow.isDestroyed()) {
        addProductWindow.focus();
        return;
    }
    addProductWindow = new electron_1.BrowserWindow({
        minWidth: 500,
        minHeight: 400,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    addProductWindow.loadFile("add-product.html");
    addProductWindow.on("closed", function () {
        addProductWindow = null;
    });
}
electron_1.app.whenReady().then(createMainWindow);
electron_1.ipcMain.handle("openAddProduct", function () {
    openAddProductModal();
});
