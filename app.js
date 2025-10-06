var addProductBtn = document.getElementById("add-product");
if (addProductBtn) {
    addProductBtn.addEventListener("click", function () {
        window.electronAPI.openAddProduct();
    });
}
