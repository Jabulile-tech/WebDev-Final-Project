const products = [
  // T-Shirts (5 items)
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    category: "t-shirts",
    image: "images/pexels-photo-9775894.webp",
  },
  {
    id: 2,
    name: "Graphic T-Shirt",
    price: 22.99,
    category: "t-shirts",
    image: "images/free-photo-of-fashionable-woman-in-artistic-butterfly-t-shirt.jpeg",
  },
  {
    id: 3,
    name: "V-Neck T-Shirt",
    price: 18.99,
    category: "t-shirts",
    image: "images/pexels-photo-4791780.webp",
  },
  {
    id: 4,
    name: "Long Sleeve T-Shirt",
    price: 25.99,
    category: "t-shirts",
    image: "images/pexels-photo-13058778.jpeg",
  },
  {
    id: 5,
    name: "Striped T-Shirt",
    price: 20.99,
    category: "t-shirts",
    image: "images/pexels-photo-5325899.jpeg",
  },

  // Jeans (5 items)
  {
    id: 6,
    name: "Blue Denim Jeans",
    price: 49.99,
    category: "jeans",
    image: "images/pexels-photo-7327268.jpeg",
  },
  {
    id: 7,
    name: "Black Skinny Jeans",
    price: 54.99,
    category: "jeans",
    image: "images/pexels-photo-27542891.webp",
  },
  {
    id: 8,
    name: "Ripped Jeans",
    price: 59.99,
    category: "jeans",
    image: "images/pexels-photo-1346187.jpeg",
  },
  {
    id: 9,
    name: "High Waist Jeans",
    price: 64.99,
    category: "jeans",
    image: "images/free-photo-of-woman-wearing-jeans.jpeg",
  },
  {
    id: 10,
    name: "Relaxed Fit Jeans",
    price: 52.99,
    category: "jeans",
    image: "images/free-photo-of-woman-holding-a-handbag.jpeg",
  },

  // Jackets (5 items)
  {
    id: 11,
    name: "Black Leather Jacket",
    price: 149.99,
    category: "jackets",
    image: "images/pexels-photo-4541663.jpeg",
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 129.99,
    category: "jackets",
    image: "images/pexels-photo-2344601.webp",
  },
  {
    id: 13,
    name: "Bomber Jacket",
    price: 139.99,
    category: "jackets",
    image: "images/pexels-photo-15963573.webp",
  },
  {
    id: 14,
    name: "Trench Coat",
    price: 159.99,
    category: "jackets",
    image: "images/free-photo-of-woman-standing-in-red-coat-and-in-sunglasses.jpeg",
  },
  {
    id: 15,
    name: "Fleece Jacket",
    price: 119.99,
    category: "jackets",
    image: "images/pexels-photo-6968787.webp",
  },

  // Shoes (5 items)
  {
    id: 16,
    name: "Casual Sneakers",
    price: 69.99,
    category: "shoes",
    image: "images/pexels-photo-16947114.webp",
  },
  {
    id: 17,
    name: "Running Shoes",
    price: 89.99,
    category: "shoes",
    image: "images/pexels-photo-2529148.webp",
  },
  {
    id: 18,
    name: "Leather Boots",
    price: 119.99,
    category: "shoes",
    image: "images/pexels-photo-6939107.webp",
  },
  {
    id: 19,
    name: "Sandals",
    price: 39.99,
    category: "shoes",
    image: "images/pexels-photo-12932253.jpeg",
  },

  // Hoodies (5 items)
  {
    id: 21,
    name: "Cozy Hoodie",
    price: 39.99,
    category: "hoodies",
    image: "images/pexels-photo-9532902.webp",
  },
  {
    id: 22,
    name: "Zip-up Hoodie",
    price: 44.99,
    category: "hoodies",
    image: "images/pexels-photo-8005444.webp",
  },
  {
    id: 25,
    name: "Graphic Hoodie",
    price: 49.99,
    category: "hoodies",
    image: "images/free-photo-of-casual-hoodie-with-club-1984-design-outdoors.jpeg",
  },

  // Dresses (5 items)
  {
    id: 26,
    name: "White Summer Dress",
    price: 59.99,
    category: "dresses",
    image: "images/pexels-photo-8531230.jpeg",
  },
  {
    id: 27,
    name: "Red Evening Gown",
    price: 129.99,
    category: "dresses",
    image: "images/pexels-photo-19344083.webp",
  },
  {
    id: 29,
    name: "Maxi Dress",
    price: 69.99,
    category: "dresses",
    image: "images/pexels-photo-32094221.webp",
  },

  // Accessories (5 items)
  {
    id: 31,
    name: "Stylish Black Backpack",
    price: 79.99,
    category: "accessories",
    image: "images/pexels-photo-9883376.jpeg",
  },
  {
    id: 32,
    name: "Brown Leather Wallet",
    price: 34.99,
    category: "accessories",
    image: "images/pexels-photo-28086457.webp",
  },
  {
    id: 33,
    name: "Sunglasses",
    price: 59.99,
    category: "accessories",
    image: "images/pexels-photo-46710.webp",
  },
  {
    id: 34,
    name: "Grey Beanie Hat",
    price: 19.99,
    category: "accessories",
    image: "images/pexels-photo-9511983.webp",
  },
  {
    id: 35,
    name: "Stripped Silk Scarf",
    price: 29.99,
    category: "accessories",
    image: "images/pexels-photo-6924155.webp",
  },
];


