// Remove js-disabled class
document.documentElement.classList.remove('js-disabled');

// Hide loader
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
  }, 1000);
});

// Menu Data - Updated with all items matching the poster categories
const menuItems = [
  // Platters (Stacked Dishes)
  { id: 1, name: "Small Koshary", ar: "كشري صغير", cat: "platters", price: 30, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", badge: "" },
  { id: 2, name: "Medium Koshary", ar: "كشري وسط", cat: "platters", price: 50, img: "https://images.unsplash.com/photo-1574484284002-1f54b0c80c61?w=400&h=300&fit=crop", badge: "Popular" },
  { id: 3, name: "Large Koshary", ar: "كشري كبير", cat: "platters", price: 70, img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop", badge: "" },
  { id: 4, name: "Mega Koshary", ar: "كشري عملاق", cat: "platters", price: 100, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", badge: "Special" },
  { id: 5, name: "Family Koshary", ar: "كشري عائلي", cat: "platters", price: 200, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", badge: "Family" },

  // Bowls (Individual Components)
  { id: 6, name: "Rice & Lentils", ar: "أرز وعدس", cat: "bowls", price: 25, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", badge: "" },
  { id: 7, name: "Macaroni Tomato", ar: "مكرونة بالصلصة", cat: "bowls", price: 25, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop", badge: "" },
  { id: 8, name: "Fried Eggplant", ar: "باذنجان مقلي", cat: "bowls", price: 20, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop", badge: "" },
  { id: 9, name: "Chickpeas Bowl", ar: "حمص", cat: "bowls", price: 15, img: "https://images.unsplash.com/photo-1523626797181-7c5a1da3a9e3?w=400&h=300&fit=crop", badge: "" },

  // Sides (Snacks, Salads, Sauces)
  { id: 10, name: "Crispy Onions", ar: "بصل مقرمش", cat: "sides", price: 10, img: "https://images.unsplash.com/photo-1598100589469-6f6b1dab4676?w=400&h=300&fit=crop", badge: "" },
  { id: 11, name: "Dakwa Sauce", ar: "دقة", cat: "sides", price: 5, img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop", badge: "" },
  { id: 12, name: "Tomato Sauce", ar: "صلصة طماطم", cat: "sides", price: 5, img: "https://images.unsplash.com/photo-1583280023915-4f5b3e3a3c8e?w=400&h=300&fit=crop", badge: "" },
  { id: 13, name: "Green Salad", ar: "سلطة خضراء", cat: "sides", price: 15, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop", badge: "" },
  { id: 14, name: "Spicy Mix", ar: "خلطة حارة", cat: "sides", price: 10, img: "https://images.unsplash.com/photo-1606914707708-5ddc1c0b0a5a?w=400&h=300&fit=crop", badge: "Spicy" },

  // Desserts (Sweets)
  { id: 15, name: "Mahalabia", ar: "مهلبية", cat: "desserts", price: 20, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop", badge: "" },
  { id: 16, name: "Rice Pudding", ar: "أرز باللبن", cat: "desserts", price: 25, img: "https://images.unsplash.com/photo-1559182723-eb7c8d3e3a3e?w=400&h=300&fit=crop", badge: "" },
  { id: 17, name: "Basbousa", ar: "بسبوسة", cat: "desserts", price: 20, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop", badge: "" },
  { id: 18, name: "Om Ali", ar: "ام علي", cat: "desserts", price: 30, img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop", badge: "Chef's Pick" }
];

const menuGrid = document.getElementById('menuGrid');

function renderMenu(filter = 'all') {
  menuGrid.innerHTML = '';
  const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.cat === filter);
  
  if(filtered.length === 0) {
    menuGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">No items found.</p>';
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}">
        ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <span class="menu-cat-tag">${item.cat}</span>
        <h3 class="menu-card-title">${item.name} <span>(${item.ar})</span></h3>
        <span class="menu-price">${item.price} EGP</span>
        <button class="btn-add-cart" onclick="addToCart(${item.id})">
          <i class="fas fa-plus-circle"></i> Add to Cart
        </button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

renderMenu();

// Category Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.getAttribute('data-filter'));
  });
});

// Mobile Nav Toggle
document.getElementById('mobileToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ================= NAVBAR ACTIVE LINK ON SCROLL =================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });

  // Add shadow to navbar on scroll
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ================= CART LOGIC =================
let cart = [];

const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartItemsDiv = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

cartToggle.addEventListener('click', () => {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  
  if(existing) {
    existing.qty += 1;
  } else {
    cart.push({...item, qty: 1});
  }
  updateCart();
  
  // Open cart automatically when item is added
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if(item) {
    item.qty += delta;
    if(item.qty <= 0) {
      removeFromCart(id);
    } else {
      updateCart();
    }
  }
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  cartCount.innerText = count;
  cartTotal.innerText = `${total} EGP`;
  
  if(cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
      </div>
    `;
  } else {
    cartItemsDiv.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.price * item.qty} EGP</p>
          <div class="cart-item-qty">
            <button onclick="changeQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    `).join('');
  }
}

// WhatsApp Checkout
checkoutBtn.addEventListener('click', () => {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  
  let msg = "Hello Goha Koshary! I want to order:%0A%0A";
  cart.forEach(item => {
    msg += `• ${item.name} (${item.ar}) x${item.qty} = ${item.price * item.qty} EGP%0A`;
  });
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  msg += `%0ATotal: ${total} EGP%0A%0APlease confirm my order. Thank you!`;
  
  window.open(`https://wa.me/201004460090?text=${msg}`, '_blank');
});
