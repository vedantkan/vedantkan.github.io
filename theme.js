/* Theme toggle.
   Default: follows the device's system theme automatically (handled in CSS).
   Clicking the toggle sets a manual override that is remembered across pages.
   Clicking through light -> dark -> auto returns control to the system.      */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var ICONS = { auto: '◐', light: '☀', dark: '☾' };
  var LABELS = {
    auto:  'Theme: automatic (follows your device). Click for light.',
    light: 'Theme: light. Click for dark.',
    dark:  'Theme: dark. Click to follow your device.'
  };

  function current() {
    return root.getAttribute('data-theme') || 'auto';
  }

  function paint() {
    var mode = current();
    btn.textContent = ICONS[mode];
    btn.setAttribute('title', LABELS[mode]);
    btn.setAttribute('aria-label', LABELS[mode]);
  }

  btn.addEventListener('click', function () {
    var next = { auto: 'light', light: 'dark', dark: 'auto' }[current()];
    if (next === 'auto') {
      root.removeAttribute('data-theme');
      try { localStorage.removeItem('theme'); } catch (e) {}
    } else {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    }
    paint();
  });

  paint();

  // Current year in the footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* Glide-in: reveal content as it enters the screen, staggered top to bottom */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('anim')) return;
  var SEL = '.landing-text>*,.portrait,header.page>*,section>h2,.intro>p,.entry,.paper-row,.scholar-note,footer';
  function start() {
    root.classList.add('rv-ready');
    var els = Array.prototype.slice.call(document.querySelectorAll(SEL));
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var batch = 0, timer = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.style.setProperty('--d', Math.min(batch++ * 70, 560) + 'ms');
        requestAnimationFrame(function () { el.classList.add('in'); });
        io.unobserve(el);
      });
      clearTimeout(timer); timer = setTimeout(function () { batch = 0; }, 120);
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
