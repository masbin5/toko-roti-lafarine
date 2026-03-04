// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top = e.clientY + 'px';
});

// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ── PRODUCTS DATA ──
const products = [
  { id:1,  name:'Sourdough Klasik',   emoji:'🍞', category:'roti',    price:55000, desc:'Fermentasi alami 18 jam, kerak renyah, remah lembut',                  badge:null },
  { id:2,  name:'Croissant Butter',   emoji:'🥐', category:'pastry',  price:28000, desc:'Lapisan puff pastry dengan mentega premium Prancis',                  badge:'Bestseller' },
  { id:3,  name:'Roti Tawar Premium', emoji:'🍔', category:'roti',    price:32000, desc:'Lembut, fluffy, cocok untuk sarapan keluarga',                        badge:null },
  { id:4,  name:'Cinnamon Roll',      emoji:'🌀', category:'kue',     price:25000, desc:'Gulungan kayu manis dengan glazing krim vanilla',                     badge:'Favorit' },
  { id:5,  name:'Baguette Klasik',    emoji:'🥖', category:'roti',    price:24000, desc:'Roti Prancis panjang, renyah di luar, lembut di dalam',               badge:null },
  { id:6,  name:'Choco Brioche',      emoji:'🍫', category:'kue',     price:35000, desc:'Brioche kaya mentega dengan isian cokelat Belgia',                    badge:'Baru' },
  { id:7,  name:'Almond Tart',        emoji:'🥧', category:'kue',     price:45000, desc:'Tart dengan frangipane almond dan buah musiman',                      badge:null },
  { id:8,  name:'Pain au Chocolat',   emoji:'🍩', category:'pastry',  price:30000, desc:'Pastry berlapis dengan batang cokelat di tengahnya',                  badge:'Bestseller' },
  { id:9,  name:'Sourdough 72 Jam',   emoji:'🍞', category:'spesial', price:85000, desc:'Fermentasi panjang 72 jam, rasa komplex dan unik',                    badge:'Limited' },
  { id:10, name:'Focaccia Herbal',    emoji:'🌿', category:'roti',    price:40000, desc:'Roti Italia dengan rosemary, thyme, dan olive oil',                   badge:null },
  { id:11, name:'Éclair Vanilla',     emoji:'🍮', category:'kue',     price:32000, desc:'Choux pastry dengan krim vanilla dan glasur cokelat',                 badge:'Baru' },
  { id:12, name:'Whole Wheat Loaf',   emoji:'🌾', category:'roti',    price:38000, desc:'Roti gandum utuh kaya serat, sehat dan mengenyangkan',                badge:null },
];

// ── CART STATE ──
let cart = JSON.parse(localStorage.getItem('lafarine_cart') || '[]');

