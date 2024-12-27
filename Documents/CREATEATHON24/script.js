// Sample Products
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 699, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Laptop", category: "electronics", price: 999, image: "https://via.placeholder.com/200" },
    { id: 3, name: "T-Shirt", category: "fashion", price: 25, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Sneakers", category: "fashion", price: 49, image: "https://via.placeholder.com/200" },

    { id: 6, name: "Men's Jacket", category: "fashion", price: 59, image: "https://via.placeholder.com/200" },
  { id: 7, name: "Women's Handbag", category: "fashion", price: 89, image: "https://via.placeholder.com/200" },
  { id: 8, name: "Sneakers", category: "fashion", price: 79, image: "https://via.placeholder.com/200" },
  { id: 9, name: "Sunglasses", category: "fashion", price: 29, image: "https://via.placeholder.com/200" },
  { id: 10, name: "Wristwatch", category: "fashion", price: 120, image: "https://via.placeholder.com/200" },

  // Home Appliances
  { id: 11, name: "Blender", category: "home", price: 49, image: "https://via.placeholder.com/200" },
  { id: 12, name: "Vacuum Cleaner", category: "home", price: 129, image: "https://via.placeholder.com/200" },
  { id: 13, name: "Microwave Oven", category: "home", price: 199, image: "https://via.placeholder.com/200" },
  { id: 14, name: "Air Conditioner", category: "home", price: 599, image: "https://via.placeholder.com/200" },
  { id: 15, name: "Coffee Maker", category: "home", price: 79, image: "https://via.placeholder.com/200" },

  // Books
  { id: 16, name: "The Great Gatsby", category: "books", price: 10, image: "https://via.placeholder.com/200" },
  { id: 17, name: "1984 by George Orwell", category: "books", price: 15, image: "https://via.placeholder.com/200" },
  { id: 18, name: "To Kill a Mockingbird", category: "books", price: 12, image: "https://via.placeholder.com/200" },
  { id: 19, name: "Atomic Habits", category: "books", price: 20, image: "https://via.placeholder.com/200" },
  { id: 20, name: "The Lean Startup", category: "books", price: 25, image: "https://via.placeholder.com/200" },

  // Kitchen Items
  { id: 21, name: "Nonstick Pan", category: "home", price: 35, image: "https://via.placeholder.com/200" },
  { id: 22, name: "Knife Set", category: "home", price: 40, image: "https://via.placeholder.com/200" },
  { id: 23, name: "Cutting Board", category: "home", price: 20, image: "https://via.placeholder.com/200" },
  { id: 24, name: "Electric Kettle", category: "home", price: 30, image: "https://via.placeholder.com/200" },
  { id: 25, name: "Dish Rack", category: "home", price: 25, image: "https://via.placeholder.com/200" },

  // Outdoor Gear
  { id: 26, name: "Camping Tent", category: "outdoor", price: 150, image: "https://via.placeholder.com/200" },
  { id: 27, name: "Hiking Backpack", category: "outdoor", price: 70, image: "https://via.placeholder.com/200" },
  { id: 28, name: "Portable Grill", category: "outdoor", price: 100, image: "https://via.placeholder.com/200" },
  { id: 29, name: "Binoculars", category: "outdoor", price: 90, image: "https://via.placeholder.com/200" },
  { id: 30, name: "Sleeping Bag", category: "outdoor", price: 60, image: "https://via.placeholder.com/200" },
];
  
  let cart = [];
  
  // Render Products
  function renderProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const cartItem = cart.find((item) => item.id === productId);
  
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    renderCart();
  }
  
  // Render Cart
  function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
  
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>$${item.price * item.quantity}</span>
      `;
      cartItems.appendChild(cartItem);
    });
  
    calculateTotal();
  }
  
  // Filter Products
  function filterProducts(category) {
    if (category === "all") {
      renderProducts();
    } else {
      const filtered = products.filter((p) => p.category === category);
      renderProducts(filtered);
    }
  }
  
  // Calculate Total
  function calculateTotal() {
    const cartTotal = document.getElementById("cart-total");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
  }
  
  // Search Products
  function searchProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter((p) => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  }
  
  let chatOpen = false;

// Toggle chatbot visibility
function toggleChat() {
  const chatbotBody = document.getElementById("chatbot-body");
  chatOpen = !chatOpen;
  chatbotBody.classList.toggle("hidden", !chatOpen);
}

// Handle chatbot messages
function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  displayMessage("You", message);

  // Simulate AI response
  setTimeout(() => {
    const response = generateBotResponse(message);
    displayMessage("Bot", response);
  }, 1000);

  input.value = "";
}

// Display chatbot message
function displayMessage(sender, text) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate bot response
function generateBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  if (lowerMessage.includes("gift")) {
    return "I recommend a smartwatch, headphones, or books as great gift options!";
  } else if (lowerMessage.includes("electronics")) {
    return "We have amazing discounts on smartphones and laptops. Check them out!";
  } else if (lowerMessage.includes("help")) {
    return "I'm here to assist you. What do you need help with?";
  }
  return "I'm not sure, but you can explore our trending products!";
}

function generateBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes("smartwatch")) {
      return `Here are some top-rated smartwatches:
      - Apple Watch Series 8
      - Samsung Galaxy Watch 5
      - Garmin Vivoactive 4
      `;
    }
    return "Let me look that up for you!";
  }
  
  // Initialize
  renderProducts();