// Cart Elements
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart Function
function addToCart(product) {
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Render Cart
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");

    // Item line with buttons
    li.innerHTML = `
    <img src="${item.img}" alt="${item.name}">

    <section class="cart-pdt-details">
    
    <p> <strong><i>${item.name}</i></strong> </p> 
    <p><span>Price: </span><strong>${item.price}</strong></p> 
    <p><span>Quantity: </span><strong>${item.qty}</strong></p> 
    <p>Sub Total: <strong>₹${(item.price * item.qty).toFixed(2)}</strong> </p>
    </section>
     
      <div class="cart-qty-rem-btn">
      <button onclick="changeQty(${item.id}, 1)">+</button>
      <button onclick="changeQty(${item.id}, -1)">-</button>
      <button onclick="removeItem(${item.id})">❌</button>
      </div>
    `;

    cartItems.appendChild(li);
    total += item.price * item.qty;
  });

  cartTotal.textContent = total.toFixed(2);
}
// Update Cart Count
function updateCartCount() {
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;
}

// Quantity Functions
function changeQty(id, delta) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Cart Toggle
if (cartIcon) {
    cartIcon.onclick = () => cartPanel.classList.toggle("hidden");
}
const closeCartBtn = document.querySelector(".close-btn");
if (closeCartBtn) {
    closeCartBtn.onclick = () => cartPanel.classList.add("hidden");
}

// Initialize on Load
renderCart();
updateCartCount();
