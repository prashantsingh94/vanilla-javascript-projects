const sidebarNav = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", function () {
  sidebarNav.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebarNav.classList.remove("show-sidebar");
});
