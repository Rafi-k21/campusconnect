
// Handle dark mode
(function() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('cc-theme');
  const root = document.documentElement;

  function apply(theme) {
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    document.getElementById('darkToggle')?.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  apply(saved || (prefersDark ? 'dark' : 'light'));

  document.getElementById('darkToggle')?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('cc-theme', isDark ? 'dark' : 'light');
    document.getElementById('darkToggle')?.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  });
})();

// Mobile nav
document.getElementById('navToggle')?.addEventListener('click', function() {
  const nav = document.getElementById('siteNav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', (!expanded).toString());
  nav.classList.toggle('open');
});

// Simple jQuery slideshow
$(function() {
  let idx = 0;
  const $slides = $('.slide');
  if ($slides.length) {
    setInterval(function() {
      $slides.eq(idx).removeClass('visible');
      idx = (idx + 1) % $slides.length;
      $slides.eq(idx).addClass('visible');
    }, 3500);
  }
});
