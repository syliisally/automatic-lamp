document.addEventListener('DOMContentLoaded', function () {


  /* === hamburger + menu mobile === */
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  if (hamburger && menu && overlay) {

    // otwieranie / zamykanie menu
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      menu.classList.toggle('open');
      overlay.classList.toggle('active');
      body.classList.toggle('menu-open'); // 🔒 blokada scrolla
    });

    // klik w overlay → zamyka wszystko
    overlay.addEventListener('click', function () {
      hamburger.classList.remove('active');
      menu.classList.remove('open');
      overlay.classList.remove('active');
      body.classList.remove('menu-open'); // 🔓 odblokowanie scrolla
    });

    // klik w link menu → zamyka menu
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        menu.classList.remove('open');
        overlay.classList.remove('active');
        body.classList.remove('menu-open'); // 🔓 odblokowanie scrolla
      });
    });

  }

});

window.addEventListener('load', () => {
  const svg = document.querySelector('.header-stroke-svg');
  if (svg) {
    setTimeout(() => {
      svg.classList.add('stroke-animate');
    }, 450);
  }
});


/* ===== mikro-interakcja: glow przy pierwszym scrollu ===== */
let strokeGlowTriggered = false;

window.addEventListener(
  'scroll',
  () => {
    if (strokeGlowTriggered) return;

    const svg = document.querySelector('.header-stroke-svg');
    if (!svg) return;

    strokeGlowTriggered = true;
    svg.classList.add('glow');

    setTimeout(() => {
      svg.classList.remove('glow');
    }, 300);
  },
  { passive: true }
);

// === DISABLE Big Picture hero positioning ===
window.addEventListener('load', () => {
  const heroHeader = document.querySelector('#header header.major');
  if (heroHeader) {
    heroHeader.style.position = 'relative';
    heroHeader.style.top = 'auto';
    heroHeader.style.marginTop = '0';
  }
});

// Smooth scroll – softer, cinematic
$('.scrolly').scrolly({
  speed: 1200,
  offset: 0
});

