// ============================================================
// A Ground — Barbershop Debrecen
// main.js
// ============================================================

// 1. Language toggle
function setLanguage(lang) {
  document.querySelectorAll('[data-hu]').forEach(el => {
    const val = el.dataset[lang];
    if (!val) return;
    if (val.includes('<')) {
      el.innerHTML = val;
    } else if (el.children.length === 0) {
      el.textContent = val;
    }
  });
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === 'hu' ? 'hu' : 'en';
  localStorage.setItem('ground_lang', lang);
}

let currentLang = localStorage.getItem('ground_lang') || 'hu';
setLanguage(currentLang);

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'hu' ? 'en' : 'hu';
  setLanguage(currentLang);
});

// 2. Intersection Observer for .reveal elements
// Once triggered, add .is-visible, then unobserve
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 3. Transparent nav — over hero only
const heroSection = document.getElementById('hero');
const navBar = document.getElementById('nav');

if (heroSection && navBar) {
  const heroTransparentObserver = new IntersectionObserver(
    ([entry]) => {
      navBar.classList.toggle('nav-transparent', entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '0px 0px 0px 0px' }
  );
  heroTransparentObserver.observe(heroSection);
}

// 4. Nav scroll-spy — highlight active section as user scrolls
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav .nav-links a[href^="#"]');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -40% 0px' }
);

sections.forEach(s => navObserver.observe(s));

// 4. Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navEl = document.getElementById('nav');

if (navToggle && navEl) {
  navToggle.addEventListener('click', () => {
    navEl.classList.toggle('nav-open');
    const isOpen = navEl.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  navEl.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navEl.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navEl.classList.contains('nav-open') && !navEl.contains(e.target)) {
      navEl.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// 5. Prevent body scroll when mobile nav is open
const htmlEl = document.documentElement;

if (navToggle && navEl) {
  navEl.addEventListener('click', () => {
    if (navEl.classList.contains('nav-open')) {
      htmlEl.style.overflow = 'hidden';
    } else {
      htmlEl.style.overflow = '';
    }
  });

  navEl.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      htmlEl.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navEl.contains(e.target)) {
      htmlEl.style.overflow = '';
    }
  });
}

// 6. Stagger index propagation for barber cards
// Ensures CSS --i variable is set for any dynamically added items
document.querySelectorAll('.barber-card[data-index]').forEach(el => {
  const idx = parseInt(el.getAttribute('data-index'), 10);
  el.style.setProperty('--i', idx);
});

// 7. Smooth scroll for anchor links (fallback for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
