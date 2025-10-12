import { Category } from "./models/categoryModel";
import { Product } from "./models/productModel";
import { Store } from "./models/storeModel";

// Elements getters
const addProductBtn = document.getElementById("add-product");

// Listeners
if (addProductBtn) {
  addProductBtn.addEventListener("click", () => {
    window.electronAPI.openAddProduct();
  });
}


// Create a new product

