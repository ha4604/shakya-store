*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f6f7fb;
  --card-bg: #ffffff;
  --accent: #00c853;
  --accent-soft: #e0f8ea;
  --text-main: #111827;
  --text-muted: #6b7280;
  --border: #e5e7eb;
  --radius-lg: 18px;
  --radius-md: 12px;
  --shadow-soft: 0 18px 40px rgba(15, 23, 42, 0.12);
  --shadow-light: 0 4px 12px rgba(15, 23, 42, 0.08);
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text-main);
  line-height: 1.5;
}

/* Top bar */
.top-bar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(246, 247, 251, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 180px;
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00c853, #00e676);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: var(--shadow-light);
}

.logo-text h1 {
  font-size: 1rem;
  font-weight: 700;
}

.logo-text p {
  font-size: 0.72rem;
  color: var(--text-muted);
}

/* Location area */
.location-area {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 150px;
}

.location-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

#location-select {
  border: none;
  background: transparent;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-main);
  padding: 0;
  outline: none;
}

/* Search */
.search-area {
  flex: 1;
}

#search-input {
  width: 100%;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: #ffffff;
  outline: none;
  font-size: 0.85rem;
  box-shadow: 0 0 0 1px transparent;
}

#search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px rgba(0, 200, 83, 0.2);
}

/* Top actions */
.top-actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.ghost-btn {
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.cart-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 999px;
  border: none;
  padding: 0.45rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
  background: var(--accent);
  color: white;
  box-shadow: var(--shadow-light);
}

.cart-label {
  font-weight: 600;
}

.cart-count {
  background: #ffffff;
  color: #111827;
  border-radius: 999px;
  padding: 0.05rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
}

/* Main layout */
main {
  max-width: 1120px;
  margin: 1.3rem auto 5rem;
  padding: 0 1rem;
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr);
  gap: 1.5rem;
  margin-bottom: 1.8rem;
}

.hero-text h2 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}

.hero-text p {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.hero-highlights {
  margin: 0.9rem 0 1.1rem;
  list-style: none;
  display: grid;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: var(--text-main);
}

.primary-btn,
.secondary-btn {
  border-radius: 999px;
  padding: 0.55rem 1.4rem;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.primary-btn {
  background: #00c853;
  color: white;
  box-shadow: var(--shadow-soft);
}

.secondary-btn {
  background: var(--accent-soft);
  color: #047857;
}

/* Hero image card */
.hero-image {
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}

.hero-card {
  background: linear-gradient(135deg, #ffffff, #e0f8ea);
  border-radius: 24px;
  padding: 1rem 1.1rem;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: 320px;
  width: 100%;
}

.hero-tag {
  align-self: flex-start;
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: #f97316;
  color: white;
}

.hero-card h3 {
  font-size: 1rem;
}

.hero-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.hero-price {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.hero-price .current {
  font-size: 1.1rem;
  font-weight: 700;
}

.hero-price .old {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: line-through;
}

/* Categories */
.categories-section {
  margin-bottom: 1rem;
}

.categories-section h3 {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.category-bar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.2rem;
}

.category-pill {
  flex-shrink: 0;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.category-pill span.icon {
  font-size: 0.9rem;
}

.category-pill.active {
  border-color: var(--accent);
  background: #e0f8ea;
  color: #047857;
}

/* Products */
.products-section {
  margin-top: 0.3rem;
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.6rem;
}

.products-header h3 {
  font-size: 1.1rem;
}

.products-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 0.9rem;
}

.product-card {
  background: var(--card-bg);
  border-radius: 18px;
  padding: 0.7rem;
  box-shadow: var(--shadow-light);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.product-image {
  width: 100%;
  height: 120px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  background-color: #e5e7eb;
}

.product-name {
  font-size: 0.9rem;
  font-weight: 600;
}

.product-meta {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.product-delivery {
  font-size: 0.7rem;
  color: #059669;
}

.product-bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
}

.product-price-main {
  font-size: 0.95rem;
  font-weight: 700;
}

.product-price-old {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-decoration: line-through;
}

/* Cart drawer */
.cart-drawer {
  position: fixed;
  top: 0;
  right: -360px;
  width: 320px;
  max-width: 90vw;
  height: 100vh;
  background: #ffffff;
  box-shadow: -10px 0 30px rgba(15, 23, 42, 0.18);
  display: flex;
  flex-direction: column;
  transition: right 0.25s ease-out;
  z-index: 40;
}

.cart-drawer.open {
  right: 0;
}

.cart-header {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-btn {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.2rem 0.6rem;
  font-size: 0.8rem;
}

.cart-item-main {
  font-weight: 600;
}

.cart-item-meta {
  color: var(--text-muted);
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: flex-end;
}

.qty-btn {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  font-size: 0.8rem;
}

.cart-footer {
  padding: 0.75rem 1rem 1rem;
  border-top: 1px solid var(--border);
  background: #f9fafb;
}

.cart-summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.35rem;
}

.cart-summary-row.grand {
  font-weight: 700;
  margin-top: 0.2rem;
  margin-bottom: 0.7rem;
}

.place-order-btn {
  width: 100%;
}

/* Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.25);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
  z-index: 30;
}

.overlay.visible {
  opacity: 1;
  visibility: visible;
}

/* Bottom mobile nav */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background: #ffffff;
  border-top: 1px solid var(--border);
  padding: 0.3rem 0.35rem;
  z-index: 25;
}

.bottom-nav-btn {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.4rem 0.3rem;
  font-size: 0.8rem;
  cursor: pointer;
}

.bottom-nav-btn.active {
  font-weight: 600;
  color: #047857;
}

#bottom-cart-count {
  background: #111827;
  color: #ffffff;
  border-radius: 999px;
  padding: 0.05rem 0.3rem;
  font-size: 0.7rem;
}

/* Responsive */
@media (max-width: 900px) {
  .top-bar {
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .location-area {
    display: none;
  }

  .hero {
    grid-template-columns: minmax(0, 1.4fr);
  }

  .hero-image {
    display: none;
  }

  main {
    margin-bottom: 4.2rem;
  }

  .bottom-nav {
    display: flex;
  }
}

@media (max-width: 600px) {
  .top-actions .ghost-btn {
    display: none;
  }

  .top-bar {
    padding: 0.7rem 0.9rem;
  }

  main {
    padding: 0 0.8rem;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
