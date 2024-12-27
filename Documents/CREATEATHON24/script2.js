const products = [
    { name: "Smartphone", price: 699, image: "https://via.placeholder.com/200" },
    { name: "Laptop", price: 999, image: "https://via.placeholder.com/200" },
    { name: "Wireless Earbuds", price: 129, image: "https://via.placeholder.com/200" },
    { name: "Smartwatch", price: 199, image: "https://via.placeholder.com/200" },
    { name: "Tablet", price: 499, image: "https://via.placeholder.com/200" },
    { name: "Men's Jacket", price: 59, image: "https://via.placeholder.com/200" },
  ];
  
  const productGrid = document.getElementById("product-grid");
  
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(productDiv);
  });