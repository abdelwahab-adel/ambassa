/**
 * AMBESA – shared-components.js
 * Injects navbar, chatbot, footer & scroll-to-top into every page
 * Each page calls initPage({ pageKey, mapSrc, videoSrc, galleryCount, galleryFolder })
 */

'use strict';

/* ── shared translation import ── */
// script.js is loaded before this file, so `translations` and helpers are available

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function buildNavbar() {
  return `
  <nav id="navbar">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo" data-translate="logo">!Ambesa</a>
      <ul class="nav__links" id="navLinks">
        <li><a href="index.html"              data-translate="home">الرئيسية</a></li>
        <li><a href="index.html#slides_parent" data-translate="heritage_sites">المواقع التراثية</a></li>
        <li><a href="index.html#pageHeaderTitle" data-translate="travel_with_us">سافر معنا</a></li>
        <li><a href="noba.html"               data-translate="our_pride">النوبة</a></li>
        <li><a href="food.html"               data-translate="food">المأكولات</a></li>
      </ul>
      <button class="nav__lang" id="langBtn" onclick="toggleLanguage()" aria-label="تبديل اللغة">
        <img id="flagImage" src="en.png" alt="English" width="22" height="22" />
        <span id="langText">English</span>
      </button>
      <button class="nav__burger" id="burgerBtn" aria-label="القائمة" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function buildFooter() {
  return `
  <footer class="footer">
    <div class="footer__grid container" style="display: flex;justify-content: center;">
      <div class="footer__col">
        <h3 class="footer__brand" data-translate="logo">!Ambesa</h3>
        <p data-translate="footer_title_desc">
          دليلك السياحي الرقمي لمدينة أسوان– نقدّم تجربة معرفية ثريّة عن تاريخها وثقافتها وطبيعتها.
        </p>
        </div>
      <div class="footer__col">
        <h4 data-translate="quick_links">روابط سريعة</h4>
        <nav>
          <a href="index.html"           data-translate="link_home"><i class="fas fa-chevron-left"></i> الرئيسية</a>
          <a href="https://mota.gov.eg/ar" target="_blank" rel="noopener" data-translate="link_tourism"><i class="fas fa-chevron-left"></i> وزارة السياحة</a>
          <a href="noba.html"            data-translate="link_Nubian"><i class="fas fa-chevron-left"></i> النوبة</a>
          <a href="https://www.almosaferoon.com/egypt/aswan/restaurants" target="_blank" rel="noopener" data-translate="link_aswan"><i class="fas fa-chevron-left"></i> أفضل مطاعم اسوان</a>
          <a href="https://www.almosaferoon.com/egypt/aswan/hotels"data-translate="link_hotel"><i class="fas fa-chevron-left"></i> أفضل فنادق اسوان</a>

        </nav>
      </div>
      <div class="footer__col">
        <h4 data-translate="contact_info">تواصل معنا</h4>
        <p data-translate="phone"><i class="fas fa-phone"></i> 00000000000</p>
        <p data-translate="email"><i class="fas fa-envelope"></i> abdelwahabadel777@gmail.com</p>
        <p data-translate="location"><i class="fas fa-map-marker-alt"></i> أسوان، مصر</p>
        <div class="footer__social">
          <a href="https://www.linkedin.com/in/abdelwahab-adel-57265926b" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="mailto:abdelwahabadel777@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100008450681129" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="http://t.me/Abdelwahab77" target="_blank" rel="noopener" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
          <a href="https://wa.me/+0200000000000" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p data-translate="copyright">© 2025 – تصميم وتطوير: عبد الوهاب عادل</p>
    </div>
  </footer>`;
}

/* ─────────────────────────────────────────
   CHATBOT
───────────────────────────────────────── */
function buildChatbot() {
  return `
  <button class="chat-fab" id="chatFab" aria-label="فتح المساعد">
    <img src="images/pngtree-pharaoh-head-of-egypt-icon-vector-png-image_7225421.png" alt="أمبيسا" />
  </button>
  <div class="chat-window" id="chatWindow" role="dialog" aria-label="نافذة الدردشة" hidden>
    <div class="chat-window__header">
      <span data-translate="chat">مرحباً، أنا <strong>أمبيسا</strong></span>
      <button class="chat-window__close" id="chatClose" aria-label="إغلاق">&times;</button>
    </div>
    <div class="chat-window__messages" id="chatMessages"></div>
    <div class="chat-window__input">
      <input type="text" id="chatInput" data-translate="Write_chat" placeholder="اكتب هنا…" autocomplete="off" />
      <button id="chatSend" data-translate="send">إرسال</button>
    </div>
  </div>`;
}

/* ─────────────────────────────────────────
   SCROLL TO TOP
───────────────────────────────────────── */
function buildScrollTop() {
  return `<button id="scrollTop" aria-label="العودة للأعلى"><i class="fa fa-arrow-up"></i></button>`;
}

/* ─────────────────────────────────────────
   INIT SHARED BEHAVIOURS
───────────────────────────────────────── */
function initShared() {
  // Inject
  document.body.insertAdjacentHTML('afterbegin', buildScrollTop() + buildNavbar());
  document.body.insertAdjacentHTML('beforeend',  buildFooter() + buildChatbot());

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
  }, { passive: true });

  // Burger
  const burger   = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('nav__links--open');
    burger.classList.toggle('nav__burger--open');
  });

  // Scroll to top
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('scrollTop--visible', window.scrollY > 300);
  }, { passive: true });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Chatbot
  const fab      = document.getElementById('chatFab');
  const win      = document.getElementById('chatWindow');
  const closeBtn = document.getElementById('chatClose');
  const sendBtn  = document.getElementById('chatSend');
  const input    = document.getElementById('chatInput');
  const msgs     = document.getElementById('chatMessages');

  fab.addEventListener('click', () => { win.hidden = !win.hidden; if (!win.hidden) input.focus(); });
  closeBtn.addEventListener('click', () => { win.hidden = true; });

  function addMsg(text, role = 'user') {
    const d = document.createElement('div');
    d.className = `chat-msg chat-msg--${role}`;
    d.innerHTML = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  async function sendChat() {
    const msg = input.value.trim();
    if (!msg) return;
    addMsg(msg, 'user');
    input.value = '';
    const t = document.createElement('div');
    t.className = 'chat-msg chat-msg--bot chat-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(t);
    msgs.scrollTop = msgs.scrollHeight;
    try {
      const res  = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer key_secret' },
        body: JSON.stringify({ model: 'google/gemma-4-31b-it:free', messages: [{ role: 'user', content: msg }], max_tokens: 1200, temperature: 1.2 }),
      });
      const data = await res.json();
      t.remove();
      addMsg(data?.choices?.[0]?.message?.content ?? 'عذراً، لم أتمكن من الحصول على رد.', 'bot');
    } catch { t.remove(); addMsg('حدث خطأ أثناء الاتصال بالخدمة.', 'bot'); }
  }

  sendBtn.addEventListener('click', sendChat);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); sendChat(); } });

  // Fade-in observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Update translations
  updateTexts();
}
