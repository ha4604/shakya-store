const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Bananas (1 kg)",
    price: 49,
    mrp: 60,
    category: "Fruits & Vegetables",
    icon: "🍌",
    delivery: "Delivered in 12 mins",
    color: "#FEF3C7", // light yellow
  },
  {
    id: 2,
    name: "Full Cream Milk (1 L)",
    price: 64,
    mrp: 70,
    category: "Dairy & Eggs",
    icon: "🥛",
    delivery: "Delivered in 10 mins",
    color: "#DBEAFE", // light blue
  },
  {
    id: 3,
    name: "Parle-G Biscuits (800 g)",
    price: 72,
    mrp: 80,
    category: "Snacks & Biscuits",
    icon: "🍪",
    delivery: "Delivered in 15 mins",
    color: "#FDE68A", // biscuit
  },
  {
    id: 4,
    name: "Basmati Rice (5 kg)",
    price: 449,
    mrp: 520,
    category: "Grocery & Staples",
    icon: "🍚",
    delivery: "Delivered in 18 mins",
    color: "#E5E7EB",
  },
  {
    id: 5,
    name: "Tomatoes (1 kg)",
    price: 35,
    mrp: 45,
    category: "Fruits & Vegetables",
    icon: "🍅",
    delivery: "Delivered in 11 mins",
    color: "#FECACA",
  },
  {
    id: 6,
    name: "Cold Drink (1.25 L)",
    price: 85,
    mrp: 100,
    category: "Cold Drinks & Juices",
    icon: "🥤",
    delivery: "Delivered in 16 mins",
    color: "#CCE5FF",
  },
  {
    id: 7,
    name: "Brown Bread (400 g)",
    price: 42,
    mrp: 50,
    category: "Bakery",
    icon: "🍞",
    delivery: "Delivered in 14 mins",
    color: "#FCD9B6",
  },
  {
    id: 8,
    name: "Potato Chips (Family Pack)",
    price: 95,
    mrp: 120,
    category: "Snacks & Biscuits",
    icon: "🍟",
    delivery: "Delivered in 13 mins",
    color: "#FFE4B5",
  },
  {
    id: 9,
    name: "Yogurt Cup (6 x 100g)",
    price: 120,
    mrp: 150,
    category: "Dairy & Eggs",
    icon: "🧀",
    delivery: "Delivered in 17 mins",
    color: "#E0F2FE",
  },
  {
    id: 10,
    name: "Premium Atta (10 kg)",
    price: 399,
    mrp: 450,
    category: "Grocery & Staples",
    icon: "🥙",
    delivery: "Delivered in 20 mins",
    color: "#E5E7EB",
  },
];

// ---------- State ----------
let activeCategory = "All";
let searchQuery = "";
const cart = {}; // { productId: { product, qty } }

// ---------- DOM references ----------
const categoryBar = document.getElementById("category-bar");
const productList = document.getElementById("product-list");
const productsCount = document.getElementById("products-count");
const searchInput = document.getElementById("search-input");

const cartDrawer = document.getElementById("cart-drawer");
const cartItemsContainer = document.getElementById("cart-items");
const cartItemsTotal = document.getElementById("cart-items-total");
const cartDeliveryFee = document.getElementById("cart-delivery-fee");
const cartGrandTotal = document.getElementById("cart-grand-total");
const cartCount = document.getElementById("cart-count");
const bottomCartCount = document.getElementById("bottom-cart-count");
const overlay = document.getElementById("overlay");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const bottomCartBtn = document.getElementById("bottom-cart-btn");

// ---------- Helper: create inline SVG image ----------
function createProductImageUrl(icon, bgColor) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
  <rect width="100%" height="100%" rx="30" ry="30" fill="${bgColor}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="120">
    ${icon}
  </text>
</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  initCategories();
  renderProducts();
  attachEvents();
});

// ---------- Categories ----------
function initCategories() {
  const categories = ["All"];
  PRODUCTS.forEach((p) => {
    if (!categories.includes(p.category)) categories.push(p.category);
  });

  categories.forEach((cat) => {
    const pill = document.createElement("button");
    pill.className = "category-pill";
    if (cat === "All") pill.classList.add("active");

    const iconSpan = document.createElement("span");
    iconSpan.className = "icon";

    if (cat === "All") {
      iconSpan.textContent = "⭐";
    } else {
      const found = PRODUCTS.find((p) => p.category === cat);
      iconSpan.textContent = found ? found.icon : "🛒";
    }

    const labelSpan = document.createElement("span");
    labelSpan.textContent = cat;

    pill.appendChild(iconSpan);
    pill.appendChild(labelSpan);

    pill.addEventListener("click", () => {
      document
        .querySelectorAll(".category-pill")
        .forEach((el) => el.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = cat;
      renderProducts();
    });

    categoryBar.appendChild(pill);
  });
}

// ---------- Product filtering ----------
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
}

