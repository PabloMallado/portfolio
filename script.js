document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  
    // Desplazamiento suave en enlaces del menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 0, // Ajusta si quieres un offset distinto
            behavior: 'smooth'
          });
        }
        // Cerrar menú tras hacer clic en móvil
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  
    // Botón "Volver arriba"
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
      backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
  
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Animación de aparición de secciones con Intersection Observer
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      threshold: 0.1
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  });
  