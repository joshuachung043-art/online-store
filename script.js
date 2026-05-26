const products = {
  Snack: [
    {
      name: "Potato Chips",
      price: 40,
      size: "60g",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bQjalt2p-tncrYDq9gpoBIN3gNntLtwURg&s"
    },

    {
      name: "Chocolate Bar",
      price: 45,
      size: "50g",
      img: "https://web.hocom.tw/Uploads/Product/186957_9w1smb9z.jpg"
    },

    {
      name: "Haribo Goldbears",
      price: 45,
      size: "80g",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfVLxzS642ZZrLQHqhtyi_l9eqFH1jvcUZQ&s"
    },

    {
      name: "Pocky",
      price: 40,
      size: "45g",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnp66KXAAnmNHdFVgIe3km620-2vXBKypzA&s"
    }
  ],

  Fruit: [
    {
      name: "Banana",
      price: 20,
      size: "120g",
      img: "https://www.millerchemical.com/wp-content/uploads/2021/03/iStock-1184345169.png"
    },

    {
      name: "Orange",
      price: 20,
      size: "150g",
      img: "https://tiimg.tistatic.com/fp/1/007/247/natural-fresh-orange-fruits-additional-benefit-to-health-pure-healthy-finest-quality-orange-color-891.jpg"
    }
  ],

  Drink: [
    {
      name: "Water",
      price: 49,
      size: "600mL",
      img: "https://www.ihergo.com/photo/product/82/750_1435482_1695011081925.jpg"
    },

    {
      name: "Orange Juice",
      price: 45,
      size: "350mL",
      img: "https://image.10mart.com.tw/public/image/product/2024-08-29/283fa47c27cb85dd0f83c286ab1734e3/1000x1000.jpg"
    },

    {
      name: "Apple Juice",
      price: 45,
      size: "350mL",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UQqh4z6yupgyqUA0T52L1kwAH8SoeELN1A&s"
    },

    {
      name: "Milk",
      price: 40,
      size: "450mL",
      img: "https://image.10mart.com.tw/public/image/product/2024-09-02/00c9d93830bb06314973a2b3d1393397/1000x1000.jpg"
    },

    {
      name: "Yogurt",
      price: 30,
      size: "300mL",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oCGpjWYgKoTCcy6mEJNPm1Yord_MCI0l9A&s"
    }
  ]
};

let cart = [];

/* SAVE REGISTER USER */
let savedUser = null;

/* LOAD PRODUCTS */
function loadAllProducts() {

  const list = document.getElementById("productList");

  const allItems = Object.values(products).flat();

  list.innerHTML = allItems.map((item, index) => `
    <div class="item">

      <img src="${item.img}">

      <h3>${item.name}</h3>

      <p>${item.size}</p>

      <p>NT$${item.price}</p>

      <button onclick="showDetails(${index})">
        View Details
      </button>

    </div>
  `).join("");
}

/* PRODUCT DETAILS */
function showDetails(index) {

  const allItems = Object.values(products).flat();

  const item = allItems[index];

  document.getElementById("modalImg").src = item.img;

  document.getElementById("modalName").innerText = item.name;

  document.getElementById("modalSize").innerText =
    "Size: " + item.size;

  document.getElementById("modalPrice").innerText =
    "Price: NT$" + item.price;

  document.getElementById("modalDesc").innerText =
    "Fresh and delicious " + item.name + ".";

  document.getElementById("modalBtn").onclick =
    () => addToCart(index);

  document.getElementById("productModal").style.display = "block";
}

function closeModal() {

  document.getElementById("productModal").style.display = "none";
}

/* CART */
function addToCart(index) {

  const allItems = Object.values(products).flat();

  cart.push(allItems[index]);

  renderCart();

  closeModal();
}

function renderCart() {

  const cartDiv = document.getElementById("cart");

  const totalDiv = document.getElementById("total");

  if (cart.length === 0) {

    cartDiv.innerHTML = "(empty)";

    totalDiv.innerHTML = "Total: NT$0";

    return;
  }

  cartDiv.innerHTML = cart.map((i, idx) =>
    `${idx + 1}. ${i.name} (${i.size}) - NT$${i.price}`
  ).join("<br>");

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  totalDiv.innerHTML = `Total: NT$${total}`;
}

function clearCart() {

  cart = [];

  renderCart();
}

function checkout() {

  if (cart.length === 0) {

    alert("Cart is empty!");

    return;
  }

  alert("Checkout feature coming soon!");
}

/* LOGIN */
function login() {

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  if (savedUser === null) {

    alert("Please register first.");

    return;
  }

  if (email !== savedUser.email) {

    alert("Wrong email.");

    return;
  }

  if (password !== savedUser.password) {

    alert("Wrong password.");

    return;
  }

  document.getElementById("authPage").style.display = "none";

  document.getElementById("mainWebsite").style.display = "block";

  document.getElementById("welcomeUser").innerText =
    "Welcome, " + savedUser.name + " 👋";
}

/* REGISTER */
function register() {

  const name = document.getElementById("registerName").value;

  const email = document.getElementById("registerEmail").value;

  const password = document.getElementById("registerPassword").value;

  if (name === "" || email === "" || password === "") {

    alert("Please fill in all register fields.");

    return;
  }

  savedUser = {
    name: name,
    email: email,
    password: password
  };

  alert("Account created successfully!");

  document.getElementById("authPage").style.display = "none";

  document.getElementById("mainWebsite").style.display = "block";

  document.getElementById("welcomeUser").innerText =
    "Welcome, " + savedUser.name + " 👋";
}

/* START WEBSITE */
window.onload = function () {

  loadAllProducts();
};
