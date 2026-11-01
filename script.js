const I18N = {
  ja: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'hero.tag': '電気電子工学 / Electrical & Electronic Engineering',
    'hero.line1': '京都大学 工学部 電気電子工学科',
    'hero.line2': 'ワシントン大学（シアトル）交換留学 — 2027年3月まで',
    'hero.cta': '詳しく見る ↓',
    'about.p1':
      '京都大学工学部電気電子工学科。信号処理・RF・AIシステムを中心に学んでいます。2026年3月までワシントン大学シアトル校で交換留学中です。',
    'about.p2':
      'Webアプリ、Chrome拡張、3D/インタラクティブなUIなど、学内外のプロジェクトをGitHubで公開しています。',
    'about.fact1': '📍 Seattle, WA（交換） / Kyoto, Japan',
    'about.fact2': '🎓 Kyoto University — EEE / UW Exchange',
    'about.fact3': '💻 Python · TypeScript · C++ · Web',
    'about.fact4': '🌏 日本語 / English',
    'skills.elec.title': 'Electronics',
    'skills.elec.body': '信号処理、RF、伝送線路、電磁波（授業・実験ベース）',
    'skills.sw.title': 'Software',
    'skills.sw.body': 'Python / TypeScript / C++。Web、Chrome拡張、Linux',
    'skills.ai.title': 'AI / ML',
    'skills.ai.body': 'ローカルLLMの試用、課題・個人開発での活用（Ollama 等）',
    'skills.tools.title': 'Tools',
    'skills.tools.body': 'GitHub、Notion、VS Code、Docker（個人環境）',
    'projects.note':
      '公開リポジトリはGitHubへリンクしています。自宅サーバーで運用する非公開プロジェクトは説明のみ掲載しています。',
    'projects.private': '非公開',
    'projects.p1': 'クラシック2048の3D版パズルゲーム。',
    'projects.p2': 'HTML/DOMを3D空間（建物・通路・ポータル）として探索するブラウザ実験。',
    'projects.p3': '学内LMSの認証済みセッションからPDFを取得し、Notionページへ埋め込むChrome拡張。',
    'projects.p5': 'HTML/CSS/JavaScriptのみのWeb電卓アプリ。',
    'projects.p6':
      '自宅のゲーミングPCをブラウザから操作するリモートサービス。HTML5クライアント向けにHTTPS/Tailscale経由でWebSocketを安全に中継し、Moonlight/WebRTC設定で低遅延の映像・入力ストリーミングを提供します。',
    'projects.p7':
      '自宅LAN向けのWebコンソール「KAINEL Agent OS」。Fastify BFFがチャット、タスク、自動化、プラグイン、Discord連携などのAPIを提供し、OpenClawゲートウェイと連携してエージェント運用をブラウザから管理します。',
    'projects.p8':
      'Google Driveを中心にファイル共有・個人ダッシュボード・授業資料整理・NotebookLM/Gemini連携を行うNext.jsアプリ。Dockerで常時稼働し、OpenClaw向けAPIでKULMS（学内LMS）同期なども提供します。',
    'events.planned': '予定',
    'events.attendee': '参加',
    'events.boston.place': '📍 Boston, MA — Nov 20–22, 2026',
    'events.boston.desc':
      'ボストン・キャリアフォーラム参加予定。本サイトURLは名刺QRコード用に公開予定です。',
    'events.janog.place': '📍 大阪（JANOG57）',
    'events.janog.desc':
      'JANOG57に参加。ネットワーク運用・技術に関するセッションに参加しました（従来サイト記載より）。',
    'events.axies.place': '📍 奈良（AXIES 2024）',
    'events.axies.desc':
      '大学ICT推進協議会 AXIES 2024 年次大会に参加（従来サイト記載より）。',
    'contact.heading': 'Contact',
    'contact.body': 'インターンシップや技術コラボのご連絡はメールまたはGitHubへどうぞ。',
    'footer.copy': '© 2026 市毛 大渡',
    'footer.built': 'GitHub Pages',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'hero.tag': 'Electrical & Electronic Engineering',
    'hero.line1': 'Kyoto University — Faculty of Engineering, EEE',
    'hero.line2': 'Exchange at University of Washington, Seattle — until March 2027',
    'hero.cta': 'Explore ↓',
    'about.p1':
      'Undergraduate in Electrical and Electronic Engineering at Kyoto University, focusing on signal processing, RF, and AI-related systems. On exchange at the University of Washington, Seattle through March 2027.',
    'about.p2':
      'I build and publish software projects on GitHub—web apps, a Chrome extension, and interactive 3D experiments.',
    'about.fact1': '📍 Seattle, WA (exchange) / Kyoto, Japan',
    'about.fact2': '🎓 Kyoto University — EEE / UW Exchange',
    'about.fact3': '💻 Python · TypeScript · C++ · Web',
    'about.fact4': '🌏 Japanese / English',
    'skills.elec.title': 'Electronics',
    'skills.elec.body': 'Signal processing, RF, transmission lines, electromagnetics (coursework & labs)',
    'skills.sw.title': 'Software',
    'skills.sw.body': 'Python, TypeScript, C++, web apps, Chrome extensions, Linux',
    'skills.ai.title': 'AI / ML',
    'skills.ai.body': 'Local LLM experimentation for personal projects (e.g. Ollama)',
    'skills.tools.title': 'Tools',
    'skills.tools.body': 'GitHub, Notion, VS Code, Docker (personal setup)',
    'projects.note':
      'Public repos link to GitHub. Private, self-hosted projects are described here without repository links.',
    'projects.private': 'Private',
    'projects.p1': 'A three-dimensional take on the classic 2048 puzzle game.',
    'projects.p2': 'Experimental browser that maps HTML/DOM into a navigable 3D world.',
    'projects.p3': 'Chrome extension: fetch PDFs from an authenticated campus LMS session and embed them in Notion.',
    'projects.p5': 'Feature-rich calculator web app using vanilla HTML, CSS, and JavaScript.',
    'projects.p6':
      'Self-hosted service to use a home gaming PC from a browser: an HTTPS/Tailscale-aware WebSocket proxy for HTML5 remote clients, plus Moonlight/WebRTC streaming for low-latency video and input.',
    'projects.p7':
      'Private web console (KAINEL Agent OS): a Fastify backend exposes chat, tasks, automations, plugins, and Discord integration APIs, coordinating with an OpenClaw gateway for agent operations in the browser.',
    'projects.p8':
      'Next.js personal web app centered on Google Drive—multi-device file hub, configurable dashboard widgets, course materials, and NotebookLM/Gemini helpers—run in Docker with OpenClaw APIs for KULMS (campus LMS) sync.',
    'events.planned': 'Planned',
    'events.attendee': 'Attendee',
    'events.boston.place': '📍 Boston, MA — Nov 20–22, 2026',
    'events.boston.desc':
      'Planning to attend the Boston Career Forum. This site URL is intended for recruiters (business card QR).',
    'events.janog.place': '📍 Osaka — JANOG57',
    'events.janog.desc':
      'Attended JANOG57 (network operations conference), as listed on the previous portfolio site.',
    'events.axies.place': '📍 Nara — AXIES 2024',
    'events.axies.desc':
      'Attended AXIES 2024 annual meeting (university ICT), as listed on the previous portfolio site.',
    'contact.heading': "Let's Connect",
    'contact.body': 'Open to internships and technical collaboration—email or GitHub is best.',
    'footer.copy': '© 2026 Taito Ichige',
    'footer.built': 'GitHub Pages',
  },
};

