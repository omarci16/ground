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

// 8. Service switcher — per-barber pricing
const BARBER_SERVICES = {
  david: {
    booking: '[SALONIC_BOOKING_URL]?barber=Marozsan-David',
    services: [
      { name: { hu: 'Hajvágás', en: 'Haircut' },                         desc: { hu: 'Klasszikus vagy modern, az ízlésednek megfelelően', en: 'Classic or modern, tailored to your taste' },                           price: '5.500 Ft' },
      { name: { hu: 'Fade (gradiens vágás)', en: 'Fade' },                desc: { hu: 'Fokozatos átmenet géppel és ollóval — az ő specialitása', en: 'Graduated blend with clippers and scissors — his signature' },       price: '7.000 Ft' },
      { name: { hu: 'Textúrás vágás', en: 'Textured cut' },              desc: { hu: 'Egyedi textúra, struktúra és kontúr', en: 'Custom texture, structure and contour' },                                             price: '6.000 Ft' },
      { name: { hu: 'Szakállvágás / igazítás', en: 'Beard trim' },       desc: { hu: 'Kontúrozás, egyenesítés, precíz formázás', en: 'Contour, line-up, precise shaping' },                                            price: '3.500 Ft' },
      { name: { hu: 'Hajvágás + szakállvágás', en: 'Hair + beard combo' }, desc: { hu: 'A teljes kombinált csomag', en: 'The full combined package' },                                                                   price: '9.500 Ft' },
    ]
  },
  attila: {
    booking: '[SALONIC_BOOKING_URL]?barber=Szasz-Attila',
    services: [
      { name: { hu: 'Hajvágás', en: 'Haircut' },                         desc: { hu: 'Klasszikus vagy modern, az ízlésednek megfelelően', en: 'Classic or modern, tailored to your taste' },                           price: '5.000 Ft' },
      { name: { hu: 'Skin fade', en: 'Skin fade' },                      desc: { hu: 'Gépes gradiens, nulla fokozatig', en: 'Clipper fade all the way to the skin' },                                                  price: '6.500 Ft' },
      { name: { hu: 'Szakállvágás / igazítás', en: 'Beard trim' },       desc: { hu: 'Kontúrozás, egyenesítés, precíz formázás', en: 'Contour, line-up, precise shaping' },                                            price: '3.500 Ft' },
      { name: { hu: 'Beard styling', en: 'Beard styling' },              desc: { hu: 'Szakáll formázás, olajozás és ápolás', en: 'Beard shaping, oil treatment and conditioning' },                                    price: '4.500 Ft' },
      { name: { hu: 'Klasszikus borotválás', en: 'Classic shave' },      desc: { hu: 'Egyenes borotvával, forró törülközővel — az ő specialitása', en: 'Straight razor with hot towel — his specialty' },              price: '9.500 Ft' },
      { name: { hu: 'Hajvágás + szakállvágás', en: 'Hair + beard combo' }, desc: { hu: 'A teljes kombinált csomag', en: 'The full combined package' },                                                                   price: '8.000 Ft' },
    ]
  },
  benjamin: {
    booking: '[SALONIC_BOOKING_URL]?barber=Erdei-Benjamin',
    services: [
      { name: { hu: 'Hajvágás', en: 'Haircut' },                         desc: { hu: 'Klasszikus vagy modern, az ízlésednek megfelelően', en: 'Classic or modern, tailored to your taste' },                           price: '4.500 Ft' },
      { name: { hu: 'Crop haircut', en: 'Crop haircut' },                desc: { hu: 'Modern, strukturált crop — az ő specialitása', en: 'Modern, structured crop — his specialty' },                                  price: '5.500 Ft' },
      { name: { hu: 'Textúrás vágás', en: 'Textured cut' },              desc: { hu: 'Egyedi textúra, egyedi formák és kontúrok', en: 'Custom texture, shapes and contours' },                                         price: '6.000 Ft' },
      { name: { hu: 'Szakállvágás / igazítás', en: 'Beard trim' },       desc: { hu: 'Kontúrozás, egyenesítés, precíz formázás', en: 'Contour, line-up, precise shaping' },                                            price: '3.000 Ft' },
      { name: { hu: 'Hajvágás + szakállvágás', en: 'Hair + beard combo' }, desc: { hu: 'A teljes kombinált csomag', en: 'The full combined package' },                                                                   price: '7.500 Ft' },
    ]
  },
  zsombor: {
    booking: '[SALONIC_BOOKING_URL]?barber=Sipos-Zsombor',
    services: [
      { name: { hu: 'Hajvágás', en: 'Haircut' },                         desc: { hu: 'Klasszikus vagy modern, az ízlésednek megfelelően', en: 'Classic or modern, tailored to your taste' },                           price: '4.500 Ft' },
      { name: { hu: 'Gyerek hajvágás', en: "Kids' haircut" },            desc: { hu: '14 év alatt, türelemmel és figyelemmel', en: 'Under 14, with patience and care' },                                               price: '3.000 Ft' },
      { name: { hu: 'Fade (gradiens vágás)', en: 'Fade' },               desc: { hu: 'Fokozatos átmenet géppel kombinálva', en: 'Gradual blend with clippers' },                                                       price: '5.500 Ft' },
      { name: { hu: 'Modern vágás', en: 'Modern cut' },                  desc: { hu: 'Kortárs stílusok, fiatalos megközelítéssel', en: 'Contemporary styles with a youthful approach' },                               price: '5.000 Ft' },
      { name: { hu: 'Szakállvágás / igazítás', en: 'Beard trim' },       desc: { hu: 'Kontúrozás, egyenesítés, precíz formázás', en: 'Contour, line-up, precise shaping' },                                            price: '2.500 Ft' },
      { name: { hu: 'Hajvágás + szakállvágás', en: 'Hair + beard combo' }, desc: { hu: 'A teljes kombinált csomag', en: 'The full combined package' },                                                                   price: '6.500 Ft' },
    ]
  }
};

