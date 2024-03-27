const nav = document.querySelector('.nav-style')

function toggleNav() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
};

document.getElementById('handleNavbar').addEventListener('click', toggleNav);

(function teste(){
  nav.classList.remove("open");
})();
