// Animación fade-up al hacer scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.classList.add('fade-up');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Resaltar nav activo al hacer scroll
const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
      });
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.style.background = '#e91e8c';
        activeLink.style.color = '#ffffff';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

