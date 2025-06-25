// ✅ Structured Data for Your 3 Sections
const categories = [
  {
    name: "Grocery & Kitchen",
    products: [
      { id: 1, name: "Atta, Rice & Dal", img: "./Groceries Supermart Website/Atta,Rice,Dal.png" },
      { id: 2, name: "Cooking Oil", img: "./Groceries Supermart Website/cookingoil.png" },
      { id: 3, name: "Masala & Spices", img: "./Groceries Supermart Website/Masala,Spices.png" },
      { id: 4, name: "Chicken, Fish & Meat", img: "./Groceries Supermart Website/Chicken, Fish,Meat.png" },
      { id: 5, name: "Fruits & Vegetables", img: "./Groceries Supermart Website/Fruits,Vegetables.png" },
      { id: 6, name: "Dairy, Bread & Eggs", img: "./Groceries Supermart Website/Dairy, Bread,Eggs.png" },
      { id: 7, name: "Dry Fruits", img: "./Groceries Supermart Website/Dry Fruits I.png" },
      { id: 8, name: "Organic Foods", img: "./Groceries Supermart Website/organicfoods.png" },
    ]
  },
  {
    name: "Snacks & Drinks",
    products: [
      { id: 9, name: "Biscuits & Cookies", img: "./Groceries Supermart Website/Biscuits,Cookies.png" },
      { id: 10, name: "Breakfast & Cereals", img: "./Groceries Supermart Website/Breakfast,Cereals.png" },
      { id: 11, name: "Pasta & Noodles", img: "./Groceries Supermart Website/Pasta,Noodles.png" },
      { id: 12, name: "Jams & Spreads", img: "./Groceries Supermart Website/Jams,Spreads.png" },
      { id: 13, name: "Sweets & Chocolates", img: "./Groceries Supermart Website/Sweets,Chocolates.png" },
      { id: 14, name: "Chips & Namkeens", img: "./Groceries Supermart Website/Chips,Namkeens.png" },
      { id: 15, name: "Drinks & Juices", img: "./Groceries Supermart Website/Drinks,Juices.png" },
      { id: 16, name: "Tea, Coffee & Beverages", img: "./Groceries Supermart Website/Tea,Cofee,Beverages.png" },
    ]
  },
  {
    name: "Fish and Meat",
    products: [
      { id: 17, name: "Premium Chicken Whole Skinless", quantity: "250 GM", price: 74.75, img: "./Groceries Supermart Website/Premium Chicken Whole Skinless 1.png" },
      { id: 18, name: "Chicken Boneless Breast Fillet", quantity: "250 GM", price: 107.25, img: "./Groceries Supermart Website/Chicken Boneless Breast Fillet.png" },
      { id: 19, name: "Goat Currycut", quantity: "250 GM", price: 212.25, img: "./Groceries Supermart Website/Goat Currycut.png" },
      { id: 20, name: "Chicken Liver Cut Pieces", quantity: "250 GM", price: 249.75, img: "./Groceries Supermart Website/Chicken Liver Cut Pieces U.png" },
      { id: 21, name: "Chicken Dressed With Skin Whole", quantity: "250 GM", price: 59.75, img: "./Groceries Supermart Website/Premium Chicken Whole Skinless 1.png" },
      { id: 22, name: "Premium Chicken Drumstick Skinless", quantity: "250 GM", price: 107.25, img: "./Groceries Supermart Website/Premium Chicken Drumstick Skinless U.png" },
    ]
  },
  {
    name: "Dairy, Breads & Eggs",
    products: [
      { id: 23, name: "Jersey Badam Flavoured Milk 190ML", quantity: "250 GM", price: 40, img: "./Groceries Supermart Website/Jersey Badam Flavoured Milk 190ML.png" },
      { id: 24, name: "Nandini Goodlife Milk 500GM", quantity: "250 GM", price: 29, img: "./Groceries Supermart Website/Nandini Goodlife Milk 500GM.png" },
      { id: 25, name: "Nandini Goodlife Milk 180ML", quantity: "250 GM", price: 14, img: "./Groceries Supermart Website/Nandini Goodlife Milk 180ML.png" },
      { id: 26, name: "Nandini Slim Uht Milk 1L", quantity: "250 GM", price: 71, img: "./Groceries Supermart Website/Nandini Slim Uht Milk 1L.png" },
      { id: 27, name: "Milky Mist Paneer", quantity: "250 GM", price: 128, img: "./Groceries Supermart Website/Milky Mist Paneer-P.png" },
      { id: 28, name: "Heritage Premium Badam Milk With Badam Bits 180ML", quantity: "250 GM", price: 35, img: "./Groceries Supermart Website/Heritage Premium Badam Milk With Badam Bits 180ML.png" },
    ]
  },
  {
    name: "Buy More & Save More",
    products: [
      { id: 29, name: "SPAR Select Urad Dal 500G", quantity: "500 GM", price: 110, img: "./Groceries Supermart Website/SPAR Select Urad Dal 500G.png" },
      { id: 30, name: "Bhagyalakshmi Fried Gram", quantity: "250 GM", price: 140, img: "./Groceries Supermart Website/Bhagyalakshmi Fried Gram-P.png" },
      { id: 31, name: "Popular Moong Dal 2KG", quantity: "1KG", price: 159, img: "./Groceries Supermart Website/Popular Moong Dal 2KG.png" },
      { id: 32, name: "Popular Moong Dal 1kg", quantity: "200 GM", price: 150, img: "./Groceries Supermart Website/popularmoongdal1kg.png" },
      { id: 33, name: "Loose Bestprice Fried Gram", quantity: "250 GM", price: 42.25, img: "./Groceries Supermart Website/Loose Bestprice Fried Gram.png" },
      { id: 34, name: "Popular Moong Dal 2KG", quantity: "2KG", price: 258, img: "./Groceries Supermart Website/Popular Moong Dal 2KG.png" },
    ]
  },
  {
    name: "Explore Categories",
    products: [
      { id: 35, name: "Apple Royalgala", quantity: "500 GM", price: 124.5, img: "./Groceries Supermart Website/Apple Royalgala.png" },
      { id: 36, name: "Apple Shimla", quantity: "250 GM", price: 114.5, img: "./Groceries Supermart Website/Apple Shimla.png" },
      { id: 37, name: "Banana Robusta", quantity: "1KG", price: 27.5, img: "./Groceries Supermart Website/Banana Robusta.png" },
      { id: 38, name: "Banana Yelakki", quantity: "200 GM", price: 62.5, img: "./Groceries Supermart Website/Banana Yelakki.png" },
      { id: 39, name: "Orange Nagpur", quantity: "250 GM", price: 59.5, img: "./Groceries Supermart Website/Orange Nagpur.png" },
      { id: 40, name: "Guava Prepack", quantity: "2KG", price: 38.7, img: "./Groceries Supermart Website/Guava Prepack.png" },
    ]
  }
];

