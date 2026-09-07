// ==============================
// NOXIA — SCRIPT
// ==============================

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cart = document.getElementById("cart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cartProducts = [];


// ==============================
// MENÚ
// ==============================

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


// ==============================
// CARRITO
// ==============================

cartBtn.addEventListener("click", () => {
  cart.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("open");
});


// ==============================
// AÑADIR PRODUCTOS
// ==============================

document.querySelectorAll(".add-btn").forEach(button => {

  button.addEventListener("click", () => {

    const product = {
      name: "NOXIA OVERSIZE HOODIE",
      price: 69.99
    };

    cartProducts.push(product);

    updateCart();

    cart.classList.add("open");

  });

});


// ==============================
// PRODUCTOS DE LA TIENDA
// ==============================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

  card.addEventListener("click", () => {

    const name = card.querySelector("p").textContent;
    const priceText = card.querySelector("span").textContent;

    const price = parseFloat(
      priceText.replace("€", "")
    );

    cartProducts.push({
      name: name,
      price: price
    });

    updateCart();

    cart.classList.add("open");

  });

});


// ==============================
// ACTUALIZAR CARRITO
// ==============================

function updateCart() {

  cartCount.textContent = cartProducts.length;

  cartItems.innerHTML = "";

  if (cartProducts.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Tu carrito está vacío.
      </p>
    `;

    cartTotal.textContent = "€0.00";

    return;
  }


  let total = 0;


  cartProducts.forEach((product, index) => {

    total += product.price;

    const item = document.createElement("div");

    item.style.padding = "18px 0";
    item.style.borderBottom = "1px solid #ccc";

    item.innerHTML = `
      <strong>${product.name}</strong>

      <div
