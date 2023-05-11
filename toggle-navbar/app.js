// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navLinks = document.querySelector(".links");
const toggleNav = document.querySelector(".nav-toggle");

toggleNav.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});