function saveCart() {
  localStorage.setItem('lafarine_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-badge').textContent = total;
  const itemsEl = document.getElementById('cart-items');
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-total-price').textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Keranjang masih kosong.<br>Yuk pilih roti favoritmu!</p>
      </div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div style="flex:1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Hapus</button>
    </div>
  `).join('');
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`${product.emoji} ${product.name} ditambahkan!`);
}

function addToCartById(id) {
  const product = products.find(p => p.id === id);
  if (product) addToCart(product);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cart-overlay').classList.toggle('open');
  document.getElementById('cart-sidebar').classList.toggle('open');
  updateCartUI();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '🛒 ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── RENDER PRODUCTS ──
function getGradient(cat) {
  const map = {
    roti:    'linear-gradient(135deg,#E8C89A,#C8922A)',
    kue:     'linear-gradient(135deg,#F5C1BB,#D4736A)',
    pastry:  'linear-gradient(135deg,#E8D8A0,#C8A030)',
    spesial: 'linear-gradient(135deg,#A8C8A0,#4A7C59)',
  };
  return map[cat] || map.roti;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal" data-category="${p.category}">
      <div class="product-img" style="background:${getGradient(p.category)}">
        <span style="font-size:3.5rem;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.2))">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
          <button class="add-cart-btn" id="btn-${p.id}" onclick="handleAddToCart(${p.id}, this)">+ Keranjang</button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

function handleAddToCart(id, btn) {
  addToCartById(id);
  btn.textContent = '✓ Ditambahkan';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = '+ Keranjang';
    btn.classList.remove('added');
  }, 2000);
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

// ── REVIEWS DATA ──
const reviews = [
  { name:'Sari W.',    text:'Sourdough-nya luar biasa! Kerak renyah sempurna, remah lembut, dan aromanya bikin nagih. Sekarang jadi langganan tetap tiap Sabtu pagi.', stars:'★★★★★', initials:'SW' },
  { name:'Budi P.',    text:'Croissant-nya benar-benar crispy di luar tapi lumer di dalam. Saya sudah coba banyak toko roti, La Farine yang terbaik sejauh ini!',     stars:'★★★★★', initials:'BP' },
  { name:'Diana M.',   text:'Pelayanannya ramah, pengirimannya tepat waktu, dan rotinya masih hangat sampai rumah. Paket keluarga sangat worth it!',                   stars:'★★★★☆', initials:'DM' },
  { name:'Reza F.',    text:'Cinnamon roll-nya wow banget! Glasingnya tidak terlalu manis, gulungan kayumanisnya pas. Anak-anak saya langsung rebutan.',               stars:'★★★★★', initials:'RF' },
  { name:'Ayu N.',     text:'Saya pesan untuk hadiah ulang tahun teman, mereka senang sekali! Kemasannya cantik dan rotinya enak. Recommended!',                      stars:'★★★★★', initials:'AN' },
  { name:'Hendra S.',  text:'Focaccia herbalnya otentik banget! Rosemary fresh, tekstur moist sempurna. Selalu beli 2 loaf setiap minggu.',                           stars:'★★★★★', initials:'HS' },
];

function renderReviews() {
  document.getElementById('reviews-grid').innerHTML = reviews.map((r, i) => `
    <div class="review-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="review-quote">"</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar">${r.initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-stars">${r.stars}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── ORDER FORM ──
function submitOrder() {
  const name    = document.getElementById('f-name').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const address = document.getElementById('f-address').value.trim();
  const product = document.getElementById('f-product').value;
  const qty     = document.getElementById('f-qty').value;
  const payment = document.getElementById('f-payment').value;
  const notes   = document.getElementById('f-notes').value.trim();

  if (!name || !phone || !address || !product) {
    showToast('⚠️ Lengkapi semua field yang wajib!');
    return;
  }

  const msg = encodeURIComponent(
    `🍞 *Pesanan La Farine*\n\n` +
    `👤 Nama: ${name}\n` +
    `📱 WA: ${phone}\n` +
    `🏠 Alamat: ${address}\n` +
    `🛒 Produk: ${product}\n` +
    `📦 Jumlah: ${qty}\n` +
    `💳 Pembayaran: ${payment}\n` +
    (notes ? `📝 Catatan: ${notes}\n` : '') +
    `\nTerima kasih! 🙏`
  );

  window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  document.getElementById('order-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

// ── CHECKOUT FROM CART ──
function checkout() {
  if (cart.length === 0) { showToast('Keranjang kosong!'); return; }
  const items = cart.map(i => `- ${i.name} x${i.qty} = Rp ${(i.price * i.qty).toLocaleString('id-ID')}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = encodeURIComponent(
    `🍞 *Order La Farine*\n\n${items}\n\n*Total: Rp ${total.toLocaleString('id-ID')}*\n\nMohon konfirmasi pemesanan saya. Terima kasih!`
  );
  window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
}

// ── SCROLL REVEAL ──
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── INIT ──
renderProducts();
renderReviews();
updateCartUI();
observeReveal();