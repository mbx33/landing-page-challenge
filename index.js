const navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", changeNavColor);

function changeNavColor() {
  if (window.scrollY >= 10) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}