// ---------- Product render ----------
function renderProducts() {
  productList.innerHTML = "";
  const filtered = getFilteredProducts();
  productsCount.textContent = `${filtered.length} items`;

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("div");
    image.className = "product-image";

    const imgUrl = createProductImageUrl(
      product.icon,
      product.color || "#E5E7EB"
    );
    image.style.backgroundImage = `url("${imgUrl}")`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";

    const name = document.createElement("div");
    name.className = "product-name";
    name.textContent = product.name;

    const meta = document.createElement("div");
    meta.className = "product-meta";
    meta.textContent = product.category;

    const delivery = document.createElement("div");
    delivery.className = "product-delivery";
    delivery.textContent = product.delivery;

    const bottomRow = document.createElement("div");
    bottomRow.className = "product-bottom-row";

    const priceBox = document.createElement("div");
    priceBox.className = "product-price";

    const priceMain = document.createElement("span");
    priceMain.className = "product-price-main";
    priceMain.textContent = `₹${product.price}`;

    const priceOld = document.createElement("span");
    priceOld.className = "product-price-old";
    priceOld.textContent = `₹${product.mrp}`;

    priceBox.appendChild(priceMain);
    priceBox.appendChild(priceOld);

    const btn = document.createElement("button");
    btn.className = "secondary-btn";
    btn.textContent = "Add";

    btn.addEventListener("click", () => addToCart(product));

    bottomRow.appendChild(priceBox);
    bottomRow.appendChild(btn);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(meta);
    card.appendChild(delivery);
    card.appendChild(bottomRow);

    productList.appendChild(card);
  });
}

// ---------- Search ----------
function attachEvents() {
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderProducts();
  });

  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  bottomCartBtn.addEventListener("click", openCart);
}

// ---------- Cart logic ----------
function addToCart(product) {
  if (!cart[product.id]) cart[product.id] = { product, qty: 1 };
  else cart[product.id].qty += 1;
  updateCartUI();
}

function changeQty(productId, delta) {
  const entry = cart[productId];
  if (!entry) return;

  entry.qty += delta;
  if (entry.qty <= 0) delete cart[productId];

  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  const entries = Object.values(cart);

  if (entries.length === 0) {
    cartItemsContainer.innerHTML =
      '<p style="font-size:0.85rem;color:#6b7280;">Your cart is empty. Add something from Shakya Store!</p>';
  } else {
    entries.forEach(({ product, qty }) => {
      const item = document.createElement("div");
      item.className = "cart-item";

      const main = document.createElement("div");
      main.className = "cart-item-main";
      main.textContent = product.name;

      const meta = document.createElement("div");
      meta.className = "cart-item-meta";
      meta.textContent = `₹${product.price} x ${qty}`;

      const total = document.createElement("div");
      total.textContent = `₹${product.price * qty}`;

      const actions = document.createElement("div");
      actions.className = "cart-item-actions";

      const minus = document.createElement("button");
      minus.className = "qty-btn";
      minus.textContent = "-";
      minus.addEventListener("click", () => changeQty(product.id, -1));

      const qtyLabel = document.createElement("span");
      qtyLabel.textContent = qty;

      const plus = document.createElement("button");
      plus.className = "qty-btn";
      plus.textContent = "+";
      plus.addEventListener("click", () => changeQty(product.id, 1));

      actions.appendChild(minus);
      actions.appendChild(qtyLabel);
      actions.appendChild(plus);

      item.appendChild(main);
      item.appendChild(meta);
      item.appendChild(total);
      item.appendChild(actions);

      cartItemsContainer.appendChild(item);
    });
  }

  let itemsTotal = 0;
  let itemCount = 0;
  entries.forEach(({ product, qty }) => {
    itemsTotal += product.price * qty;
    itemCount += qty;
  });

  const deliveryFee = itemsTotal === 0 ? 0 : itemsTotal >= 199 ? 0 : 25;
  const grand = itemsTotal + deliveryFee;

  cartItemsTotal.textContent = `₹${itemsTotal}`;
  cartDeliveryFee.textContent = `₹${deliveryFee}`;
  cartGrandTotal.textContent = `₹${grand}`;
  cartCount.textContent = itemCount;
  bottomCartCount.textContent = itemCount;
}

// ---------- Cart drawer ----------
function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("visible");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("visible");
}
