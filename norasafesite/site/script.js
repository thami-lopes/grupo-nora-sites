(() => {
  'use strict';

  const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduceMotion = !!(mq && mq.matches);

  // ---------- Hero video ----------
  const video = document.getElementById('hero-video');
  const videoToggle = document.getElementById('video-toggle');
  const pauseIcon = videoToggle ? videoToggle.querySelector('.pause-icon') : null;
  const playIcon = videoToggle ? videoToggle.querySelector('.play-icon') : null;
  const videoLabel = videoToggle ? videoToggle.querySelector('.video-toggle-label') : null;
  let playing = true;

  function setToggleState(isPlaying) {
    playing = isPlaying;
    const label = isPlaying ? 'Pausar vídeo institucional' : 'Reproduzir vídeo institucional';
    if (videoToggle) videoToggle.setAttribute('aria-label', label);
    if (videoLabel) videoLabel.textContent = label;
    if (pauseIcon) pauseIcon.hidden = !isPlaying;
    if (playIcon) playIcon.hidden = isPlaying;
  }

  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    if (reduceMotion) {
      try { video.pause(); } catch (e) {}
      setToggleState(false);
    } else {
      const p = video.play();
      if (p && p.catch) p.catch(() => setToggleState(false));
      setToggleState(true);
    }
  }

  if (videoToggle && video) {
    videoToggle.addEventListener('click', () => {
      if (playing) {
        try { video.pause(); } catch (e) {}
        setToggleState(false);
      } else {
        const p = video.play();
        if (p && p.catch) p.catch(() => {});
        setToggleState(true);
      }
    });
  }

  // ---------- Header scroll state + progress bar + hero parallax ----------
  const header = document.getElementById('site-header');
  const progressBar = document.getElementById('progress-bar');
  const heroCopy = document.getElementById('hero-copy');
  const heroFrame = document.querySelector('.hero-frame');

  let ticking = false;
  function onScrollFrame() {
    ticking = false;
    const y = window.scrollY || window.pageYOffset || 0;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (progressBar) progressBar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';

    if (header) header.classList.toggle('is-scrolled', y > 60);

    if (!reduceMotion && heroFrame) {
      const h = heroFrame.clientHeight || 900;
      const t = Math.min(1, y / h);
      if (video) video.style.transform = 'scale(' + (1.1 + t * 0.06) + ') translateY(' + (-t * 34) + 'px)';
      if (heroCopy) {
        heroCopy.style.transform = 'translateY(' + (t * 46) + 'px)';
        heroCopy.style.opacity = String(Math.max(0, 1 - t * 1.35));
      }
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScrollFrame();

  // ---------- Reveal on scroll ----------
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(() => el.classList.add('is-visible'), delay);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  }

  // ---------- FAQ accordion ----------
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  function setFaqOpen(item, open) {
    const btn = item.querySelector('.faq-btn');
    const panel = item.querySelector('.faq-panel-inner');
    if (open) {
      item.setAttribute('data-faq-open', '');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      if (panel) panel.style.height = panel.scrollHeight + 'px';
    } else {
      item.removeAttribute('data-faq-open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (panel) panel.style.height = '0px';
    }
  }
  faqItems.forEach((item) => {
    const isOpen = item.hasAttribute('data-faq-open');
    const panel = item.querySelector('.faq-panel-inner');
    if (panel) panel.style.height = isOpen ? panel.scrollHeight + 'px' : '0px';
    const btn = item.querySelector('.faq-btn');
    if (btn) btn.addEventListener('click', () => {
      const willOpen = !item.hasAttribute('data-faq-open');
      faqItems.forEach((other) => { if (other !== item) setFaqOpen(other, false); });
      setFaqOpen(item, willOpen);
    });
  });
  window.addEventListener('resize', () => {
    faqItems.forEach((item) => {
      if (!item.hasAttribute('data-faq-open')) return;
      const panel = item.querySelector('.faq-panel-inner');
      if (panel) panel.style.height = panel.scrollHeight + 'px';
    });
  });

  // ---------- Mobile drawer ----------
  const menuToggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  function closeDrawer() {
    if (!drawer || !menuToggle) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (header) header.classList.remove('menu-open');
  }
  function openDrawer() {
    if (!drawer || !menuToggle) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (header) header.classList.add('menu-open');
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeDrawer() : openDrawer();
    });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

  // ---------- Contact form (client-side only, no backend wired) ----------
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const submitLabel = submitBtn ? submitBtn.querySelector('.form-submit-label') : null;
  const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;
  const errorMsg = document.getElementById('form-error');
  const successMsg = document.getElementById('form-success');
  const requiredFields = ['f-nome', 'f-email', 'f-tel', 'f-msg'];

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const missing = requiredFields.filter((id) => {
        const el = document.getElementById(id);
        const empty = !el || !el.value.trim();
        if (el) el.classList.toggle('has-error', empty);
        return empty;
      });

      if (errorMsg) errorMsg.hidden = missing.length === 0;
      if (successMsg) successMsg.hidden = true;
      if (missing.length) return;

      if (submitBtn) submitBtn.disabled = true;
      if (spinner) spinner.hidden = false;
      if (submitLabel) submitLabel.textContent = 'Enviando…';

      setTimeout(() => {
        if (spinner) spinner.hidden = true;
        if (submitLabel) submitLabel.textContent = 'Enviado';
        if (submitBtn) submitBtn.disabled = false;
        if (successMsg) successMsg.hidden = false;
        if (errorMsg) errorMsg.hidden = true;
      }, 900);
    });
  }
})();
