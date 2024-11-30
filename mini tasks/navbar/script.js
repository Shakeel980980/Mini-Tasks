// script.js

const toggleButton = document.getElementById('toggle-btn');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
