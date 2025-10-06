const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openAddProduct: () => ipcRenderer.invoke("openAddProduct"),
});
