 const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const closeMenu = document.querySelector('.close-menu');


  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


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