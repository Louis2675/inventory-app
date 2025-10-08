// Elements getters
const addProductBtn = document.getElementById("add-product");

// Listeners
if (addProductBtn) {
  addProductBtn.addEventListener("click", () => {
    window.electronAPI.openAddProduct();
  });
}