// 🔸 Modal Elements
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalQty = document.getElementById("modalQty");
const modalPrice = document.getElementById("modalPrice");
const addToCartBtn = document.getElementById("addToCartBtn");
const closeBtn = document.querySelector(".close");

// 🔸 Cart Elements
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// 🔸 Flatten Products
const allProducts = categories.flatMap(cat => cat.products);

// 🔸 Selected Product
let selectedProduct = null;

// 🔸 Cart Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔥 Modal Function
function showDetails(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  modalImg.src = product.img;
  modalName.textContent = product.name;
  modalQty.textContent = `Quantity: ${product.quantity}`;
  modalPrice.textContent = `Price: ₹${product.price}`;
  modal.classList.remove("hidden");
}

// 🔥 Modal Close
closeBtn.onclick = () => modal.classList.add("hidden");
window.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};

// 🔥 Cart Functions
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


function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
}

// 🔥 Cart Toggle
cartIcon.onclick = () => {
  cartPanel.classList.toggle("hidden");
};

// script for cart close btn
const closeCartBtn = document.querySelector(".close-btn");
closeCartBtn.onclick = () => {
  cartPanel.classList.add("hidden");
};


// 🔥 Setup Product Card Click
document.querySelectorAll("[data-id]").forEach(card => {
  const id = parseInt(card.dataset.id);
  const product = allProducts.find(p => p.id === id);
  if (product) {
    card.addEventListener("click", () => showDetails(product.id));
  }
});

// 🔥 Modal Add to Cart
addToCartBtn.onclick = () => {
  if (selectedProduct) {
    addToCart(selectedProduct);
    modal.classList.add("hidden");
  }
};


// quantity updating

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
// clear cart function
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}


// 🔥 Initialize
renderCart();
updateCartCount();