const typewriterPhrases = {
  ja: ['ソフトウェア', 'ハードウェア', '信号処理', 'AI / LLM'],
  en: ['Software', 'Hardware', 'Signal Processing', 'AI / LLM'],
};

let lang = localStorage.getItem('portfolio-lang') || 'ja';
let pi = 0;
let ci = 0;
let deleting = false;

function applyLang(next) {
  lang = next;
  localStorage.setItem('portfolio-lang', next);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = I18N[lang][key];
    if (text) el.textContent = text;
  });
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.textContent = lang === 'ja' ? 'EN' : 'JA';
    toggle.setAttribute('aria-pressed', lang === 'ja' ? 'false' : 'true');
  }
  pi = 0;
  ci = 0;
  deleting = false;
  type();
}

function type() {
  const tw = document.getElementById('typewriter');
  if (!tw) return;
  const phrases = typewriterPhrases[lang];
  const phrase = phrases[pi];
  if (!deleting) {
    tw.textContent = phrase.slice(0, ci + 1);
    ci += 1;
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    tw.textContent = phrase.slice(0, ci - 1);
    ci -= 1;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 45 : 85);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1200);
});

const html = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(lang === 'ja' ? 'en' : 'ja');
});

applyLang(lang);

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 4 + 'px';
  cursor.style.top = e.clientY - 4 + 'px';
});

document.querySelectorAll('a, button, .skill-card, .project-item').forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
