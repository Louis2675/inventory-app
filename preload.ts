import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  openAddProduct: (): Promise<void> => ipcRenderer.invoke("openAddProduct"),
});
