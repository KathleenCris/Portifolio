// ===== Ano automático no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em um link (útil no celular)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal (aparecer suavemente ao rolar a página) =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealTargets = document.querySelectorAll('.section, .hero');
revealTargets.forEach(el => el.classList.add('reveal'));

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  // Sem suporte ou usuário prefere menos animação: mostra tudo direto
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
