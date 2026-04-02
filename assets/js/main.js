/* ============================================
   SPARK EVENTI — Slideshows
   ============================================ */

function initSlideshow(selector, interval) {
  const slides = document.querySelectorAll(selector);
  if (!slides.length) return;
  let current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, interval);
}

initSlideshow('.hero-slideshow .slide', 5000);
initSlideshow('.founder-slideshow .founder-slide', 4000);

/* ============================================
   HAMBURGER MENU
   ============================================ */

(function () {
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  function openMenu() {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    btn.classList.contains('open') ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
