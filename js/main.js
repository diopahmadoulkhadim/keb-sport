/* Numéro WhatsApp (format international, sans + ni espaces). Numéro de Mawoury Ba, gérante. */
var KEBS_WHATSAPP = "221774700554";

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');

  /* ---------- Bouton "retour en haut" ---------- */
  const backTop = document.createElement('button');
  backTop.type = 'button';
  backTop.className = 'back-to-top';
  backTop.setAttribute('aria-label', 'Retour en haut de la page');
  backTop.innerHTML = '<i class="bi bi-arrow-up" aria-hidden="true"></i>';
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(backTop);

  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    backTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Bouton WhatsApp flottant ---------- */
  const wa = document.createElement('a');
  wa.className = 'whatsapp-float';
  wa.href = 'https://wa.me/' + KEBS_WHATSAPP + '?text=' +
    encodeURIComponent("Bonjour KEB'S SPORT, j'aimerais avoir des informations.");
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Discuter avec KEB\'S SPORT sur WhatsApp');
  wa.innerHTML = '<i class="bi bi-whatsapp" aria-hidden="true"></i>';
  document.body.appendChild(wa);

  /* ---------- Menu mobile : fermeture après clic ---------- */
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.navbar-collapse');
      if (menu && menu.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
      }
    });
  });

  /* ---------- Année du pied de page ---------- */
  document.querySelectorAll('.current-year').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- Animation d'apparition au scroll ---------- */
  const items = document.querySelectorAll('.value-card,.program-detail-card,.coach-card,.pricing-card,.info-card,.gallery-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(el => { el.classList.add('scroll-animation'); observer.observe(el); });
  }

  /* ---------- Galerie : agrandissement des photos ---------- */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  if (galleryItems.length) {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Aperçu de la photo');
    box.innerHTML =
      '<button type="button" class="lightbox-btn lightbox-close" aria-label="Fermer"><i class="bi bi-x-lg" aria-hidden="true"></i></button>' +
      '<button type="button" class="lightbox-btn lightbox-nav prev" aria-label="Photo précédente"><i class="bi bi-chevron-left" aria-hidden="true"></i></button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button type="button" class="lightbox-btn lightbox-nav next" aria-label="Photo suivante"><i class="bi bi-chevron-right" aria-hidden="true"></i></button>';
    document.body.appendChild(box);

    const bigImg = box.querySelector('img');
    const caption = box.querySelector('figcaption');
    const btns = box.querySelectorAll('button');
    let current = 0;
    let opener = null;

    const show = i => {
      current = (i + galleryItems.length) % galleryItems.length;
      const img = galleryItems[current].querySelector('img');
      bigImg.src = img.src.replace(/w=\d+/, 'w=1600');
      bigImg.alt = img.alt;
      const title = galleryItems[current].querySelector('h5');
      caption.textContent = title ? title.textContent : img.alt;
    };
    const open = i => {
      opener = galleryItems[i];
      show(i);
      box.hidden = false;
      document.body.classList.add('no-scroll');
      box.querySelector('.lightbox-close').focus();
    };
    const close = () => {
      box.hidden = true;
      document.body.classList.remove('no-scroll');
      if (opener) opener.focus();
    };

    galleryItems.forEach((item, i) => {
      const title = item.querySelector('h5');
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'Agrandir la photo : ' + (title ? title.textContent : ''));
      item.addEventListener('click', () => open(i));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    box.querySelector('.lightbox-close').addEventListener('click', close);
    box.querySelector('.prev').addEventListener('click', () => show(current - 1));
    box.querySelector('.next').addEventListener('click', () => show(current + 1));
    box.addEventListener('click', e => { if (e.target === box) close(); });
    document.addEventListener('keydown', e => {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
      else if (e.key === 'Tab') {            // garde le focus dans la fenêtre
        const first = btns[0], last = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- Calculateur d'IMC ---------- */
  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    const out = document.getElementById('bmiResult');
    bmiForm.addEventListener('submit', e => {
      e.preventDefault();
      const kg = parseFloat(document.getElementById('bmi-weight').value);
      const cm = parseFloat(document.getElementById('bmi-height').value);
      out.className = 'bmi-result';
      if (!(kg >= 20 && kg <= 300) || !(cm >= 100 && cm <= 250)) {
        out.classList.add('bmi-error');
        out.textContent = 'Entrez un poids entre 20 et 300 kg et une taille entre 100 et 250 cm.';
        return;
      }
      const bmi = kg / Math.pow(cm / 100, 2);
      let label, level;
      if (bmi < 18.5) { label = 'Insuffisance pondérale'; level = 'low'; }
      else if (bmi < 25) { label = 'Corpulence normale'; level = 'ok'; }
      else if (bmi < 30) { label = 'Surpoids'; level = 'high'; }
      else { label = 'Obésité'; level = 'high'; }
      out.classList.add('bmi-' + level);
      out.textContent = 'Votre IMC est de ' + bmi.toFixed(1).replace('.', ',') + ' : ' + label + '.';
    });
  }
  /* ---------- Barre de progression de lecture ---------- */
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    progress.style.transform = 'scaleX(' + ratio + ')';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* ---------- Compteurs animés pour les statistiques ---------- */
  const statNumbers = document.querySelectorAll('.stats-section strong');
  if ('IntersectionObserver' in window && statNumbers.length) {
    const statObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const original = el.textContent.trim();
        const match = original.match(/^(\d+)(.*)$/);
        if (match) {
          const target = Number(match[1]);
          const suffix = match[2];
          const duration = 900;
          const start = performance.now();
          const tick = now => {
            const progressValue = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progressValue, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progressValue < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
        observer.unobserve(el);
      });
    }, { threshold: 0.55 });
    statNumbers.forEach(el => statObserver.observe(el));
  }

});