function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;
  container.innerHTML = "";

  const featured = products.filter((p) => p.featured);
  featured.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
      </div>
    `;

    // Navigate to product detail page with query param
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    container.appendChild(card);
  });
}

// Navbar toggle on mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Update cart count from localStorage
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCountElem = document.getElementById("cart-count");
  if (cartCountElem) cartCountElem.textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
  updateCartCount();
});

// --- Existing code remains ---

// Render products on Shop page with Add to Cart buttons
function renderShopProducts(filterCategory = "all") {
  const container = document.getElementById("product-grid");
  if (!container) return;

  container.innerHTML = "";
  let filteredProducts = products;

  if (filterCategory !== "all") {
    filteredProducts = products.filter((p) => p.category === filterCategory);
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;

    // Click on image or name goes to product detail
    card.querySelector("img").addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
    card.querySelector(".product-name").addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    container.appendChild(card);
  });

  // Attach Add to Cart event listeners
  document.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

// Add to cart logic, store in localStorage
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

// On page load for shop page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  // Run only if on shop page
  if (document.getElementById("product-grid")) {
    renderShopProducts();

    // Filter buttons functionality
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active from all
        document.querySelectorAll(".filter-btn").forEach((b) =>
          b.classList.remove("active")
        );
        btn.classList.add("active");

        const category = btn.getAttribute("data-category");
        renderShopProducts(category);
      });
    });
  }
});

const product = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    category: "t-shirts",
    image: "images/tshirt-white.jpg",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    price: 49.99,
    category: "jeans",
    image: "images/jeans-blue.jpg",
  },
  {
    id: 3,
    name: "Black Leather Jacket",
    price: 149.99,
    category: "jackets",
    image: "images/jacket-leather.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 69.99,
    category: "shoes",
    image: "images/shoes-casual.jpg",
  },
  {
    id: 5,
    name: "Cozy Hoodie",
    price: 39.99,
    category: "hoodies",
    image: "images/hoodie-grey.jpg",
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 59.99,
    category: "dresses",
    image: "images/dress-summer.jpg",
  },
  {
    id: 7,
    name: "Stylish Backpack",
    price: 79.99,
    category: "accessories",
    image: "images/backpack.jpg",
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 89.99,
    category: "shoes",
    image: "images/shoes-running.jpg",
  },
  {
    id: 9,
    name: "Denim Jacket",
    price: 129.99,
    category: "jackets",
    image: "images/jacket-denim.jpg",
  },
  {
    id: 10,
    name: "Graphic T-Shirt",
    price: 22.99,
    category: "t-shirts",
    image: "images/tshirt-graphic.jpg",
  }
];


// product.html 
// Utility: Get URL query parameters
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Product descriptions (add more detailed descriptions here)
const productDescriptions = {
  1: "A classic white t-shirt made from 100% cotton. Soft, breathable, and perfect for everyday wear.",
  2: "Stylish blue denim jeans with a comfortable fit. Durable and versatile for any casual look.",
  3: "Black leather jacket crafted from premium materials. Adds an edge to your outfit.",
  4: "Casual sneakers designed for comfort and style. Perfect for everyday use.",
  5: "Warm and cozy grey hoodie with a soft fleece lining, perfect for chilly days.",
  6: "Lightweight summer dress made from breathable fabric, ideal for sunny days out.",
  7: "Durable backpack with multiple compartments for all your essentials.",
  8: "High-performance running shoes designed to support and cushion every step.",
  9: "Classic denim jacket with a relaxed fit and vintage wash.",
  10: "Trendy graphic t-shirt made from soft cotton for casual street style."
};


// Render product detail on product.html
function renderProductDetail() {
  const productId = parseInt(getQueryParam("id"));
  const container = document.getElementById("product-detail");
  if (!container) return;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }

  container.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h2>${product.name}</h2>
      <div class="price">$${product.price.toFixed(2)}</div>
      <div class="description">${productDescriptions[product.id] || "No description available."}</div>
      <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  container.querySelector(".btn-add-cart").addEventListener("click", () => {
    addToCart(product.id);
  });
}

// On page load for product detail
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if (document.getElementById("product-detail")) {
    renderProductDetail();
  }
});

// Render cart items on cart.html
function renderCart() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!container || !summary) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    summary.innerHTML = "";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cart.forEach(({ id, quantity }) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    const itemTotal = product.price * quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <input type="number" min="1" value="${quantity}" data-id="${product.id}" class="qty-input" />
        <button class="btn-remove" data-id="${product.id}">Remove</button>
      </div>
    `;

    container.appendChild(itemDiv);
  });

  summary.innerHTML = `
    <div>Total: $${total.toFixed(2)}</div>
<button id="proceedToCheckout">Proceed to Checkout</button>

<script>
  document.getElementById('proceedToCheckout').addEventListener('click', () => {
    // Optional: Save cart to localStorage or sessionStorage here
    window.location.href = 'checkout.html';
  });
</script>
  `;
  
  localStorage.setItem("cartItems", JSON.stringify(cartArray));

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


  // Quantity change event
  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      let newQty = parseInt(e.target.value);

      if (isNaN(newQty) || newQty < 1) {
        newQty = 1;
        e.target.value = 1;
      }

      updateCartQuantity(id, newQty);
    });
  });

  // Remove button event
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(id);
    });
  });

  // Checkout button (dummy alert)
  summary.querySelector(".btn-checkout").addEventListener("click", () => {
    alert("Checkout functionality coming soon!");
  });
}

