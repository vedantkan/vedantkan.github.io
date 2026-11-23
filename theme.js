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
