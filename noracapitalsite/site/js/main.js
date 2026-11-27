(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
   * Smooth-scroll navigation (header, drawer, footer, in-page CTAs)
   * ------------------------------------------------------------------- */
  function scrollToTarget(id, offset) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.pageYOffset - (offset == null ? 88 : offset);
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-nav-link]'), function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var target = a.getAttribute('data-target');
      var offsetAttr = a.getAttribute('data-offset');
      var offset = offsetAttr !== null ? parseInt(offsetAttr, 10) : 88;
      scrollToTarget(target, offset);
      closeDrawer();
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('.js-back-to-top'), function (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------------------------------------------------------------------
   * Header: scroll-triggered solid state + progress bar
   * ------------------------------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var progressFill = document.getElementById('progressFill');

  function onScroll() {
    if (header) {
      if (window.scrollY > 60) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    if (progressFill) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      progressFill.style.width = pct + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------------------
   * Mobile drawer
   * ------------------------------------------------------------------- */
  var drawer = document.getElementById('mobileDrawer');
  var burgerBtn = document.getElementById('burgerBtn');
  var drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (burgerBtn) burgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target === drawer) closeDrawer(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

  /* ---------------------------------------------------------------------
   * Hero video play / pause
   * ------------------------------------------------------------------- */
  var heroVideo = document.getElementById('heroVideo');
  var heroPlayBtn = document.getElementById('heroPlayBtn');
  var heroPlayBars = document.getElementById('heroPlayBars');
  var heroPlayLabel = document.getElementById('heroPlayLabel');
  var playing = true;

  function paintPlayButton() {
    if (heroPlayBars) {
      heroPlayBars.innerHTML = playing
        ? '<span></span><span></span>'
        : '<span class="tri"></span>';
    }
    if (heroPlayLabel) heroPlayLabel.textContent = playing ? 'Pausar vídeo institucional' : 'Reproduzir vídeo institucional';
    if (heroPlayBtn) heroPlayBtn.setAttribute('aria-label', playing ? 'Pausar vídeo institucional' : 'Reproduzir vídeo institucional');
  }

  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    if (reduce) {
      try { heroVideo.pause(); } catch (e) {}
      playing = false;
    } else {
      var p = heroVideo.play();
      if (p && p.catch) p.catch(function () {});
    }
    paintPlayButton();
  }

  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', function () {
      playing = !playing;
      if (heroVideo) {
        try { playing ? heroVideo.play() : heroVideo.pause(); } catch (e) {}
      }
      paintPlayButton();
    });
  }

  /* ---------------------------------------------------------------------
   * Scroll reveal
   * ------------------------------------------------------------------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduce || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revealItems.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------------
   * BPO interactive rotator
   * ------------------------------------------------------------------- */
  (function () {
    var panel = document.getElementById('bpoPanel');
    if (!panel) return;
    var items = Array.prototype.slice.call(document.getElementById('bpoList').querySelectorAll('.bpo-item'));
    var title = document.getElementById('bpoTitle');
    var text = document.getElementById('bpoText');
    var count = document.getElementById('bpoCount');
    var fill = document.getElementById('bpoFill');
    var DUR = 4600;
    var cur = 0;
    var timer = null;

    function rail(run) {
      if (!fill) return;
      if (!run) {
        fill.style.transition = 'none';
        return;
      }
      fill.style.transition = 'none';
      fill.style.width = '0%';
      var go = function () {
        fill.style.transition = 'width ' + DUR + 'ms linear';
        fill.style.width = '100%';
      };
      requestAnimationFrame(go);
    }

    function paint(i) {
      cur = i;
      items.forEach(function (el, k) { el.classList.toggle('is-active', k === i); });
      var b = items[i];
      if (title) title.textContent = b.getAttribute('data-name');
      if (text) text.textContent = b.getAttribute('data-text');
      if (count) count.textContent = (i < 9 ? '0' : '') + (i + 1) + ' / 06';
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      rail(false);
    }
    function start() {
      if (reduce) return;
      if (timer) clearInterval(timer);
      timer = setInterval(function () { paint((cur + 1) % items.length); rail(true); }, DUR);
      rail(true);
    }

    items.forEach(function (b, k) {
      b.addEventListener('click', function () { paint(k); start(); });
      b.addEventListener('mouseenter', function () { paint(k); });
    });
    panel.addEventListener('mouseenter', stop);
    panel.addEventListener('mouseleave', start);
    start();
  })();

  /* ---------------------------------------------------------------------
   * FAQ accordion (single open)
   * ------------------------------------------------------------------- */
  (function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
    items.forEach(function (item) {
      var btn = item.querySelector('.faq-item__btn');
      var panel = item.querySelector('.faq-item__panel');
      if (!btn || !panel) return;

      function setOpen(on) {
        item.classList.toggle('is-open', on);
        panel.style.height = on ? panel.scrollHeight + 'px' : '0px';
      }
      // initial state
      setOpen(item.classList.contains('is-open'));

      btn.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        items.forEach(function (other) {
          if (other === item) return;
          if (!other.classList.contains('is-open')) return;
          other.classList.remove('is-open');
          var op = other.querySelector('.faq-item__panel');
          if (op) op.style.height = '0px';
        });
        setOpen(willOpen);
      });
    });

    // Keep open panel's height correct on resize (fluid type/width can change scrollHeight)
    window.addEventListener('resize', function () {
      var open = document.querySelector('.faq-item.is-open .faq-item__panel');
      if (open) open.style.height = open.scrollHeight + 'px';
    });
  })();

  /* ---------------------------------------------------------------------
   * Footer brand pill hover tint (color read from --pill custom property)
   * ------------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.footer-brand-pill'), function (el) {
    var c = getComputedStyle(el).getPropertyValue('--pill').trim() || '#BC9466';
    var hex = c.replace('#', '');
    if (hex.length !== 6) return;
    var rgb = [0, 2, 4].map(function (i) { return parseInt(hex.substr(i, 2), 16); }).join(',');
    el.addEventListener('mouseenter', function () {
      el.style.borderColor = 'rgba(' + rgb + ',.8)';
      el.style.boxShadow = '0 16px 30px -20px rgba(13,26,72,.4), 0 8px 18px -14px rgba(' + rgb + ',.7)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.borderColor = 'rgba(13,26,72,.1)';
      el.style.boxShadow = '';
    });
  });

  /* ---------------------------------------------------------------------
   * Contact form: client-side validation + simulated submit states
   * ------------------------------------------------------------------- */
  (function () {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var submitBtn = document.getElementById('submitBtn');
    var submitSpinner = document.getElementById('submitSpinner');
    var submitLabel = document.getElementById('submitLabel');
    var formError = document.getElementById('formError');
    var formSuccess = document.getElementById('formSuccess');

    function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }

    function setState(state) {
      submitSpinner.hidden = state !== 'sending';
      formError.hidden = state !== 'error';
      formSuccess.hidden = state !== 'success';
      submitBtn.disabled = state === 'sending';
      submitLabel.textContent = state === 'sending' ? 'Enviando…' : (state === 'success' ? 'Enviado' : 'Enviar');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = val('df-nome') && val('df-email') && val('df-tel');
      if (!ok) { setState('error'); return; }
      setState('sending');
      setTimeout(function () { setState('success'); }, 900);
    });

    Array.prototype.forEach.call(form.querySelectorAll('[data-field]'), function (f) {
      f.addEventListener('focus', function () { formError.hidden = true; });
    });
  })();

})();
