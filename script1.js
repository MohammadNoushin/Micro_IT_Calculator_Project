// Initialize an empty cart array
let cart = [];

// Update the cart count display
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const price = parseFloat(button.getAttribute('data-price'));

      // Add product to the cart array
      cart.push({ product, price });
      updateCartCount();

      // Optional: Show a message
      alert(`${product} added to cart!`);
    });
  });

  // Contact form submission (demo only)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! (Demo only, no server processing)');
      form.reset();
    });
  }
});
