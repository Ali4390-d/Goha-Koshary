// 1. Remove 'js-disabled' class immediately to enable loader
document.documentElement.classList.remove('js-disabled');

// 2. Hide Loading Screen on Page Load
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 1500);
});

// 3. Navbar Scroll Effect & Mobile Toggle
const nav = document.getElementById('nav');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 4. Menu Data and Rendering
const menuItems = [
  { name: "Goha Small · صغير", desc: "Perfect starter portion.", price: "75 EGP", cat: "small", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&q=80", badge: "Popular" },
  { name: "Goha Medium · وسط", desc: "A hearty meal with extra onions.", price: "150 EGP", cat: "medium", img: "https://images.unsplash.com/photo-1574484284002-1f54b0c80c61?w=500&h=400&fit=crop&q=80", badge: "" },
  { name: "Goha Large · كبير", desc: "For the hungry ones.", price: "300 EGP", cat: "large", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=400&fit=crop&q=80", badge: "" },
  { name: "Goha Family · عائلي", desc: "Perfect for the whole family.", price: "500 EGP", cat: "family", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop&q=80", badge: "Special" }
];

const menuGrid = document.getElementById('menuGrid');

function renderMenu(filter = 'all') {
  menuGrid.innerHTML = '';
  const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.cat === filter);
  
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}">
        ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-title">${item.name}</h3>
        <p style="color:var(--text-muted);font-size:0.9rem">${item.desc}</p>
        <span class="menu-price">${item.price}</span>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Initial render
renderMenu();

// 5. Menu Filters
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderMenu(filter);
  });
});

// 6. Order Button Scroll to Menu
document.getElementById('orderBtn').addEventListener('click', () => {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});
