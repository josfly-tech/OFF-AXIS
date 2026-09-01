const documentElement = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const intro = document.querySelector<HTMLElement>('.intro-screen');
if (intro) {
  let seen = false;
  try {
    seen = sessionStorage.getItem('oa-intro-seen') === '1';
    sessionStorage.setItem('oa-intro-seen', '1');
  } catch {
    seen = false;
  }
  window.setTimeout(() => intro.classList.add('is-done'), seen || reduceMotion ? 20 : 900);
}

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-trigger]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const setMenu = (open: boolean) => {
  body.classList.toggle('menu-open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
};
menuButton?.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
mobileMenu?.addEventListener('click', (event) => {
  if ((event.target as Element).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const topbar = document.querySelector<HTMLElement>('[data-topbar]');
let lastScroll = window.scrollY;
const updateTopbar = () => {
  const current = window.scrollY;
  topbar?.classList.toggle('is-scrolled', current > 40);
  if (!body.classList.contains('menu-open')) {
    topbar?.classList.toggle('is-hidden', current > 260 && current > lastScroll + 5);
    if (current < lastScroll - 5 || current < 260) topbar?.classList.remove('is-hidden');
  }
  lastScroll = current;
};

const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -9% 0px', threshold: 0.08 },
  );
  reveals.forEach((element) => observer.observe(element));
}

const rail = document.querySelector<HTMLElement>('.rail-spine');
const railProgress = document.querySelector<HTMLElement>('.rail-progress');
const railNode = document.querySelector<HTMLElement>('.rail-node');
const railLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-rail-link]'));
const railSections = Array.from(document.querySelectorAll<HTMLElement>('[data-rail-section]'));
const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

const updateScrollEffects = () => {
  updateTopbar();
  const available = Math.max(1, documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / available));
  if (rail && railProgress && railNode) {
    const railHeight = rail.clientHeight;
    railProgress.style.height = `${progress * 100}%`;
    railNode.style.top = `${progress * railHeight}px`;
  }

  let activeId = railSections[0]?.dataset.railSection ?? '';
  const focusLine = window.scrollY + window.innerHeight * 0.38;
  for (const section of railSections) {
    if (section.offsetTop <= focusLine) activeId = section.dataset.railSection ?? activeId;
  }
  railLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.target === activeId));

  if (!reduceMotion && window.innerWidth > 720) {
    parallaxElements.forEach((element) => {
      const amount = Number(element.dataset.parallax ?? 0);
      const rect = element.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * amount;
      element.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
    });
  }
};

let scrollFrame = 0;
const requestScrollUpdate = () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    updateScrollEffects();
    scrollFrame = 0;
  });
};
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
updateScrollEffects();

const movingAxes = Array.from(document.querySelectorAll<HTMLElement>('[data-moving-axis]'));
if (!reduceMotion && movingAxes.length) {
  const start = performance.now();
  const animateAxes = (time: number) => {
    const elapsed = (time - start) / 1000;
    const angle = Math.sin(elapsed * 0.34) * 7.2 + Math.sin(elapsed * 0.11) * 1.8;
    movingAxes.forEach((axis) => {
      axis.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      const coordinate = axis.parentElement?.querySelector<HTMLElement>('[data-coordinate]');
      if (coordinate) coordinate.textContent = `N ${(43.3 + angle * 0.42).toFixed(1)}°`;
    });
    requestAnimationFrame(animateAxes);
  };
  requestAnimationFrame(animateAxes);
}

document.querySelectorAll<HTMLDetailsElement>('.service-row').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll<HTMLDetailsElement>('.service-row').forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]');
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = contactForm.querySelector<HTMLElement>('[data-form-status]');
  const button = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]');
  const message = (key: 'sending' | 'success' | 'error') => contactForm.dataset[key] ?? '';
  const configured = contactForm.dataset.configured === 'true';
  const data = new FormData(contactForm);

  if (!configured) {
    if (status) {
      status.className = 'form-status is-error';
      status.textContent = message('error');
    }
    return;
  }

  if (status) {
    status.className = 'form-status';
    status.textContent = message('sending');
  }
  if (button) button.disabled = true;
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error('Form submission failed');
    contactForm.reset();
    if (status) {
      status.className = 'form-status is-success';
      status.textContent = message('success');
    }
  } catch {
    if (status) {
      status.className = 'form-status is-error';
      status.textContent = message('error');
    }
  } finally {
    if (button) button.disabled = false;
  }
});

const consentBanner = document.querySelector<HTMLElement>('[data-consent-banner]');
const analyticsId = body.dataset.gaId ?? '';
const loadAnalytics = () => {
  if (!analyticsId || document.querySelector(`script[data-ga="${analyticsId}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  script.dataset.ga = analyticsId;
  document.head.append(script);
  const analyticsWindow = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
  analyticsWindow.gtag('js', new Date());
  analyticsWindow.gtag('config', analyticsId, { anonymize_ip: true });
};

let savedConsent: string | null = null;
try {
  savedConsent = localStorage.getItem('oa-analytics-consent');
} catch {
  savedConsent = null;
}
if (savedConsent === 'granted') loadAnalytics();
else if (!savedConsent && consentBanner) consentBanner.hidden = false;

consentBanner?.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-consent]');
  if (!button) return;
  const value = button.dataset.consent === 'granted' ? 'granted' : 'denied';
  try {
    localStorage.setItem('oa-analytics-consent', value);
  } catch {
    // The preference remains session-only when storage is unavailable.
  }
  consentBanner.hidden = true;
  if (value === 'granted') loadAnalytics();
});

document.querySelector<HTMLButtonElement>('[data-reset-consent]')?.addEventListener('click', () => {
  try {
    localStorage.removeItem('oa-analytics-consent');
  } catch {
    // The banner can still be shown for the current page.
  }
  if (consentBanner) consentBanner.hidden = false;
});