// Update quantity in cart
function updateCartQuantity(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((c) => c.id === productId);

  if (item) {
    item.quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((c) => c.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// On page load for cart page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if (document.getElementById("cart-items")) {
    renderCart();
  }
});

/*chekout page*/
// Load cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const orderItemsDiv = document.getElementById("order-items");
const orderTotalSpan = document.getElementById("order-total");
const form = document.getElementById("checkout-form");
const orderMessage = document.getElementById("order-message");
const backToShopBtn = document.getElementById("back-to-shop");
const spinner = document.getElementById("loading-spinner");

// Function to format price
function formatPrice(price) {
  return price.toFixed(2);
}

// Calculate and display order summary
function displayOrderSummary() {
  orderItemsDiv.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    orderItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    orderTotalSpan.textContent = "0.00";
    return;
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.textContent = `${item.name} x${item.quantity}`;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${formatPrice(itemTotal)}`;
    div.appendChild(priceSpan);
    orderItemsDiv.appendChild(div);
  });

  orderTotalSpan.textContent = formatPrice(total);
}

// Form validation
function validateForm() {
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const address = form.address.value.trim();
  const paymentMethod = form.paymentMethod.value;

  if (!fullName) {
    alert("Please enter your full name.");
    return false;
  }
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!address) {
    alert("Please enter your address.");
    return false;
  }
  if (!paymentMethod) {
    alert("Please select a payment method.");
    return false;
  }
  return true;
}

// On form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  // Show loading spinner
  spinner.classList.remove("hidden");

  // Simulate async processing (like API call)
  setTimeout(() => {
    spinner.classList.add("hidden");

    orderMessage.textContent = "Thank you for your order! Your purchase was successful.";
    orderMessage.classList.remove("hidden");
    orderMessage.classList.add("visible");

    backToShopBtn.classList.remove("hidden");

    // Disable form inputs and button
    Array.from(form.elements).forEach(el => el.disabled = true);

    // Clear cart
    localStorage.removeItem("cart");
  }, 2000); // 2-second delay to simulate loading
});

// Back to shop button click handler
backToShopBtn.addEventListener("click", () => {
  window.location.href = "shop.html"; // Change to your shop or homepage file
});

// Initialize display
displayOrderSummary();

