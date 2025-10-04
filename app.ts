const addProductBtn = document.querySelector('#add-product');
const addProductModal = document.querySelector('.add-product');
const closeBtn = document.querySelector('.add-product .modal-close');

if (addProductBtn && addProductModal) {
    addProductBtn.addEventListener('click', function() {
        addProductModal.classList.remove('hidden');
    });
}

if (addProductModal && closeBtn) {
    closeBtn.addEventListener('click', function() {
        addProductModal.classList.add('hidden');
    });
}