function renderServices(barberId) {
  const lang = document.documentElement.dataset.lang || 'hu';
  const barber = BARBER_SERVICES[barberId];
  if (!barber) return;

  const list = document.getElementById('services-list');
  const bookBtn = document.getElementById('services-book-btn');

  if (list) {
    list.innerHTML = barber.services.map(s => `
      <li class="service-item">
        <div class="service-info">
          <span class="service-name">${s.name[lang]}</span>
          <span class="service-desc">${s.desc[lang]}</span>
        </div>
        <span class="service-price font-ui">${s.price}</span>
      </li>`).join('');
  }

  if (bookBtn) {
    bookBtn.href = barber.booking;
  }
}

let activeBarber = 'david';
const switcherBtns = document.querySelectorAll('.switcher-btn');
const servicesList = document.getElementById('services-list');

// Initial render
renderServices(activeBarber);

switcherBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const barber = btn.dataset.barber;
    if (barber === activeBarber) return;

    switcherBtns.forEach(b => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
    activeBarber = barber;

    if (servicesList) {
      servicesList.classList.add('is-fading');
      setTimeout(() => {
        renderServices(barber);
        servicesList.classList.remove('is-fading');
      }, 150);
    }
  });
});

// Re-render on language change so service names/descriptions update
const langToggleForServices = document.getElementById('lang-toggle');
if (langToggleForServices) {
  langToggleForServices.addEventListener('click', () => {
    // setLanguage() has already updated dataset.lang synchronously before this fires
    renderServices(activeBarber);
  });
}

// 9. Hero parallax background
// Skip on touch devices (iOS background-attachment: fixed issues) and reduced-motion
const heroBgEl = document.querySelector('.hero-bg');
const heroParallaxEl = document.getElementById('hero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(hover: none)').matches;

if (heroBgEl && heroParallaxEl && !prefersReducedMotion && !isTouchDevice) {
  const PARALLAX_SPEED = 0.3; // bg moves at 30% of scroll speed — feels anchored
  let parallaxTicking = false;

  function updateHeroParallax() {
    const scrollY = window.scrollY;
    // Only run while hero is at least partially in view
    if (scrollY < heroParallaxEl.offsetTop + heroParallaxEl.offsetHeight) {
      heroBgEl.style.transform = `translateY(${scrollY * PARALLAX_SPEED}px)`;
    }
    parallaxTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(updateHeroParallax);
      parallaxTicking = true;
    }
  }, { passive: true });

  // Set on first paint
  updateHeroParallax();
}

// Skool section uses CSS background-attachment: fixed for a true viewport-anchored
// parallax — no JS transform needed. Mobile fallback (hover: none) is handled in CSS.
