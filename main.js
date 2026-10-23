/* Mohamed Nacir, e-portfolio: menu, reveal on scroll, active nav link. No cookies, no storage. */
(function () {
  'use strict';
  window.__mnReady = true;
  document.documentElement.classList.add('js');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  function closeMenu() {
    if (!btn || !nav) return;
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        btn.focus();
      }
    });
  }

  /* Reveal on scroll */
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    group.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i, 5) * 60) + 'ms';
    });
  });
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Active nav link */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var map = {};
  links.forEach(function (a) {
    var target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) map[target.id] = a;
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[entry.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    var mq = window.matchMedia('(min-width: 900px)');
    var sideIds = [];
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      /* On desktop the skills live in the sticky sidebar, which is always on screen (and their nav link is hidden): do not track it. */
      if (el.closest('.side')) { sideIds.push(id); return; }
      spy.observe(el);
    });
    function syncSide() {
      sideIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (mq.matches) {
          spy.unobserve(el);
          map[id].removeAttribute('aria-current');
        } else {
          spy.observe(el);
        }
      });
    }
    syncSide();
    if (mq.addEventListener) mq.addEventListener('change', syncSide);
    else if (mq.addListener) mq.addListener(syncSide);
  }
})();
