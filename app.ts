const addProductBtn = document.getElementById("add-product");

if (addProductBtn) {
  addProductBtn.addEventListener("click", () => {
    window.electronAPI.openAddProduct();
  });
}
