// Variables globales
let cart = [];
let cartCountElement = document.getElementById('cart-count');

// Agregar productos al carrito
const addToCartButtons = document.querySelectorAll('.button-add');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product-container');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.getAttribute('data-name');
        const productPrice = productElement.getAttribute('data-price');

        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);
        
        // Actualizar contador del carrito
        cartCountElement.textContent = cart.length;

        alert(`Producto "${productName}" añadido al carrito.`);
    });
});

// Proceder a compra
document.getElementById('carrito').addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length > 0) {
        document.getElementById('checkout-form').style.display = 'block';
    } else {
        alert('Tu carrito está vacío.');
    }
});

// Enviar formulario de compra
document.getElementById('purchase-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Compra confirmada. ¡Gracias por tu compra!');
    cart = [];
    cartCountElement.textContent = 0;
    document.getElementById('checkout-form').style.display = 'none';
});
