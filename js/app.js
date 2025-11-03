const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const navItems = document.querySelectorAll('.nav-links a'); // all menu links

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Open menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuToggle.style.display = 'none';
  closeMenu.style.display = 'block';
});


closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeMenu.style.display = 'none';
  menuToggle.style.display = 'block';
});


navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.style.display = 'none';
    menuToggle.style.display = 'block';
  });
});
