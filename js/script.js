// Toggle Class Actice Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle Class Actice Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik diluar sidebar untuk menghilangkan search form
document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Toggle Active untuk Shopping Card
const shoppingButton = document.querySelector("#shopping-cart-button");
const removeItem = document.querySelector(".remove-item");
const shoppingCard = document.querySelector(".shopping-card");

shoppingButton.onclick = (e) => {
  shoppingCard.classList.toggle("active");
  e.preventDefault();
};
// klik diluar sidebar untuk menghilangkan shopping card
document.addEventListener("click", function (e) {
  if (
    !shoppingButton.contains(e.target) &&
    !removeItem.contains(e.target) &&
    !shoppingCard.contains(e.target)
  ) {
    shoppingCard.classList.remove("active");
  }
});

// Toggle melihat detail
const detailModalButtons = document.querySelectorAll(".detail-button");
const detailModal = document.querySelector("#item-detail-modal");
const closeModal = document.querySelector(".close-icon");

detailModalButtons.forEach((btn) => {
  btn.onclick = (e) => {
    detailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik Close untuk menghilangkan Modal
closeModal.onclick = (e) => {
  detailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan Modal
window.onclick = (e) => {
  if (e.target === detailModal) {
    detailModal.style.display = "none";
  }
};
