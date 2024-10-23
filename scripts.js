// script.js

// Rolagem suave com compensação da altura do menu fixo
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          e.preventDefault();
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const elementPosition = target.offsetTop - navbarHeight;
          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
          });
      }
  });
});
