export {};

declare global {
  interface Window {
    electronAPI: {
      openAddProduct: () => void;
    };
  }
}