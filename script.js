/* ===== PRELOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1400);
});

/* ===== THEME TOGGLE ===== */
const html = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ===== CURSOR ===== */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 4 + 'px';
  cursor.style.top = e.clientY - 4 + 'px';
});

document.querySelectorAll('a, button, .skill-card, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

/* ===== NAV SCROLL ===== */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== TYPEWRITER ===== */
const phrases = [
  'Software Engineer',
  'Hardware Enthusiast',
  'AI Explorer',
  'Signal Processing',
];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    tw.textContent = phrase.slice(0, ci + 1);
    ci++;
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    tw.textContent = phrase.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 90);
}
type();

/* ===== FADE-UP ON SCROLL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
