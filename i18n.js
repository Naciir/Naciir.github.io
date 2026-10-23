/* Mohamed Nacir, e-portfolio: FR/EN switch. French is the markup; English is swapped in here.
   Language order: ?lang=en|fr in the URL, else the browser language (fr or ar -> French, anything else -> English).
   No cookies, no storage: the manual choice lives in the URL (?lang=). */
(function () {
  'use strict';
  var EN = {
  "nav.profile": "Profile",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.education": "Education",
  "nav.skills": "Skills",
  "skip": "Skip to content",
  "hero.lead": "Junior Data Engineer: I build data and automation pipelines, from collection to publication.",
  "hero.meta": "Fifth-year engineering student in AI and Big Data at the Université Internationale de Rabat. Open to a final-year data engineering internship starting February 2027.",
  "hero.cta1": "View projects",
  "contact.me": "Contact me",
  "profile.p1": "What interests me is the journey of data: RSS feeds, APIs, PDF documents or raw exports arriving from everywhere, which have to come out clean, dated, stored and ready for someone else to use. During my internships I built this kind of chain with Python, PostgreSQL, FastAPI, n8n and Docker, and I learned that the most useful part is often the least visible: stability and documentation.",
  "profile.p2": "I am looking for a final-year data engineering internship (data team, bank, telecom or start-up) in Casablanca or Rabat, starting February 2027, with the goal of landing a first data engineer position.",
  "exp.tek.title": "AI and Automation Engineering Intern",
  "exp.tek.sub": "Rabat, Morocco, 2-month internship",
  "exp.tek.b1": "Contributed to the design and deployment of a modular data pipeline (ETL logic): collection of 25&nbsp;RSS sources, PostgreSQL storage, n8n orchestration, scoring, then publication.",
  "exp.tek.b2": "Pipeline stack: Python, PostgreSQL, FastAPI, n8n and Docker; integration of the Gemini, ElevenLabs and Pexels APIs and FFmpeg.",
  "exp.tek.b3": "Contributed to a scoring engine based on four signals (freshness, source authority, relevance, trend), applied to the 25&nbsp;sources to automatically select the article of the week.",
  "exp.tek.b4": "Automated output: SEO articles and vertical videos as WordPress drafts, human review, then a six-step publishing flow to WordPress, Instagram, TikTok and LinkedIn.",
  "exp.tek.b5": "Helped containerize the stack with Docker and PostgreSQL, resolving port conflicts and volume identifier issues for a stable local deployment.",
  "exp.gam.title": "AI Backend Development Intern",
  "exp.sub1m": "Rabat, Morocco, 1-month internship",
  "exp.gam.b1": "Contributed to the EKR (Extended Knowledge Repository) architecture of a production-grade fact-checking API: FastAPI, Qwen-Turbo, SerpAPI and Crawl4AI for asynchronous web extraction.",
  "exp.gam.b2": "Worked on asynchronous LLM and scraping pipelines with concurrent requests to increase throughput.",
  "exp.gam.b3": "Contributed to a content reliability scoring module (source credibility, <span class=\"nowrap\" style=\"white-space:nowrap\">claim-evidence</span> alignment).",
  "exp.gam.b4": "Low-latency Groq inference for near real-time verification, with PDF preprocessing and text extraction.",
  "exp.cla.title": "Technical Studies Intern",
  "exp.cla.b1": "Took part in drawing up the specifications of a visitor access management system: security, fire safety, networks and telecoms, building technical management.",
  "exp.cla.b2": "Functional analysis of client needs with the Design Office team; technical documentation and requirements sheets.",
  "pj1.title": "Content moderation bot",
  "pj1.tech": "Python, Telegram API, Gemini, Chart.js",
  "pj1.text": "Telegram bot combining blacklist filtering and severity classification by Gemini (from Critical to Safe) to flag threats in real time; every event is logged in a structured JSON audit log and visualized in a Chart.js dashboard (severity, keywords, top offenders, filterable log).",
  "pj2.title": "Snapchat memories recovery tool",
  "pj2.text": "Utility that repairs Snapchat exports: merges the split photo/video files and their overlays, then restores each file's real capture date and GPS position by cross-referencing the export's JSON history.",
  "pj3.title": "Motion blur deconvolution",
  "pj3.text": "Blind deblurring pipeline for license plates: blur angle and length estimated with a windowed FFT and cepstral analysis, restoration by Wiener deconvolution, validated on a 3&nbsp;x&nbsp;3 parameter sweep using PSNR.",
  "pj4.title": "MT5 algorithmic trading bot",
  "pj4.tech": "MQL5 Expert Advisor",
  "pj4.text": "Automated strategy for MetaTrader 5 based on Fair Value Gaps and liquidity sweep detection, with RSI and moving averages as confirmation signals before entering a position.",
  "more": "Code and other work on <a href=\"https://github.com/Naciir\" target=\"_blank\" rel=\"noopener\">github.com/Naciir</a>",
  "edu.title": "Engineering degree, Computer Engineering",
  "edu.years": "2022 to 2027",
  "edu.note": "Specialization: AI and Big Data Engineering.",
  "side.role": "Computer Engineering<br>5th year",
  "side.email": "Email",
  "side.location": "Location",
  "loc": "Rabat, Morocco",
  "sk.data": "Data and Big Data",
  "sk.etl": "ETL, orchestration and BI",
  "sk.prog": "Programming",
  "sk.backend": "Backend and infrastructure",
  "sk.ai": "AI and data science",
  "sk.tools": "Tools",
  "langs.title": "Languages",
  "lang.ar": "Arabic",
  "lang.native": "Native",
  "lang.fr": "French",
  "lang.fluent": "Fluent",
  "lang.en": "English",
  "lang.es": "Spanish",
  "lang.inter": "Intermediate",
  "int.title": "Interests",
  "int.rotaract": "Rotaract member",
  "int.oss": "Open source contributions",
  "int.android": "Android / custom ROMs",
  "contact.intro": "For an internship, a project or a technical question: drop me a line.",
  "contact.cv": "Download my CV (PDF)",
  "colophon": "Mohamed Nacir, Rabat. Static site with no cookies or trackers.",
  "totop": "Back to top",
  "mark.aria": "MN, Mohamed Nacir, back to top",
  "nav.aria": "Main navigation",
  "chips.aria": "Main tools",
  "photo.alt": "Portrait of Mohamed Nacir",
  "side.aria": "Profile card",
  "cv.href": "assets/CV_Mohamed_Nacir_EN.pdf"
  };
  var EN_TITLE = 'Mohamed Nacir, Junior Data Engineer';
  var EN_DESC = 'Mohamed Nacir, fifth-year engineering student in AI and Big Data at UIR (Rabat). Data and automation pipelines: Python, SQL, Spark, Docker, n8n. Final-year data engineering internship from February 2027.';

  var root = document.documentElement;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n], [data-i18n-attrs]'));
  var descEl = document.querySelector('meta[name="description"]');
  var frTitle = document.title;
  var frDesc = descEl ? descEl.getAttribute('content') : '';
  var btn = document.querySelector('[data-lang-switch]');

  /* Remember the French originals so the switch can go back and forth. */
  nodes.forEach(function (el) {
    if (el.hasAttribute('data-i18n')) el.__fr = el.innerHTML;
    var spec = el.getAttribute('data-i18n-attrs');
    if (spec) {
      el.__frAttrs = {};
      spec.split(';').forEach(function (pair) {
        var p = pair.split('=');
        el.__frAttrs[p[0]] = el.getAttribute(p[0]);
      });
    }
  });

  function apply(lang) {
    var en = lang === 'en';
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && EN[key] !== undefined) el.innerHTML = en ? EN[key] : el.__fr;
      var spec = el.getAttribute('data-i18n-attrs');
      if (spec) {
        spec.split(';').forEach(function (pair) {
          var p = pair.split('=');
          el.setAttribute(p[0], en && EN[p[1]] !== undefined ? EN[p[1]] : el.__frAttrs[p[0]]);
        });
      }
    });
    root.lang = lang;
    document.title = en ? EN_TITLE : frTitle;
    if (descEl) descEl.setAttribute('content', en ? EN_DESC : frDesc);
    if (btn) {
      btn.textContent = en ? 'FR' : 'EN';
      btn.setAttribute('lang', en ? 'fr' : 'en');
      btn.setAttribute('aria-label', en ? 'Passer le site en français' : 'Switch the site to English');
    }
    root.classList.remove('i18n-pending');
  }

  var current = window.__mnLang === 'en' ? 'en' : 'fr';
  apply(current);

  if (btn) {
    btn.addEventListener('click', function () {
      current = current === 'en' ? 'fr' : 'en';
      apply(current);
      try {
        var u = new URL(window.location.href);
        u.searchParams.set('lang', current);
        history.replaceState(null, '', u.toString());
      } catch (e) { /* file:// or old browser: the switch still works, the URL just does not change */ }
    });
  }
})();
