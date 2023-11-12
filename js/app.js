const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile-nav-hide");
});
const filterLeftNav = document.querySelector(".filter_left-nav");
const items = document.querySelector(".filter-mobile");

filterLeftNav.addEventListener("click", () => {
    items.classList.toggle("filter-mobile-hide");
});