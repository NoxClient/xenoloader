/**
 * Xeno Executor Landing Page Scripts
 * Full i18n dictionary (RU / EN), DOM text-swapping, micro-interactions, direct downloads, filter tabs, FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  const DL_ICON_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';

  // =========================================================================
  // 1. i18n Dictionary
  // =========================================================================
  const translations = {
    ru: {
      lang_label: "Русский",
      nav_features: "Возможности",
      nav_games: "Игры и скрипты",
      nav_benchmarks: "Тесты sUNC",
      nav_faq: "FAQ",
      nav_agreement: "Соглашение",
      btn_download: "<span>Скачать</span>",
      hero_badge: "Доступно более <strong>1900+ модификаций</strong> • Патч Luau 2026",
      hero_title: 'Мы собрали все <span class="highlight">твои любимые скрипты</span> в одном месте',
      hero_desc: "Xeno Executor — сверхбыстрая среда исполнения Luau и каталог готовых модификаций для Roblox. Встроенная библиотека популярных режимов, полная поддержка sUNC 99%, авто-инжект, decompiler и никакого мусора. Искал надежный софт без зависаний и вечных переходов по ссылкам? Считай, что тебе повезло!",
      hero_download_btn: "Скачать Xeno v3.4",
      hero_catalog_btn: "<span>Каталог скриптов</span>",
      hero_footnote: "Это бесплатно. Мы поддерживаем Windows 10, Windows 11 (x64 / ARM64). Xeno НЕ требует сторонних ключей каждые 24 часа и оптимизирован под многооконный режим.",
      stat_sunc: "sUNC Совместимость",
      stat_inject: "Время инжекта",
      stat_scripts: "Скриптов в базе",

      // Mockup
      mock_scripts: "Скрипты",
      mock_editor: "Редактор",
      mock_settings: "Настройки",
      tag_all_modes: "Все режимы",
      mock_top_week: "Топ недели",
      mock_working: "Работает",
      mock_updated: "Обновлен",
      mock_decomp_sub: "Полный дамп байткода Luau",

      // Games section
      games_title: "Поддерживаемые игры и режимы",
      games_subtitle: "Выбирай нужный плейс — Xeno автоматически загружает проверенные конфигурации и скрипты прямо в игру.",
      filter_all: "Все режимы",
      filter_rpg: "RPG & Гринд",
      filter_shooter: "Шутеры & PvP",
      filter_sim: "Симуляторы",
      filter_universal: "Универсальные",

      card_tag_bf: "140+ скриптов",
      card_tag_rivals: "85+ скриптов",
      card_tag_arsenal: "92 скрипта",
      card_tag_fisch: "48 скриптов",
      card_tag_dahood: "110+ скриптов",
      card_tag_ps99: "64 скрипта",
      card_tag_bladeball: "72 скрипта",
      card_tag_universal: "Все режимы",

      btn_download_game: `${DL_ICON_SVG}<span>Скачать</span>`,
      status_online: "Онлайн",

      desc_bf: "Авто-фарм мобов, мастерство, рейды, фрукты и быстрый телепорт между морями.",
      desc_rivals: "Silent Aimbot, FOV Circle, Box ESP, Chams, No Recoil и быстрый Triggerbot.",
      desc_arsenal: "Бессмертие, Wallbang, кастомный хитбокс, Kill All и автоматическая стрельба.",
      desc_fisch: "Мгновенный улов, авто-продажа рыбы, телепорт к редким зонам, ESP на сундуки.",
      desc_dahood: "Target Lock, Resolver, Anti-Stomp, Fly, Crash защиты и кастомный графический HUD.",
      desc_ps99: "Фарм алмазов, сбор подарков, авто-открытие яиц без задержек и мини-игры.",
      desc_bladeball: "Безупречный Auto Parry (парирование мяча на любой скорости), Curve prediction и анти-стан.",
      desc_universal: "Главный командный центр: Fly, Noclip, Btools, Dark Dex Explorer и Remote Spy.",

      // Features
      feat_badge: "Архитектура движка",
      feat_title: "Почему комьюнити переходит на Xeno",
      feat_subtitle: "Мы переписали пайплайн взаимодействия с процессом с нуля: никакой эмуляции ввода, только нативная Luau виртуальная машина.",
      feat_1_title: "99% sUNC & Level 8",
      feat_1_text: "Полный спектр кастомных функций: hookmetamethod, clonefunction, getrawmetatable, firesignal, decompile, getgenv. Запустится любой приватный скрипт.",
      feat_2_title: "Изоляция памяти и защита",
      feat_2_text: "Чистый инжектор без внедрения подозрительных DLL и сторонних драйверов. Не трогает системные библиотеки и не триггерит встроенный сканер Windows.",
      feat_3_title: "Keyless навсегда",
      feat_3_text: "Больше никаких пятиуровневых ссылок, капч и сокращателей ссылок. Один раз скачал — запустил и играешь без ежедневного обновления ключей.",
      feat_4_title: "Многооконный режим",
      feat_4_text: "Автоматическое подключение ко всем запущенным копиям клиента (Multi-Roblox) одновременно с раздельным выполнением скриптов.",
      feat_5_title: "Встроенный Decompiler",
      feat_5_text: "Разбирай чужие LocalScripts и ModuleScripts прямо в памяти за доли секунды с восстановлением переменных и структуры циклов.",
      feat_6_title: "Cloud Script Hub",
      feat_6_text: "Ежедневное обновление базы скриптов через защищенный CDN. Если скрипт сломался после патча игры — апдейт прилетает автоматически.",

      // Benchmarks
      bench_badge: "Проверка окружения",
      bench_title: "Тест совместимости sUNC и Luau окружения",
      bench_subtitle: "Вы можете проверить поддержку стандартных системных функций перед запуском Xeno. Наша виртуальная машина проходит все открытые тесты unc-test.",
      bench_check_1: "<strong>getgenv / getrenv / getreg</strong> — доступ к глобальным таблицам",
      bench_check_2: "<strong>hookmetamethod & hookfunction</strong> — подмена хуков движка",
      bench_check_3: "<strong>Drawing API v2</strong> — рендер ESP, линий, текста и кругов FOV",
      bench_check_4: "<strong>WebSocket / HttpGet / Request</strong> — защищенные внешние сокеты",
      score_ratio: "<strong>104 / 105</strong> тестов пройдено",
      score_footer: "Официальный UNC Benchmark (последний прогон)",

      // FAQ
      faq_badge: "Частые вопросы",
      faq_title: "Всё, что нужно знать перед стартом",
      faq_subtitle: "Ответы на самые популярные вопросы по установке и использованию Xeno",
      faq_q1: "Xeno действительно не требует ключа?",
      faq_a1: "Да. Мы отказались от Linkvertise, LootLabs и других систем сбора ключей. Программа запускается напрямую, вы сразу получаете полный доступ ко всем функциям и скриптам.",
      faq_q2: "Почему антивирус может предупреждать при скачивании?",
      faq_a2: "Любой инжектор выполняет чтение памяти процесса и внедрение байткода, что классифицируется стандартными эвристическими сканерами как RiskWare / HackTool. В Xeno нет вирусов, троянов и майнеров. Рекомендуется добавить папку в исключения Windows Defender.",
      faq_q3: "Как запустить скрипт через Xeno?",
      faq_a3: "1. Запустите Roblox и зайдите в желаемый плейс.<br>2. Откройте Xeno.exe (он автоматически привяжется к процессу).<br>3. Выберите скрипт из встроенного каталога или вставьте свой в поле ввода и нажмите кнопку «Execute».",
      faq_q4: "Работает ли Xeno после еженедельных обновлений игры?",
      faq_a4: "Да. Наш лоадер автоматически обновляет оффсеты и подписи функций через облачный сервер без необходимости вручную перекачивать весь архив.",

      // CTA
      dl_badge: "Версия 1.3.65 Stable",
      dl_title: "Готов испытать Xeno в деле?",
      dl_desc: "Скачай официальный инсталлятор прямо сейчас. Никаких подписок, рекламы и скрытых ограничений.",
      dl_btn_exe: "Скачать Xeno Installer (.exe)",
      dl_spec_plat: "Платформа: Windows 10 / 11 (x64, ARM64)",
      dl_spec_size: "Размер: ~18.4 МБ",

      // Agreement & Footer
      agr_title: "Пользовательское соглашение и отказ от ответственности",
      agr_text: "Xeno Executor разрабатывается независимой исследовательской группой в образовательных целях для анализа исполнения скриптов Luau и тестирования устойчивости клиентского кода. Roblox является зарегистрированной торговой маркой Roblox Corporation. Данный проект никоим образом не связан, не спонсируется и не одобрен Roblox Corporation. Используя данное ПО, вы подтверждаете соблюдение местного законодательства и берете на себя ответственность за использование учетных записей.",
      foot_tagline: "Свобода кастомизации и исполнения кода в Roblox.",
      foot_nav: "Навигация",
      foot_downloads: "Загрузки",
      foot_community: "Сообщество",
      foot_support: "Поддержка",
      foot_kb: "База знаний",
      foot_security: "Политика безопасности",
      foot_contacts: "Контакты команды",

      toast_download: "Начало загрузки Xeno-v1.3.65.exe"
    },

    en: {
      lang_label: "English",
      nav_features: "Features",
      nav_games: "Games & Scripts",
      nav_benchmarks: "sUNC Benchmarks",
      nav_faq: "FAQ",
      nav_agreement: "Agreement",
      btn_download: "<span>Download</span>",
      hero_badge: "Over <strong>1900+ scripts available</strong> • Luau 2026 Patch",
      hero_title: 'We gathered all <span class="highlight">your favorite scripts</span> in one place',
      hero_desc: "Xeno Executor is an ultra-fast Luau execution environment and hub for Roblox. Built-in script library, full 99% sUNC compliance, instant injection, built-in decompiler, zero bloat. Looking for stable software without crashes and ad-shorteners? You're in luck!",
      hero_download_btn: "Download Xeno v3.4",
      hero_catalog_btn: "<span>Script Catalog</span>",
      hero_footnote: "Completely free. Supports Windows 10, Windows 11 (x64 / ARM64). Xeno does NOT require 24-hour key-systems and is tuned for multi-client execution.",
      stat_sunc: "sUNC Compatibility",
      stat_inject: "Inject Latency",
      stat_scripts: "Active Scripts",

      // Mockup
      mock_scripts: "Scripts",
      mock_editor: "Editor",
      mock_settings: "Settings",
      tag_all_modes: "All Modes",
      mock_top_week: "Top of Week",
      mock_working: "Working",
      mock_updated: "Updated",
      mock_decomp_sub: "Full Luau bytecode dump",

      // Games section
      games_title: "Supported Games & Places",
      games_subtitle: "Pick any place — Xeno auto-loads verified configs and scripts straight into the client.",
      filter_all: "All Modes",
      filter_rpg: "RPG & Grind",
      filter_shooter: "Shooters & PvP",
      filter_sim: "Simulators",
      filter_universal: "Universal",

      card_tag_bf: "140+ scripts",
      card_tag_rivals: "85+ scripts",
      card_tag_arsenal: "92 scripts",
      card_tag_fisch: "48 scripts",
      card_tag_dahood: "110+ scripts",
      card_tag_ps99: "64 scripts",
      card_tag_bladeball: "72 scripts",
      card_tag_universal: "All Games",

      btn_download_game: `${DL_ICON_SVG}<span>Download</span>`,
      status_online: "Online",

      desc_bf: "Auto-farm mobs, mastery, raids, devil fruits, and instant sea teleports.",
      desc_rivals: "Silent Aimbot, FOV Circle, Box ESP, Chams, No Recoil, and fast Triggerbot.",
      desc_arsenal: "Godmode, Wallbang, custom hitboxes, Kill All, and automatic fire.",
      desc_fisch: "Instant catch, auto-sell fish, teleports to rare zones, chest ESP.",
      desc_dahood: "Target Lock, Resolver, Anti-Stomp, Fly, Crash protectors, and custom GUI HUD.",
      desc_ps99: "Diamond farm, gift collection, instant egg open without delay, and minigames.",
      desc_bladeball: "Flawless Auto Parry (parry at any ball speed), Curve prediction, anti-stun.",
      desc_universal: "The master control suite: Fly, Noclip, Btools, Dark Dex Explorer & Remote Spy.",

      // Features
      feat_badge: "Engine Architecture",
      feat_title: "Why the Community Chooses Xeno",
      feat_subtitle: "Engineered from scratch: no clumsy input simulation, pure native Luau VM dispatch.",
      feat_1_title: "99% sUNC & Level 8",
      feat_1_text: "Complete suite of custom methods: hookmetamethod, clonefunction, getrawmetatable, firesignal, decompile, getgenv. Runs any private script.",
      feat_2_title: "Memory Isolation & Protection",
      feat_2_text: "Clean executor without suspicious system drivers or dirty hooks. Does not taint core libraries or trigger false flags.",
      feat_3_title: "Truly Keyless Forever",
      feat_3_text: "No more five-step link shorteners, captchas, or daily renewals. Download once and play anytime without annoying keys.",
      feat_4_title: "Multi-Instance Mode",
      feat_4_text: "Seamlessly attaches across all running client instances (Multi-Roblox) with isolated script contexts.",
      feat_5_title: "Built-in Decompiler",
      feat_5_text: "Dump and inspect LocalScripts and ModuleScripts in seconds with full variable and control-flow reconstruction.",
      feat_6_title: "Cloud Script Hub",
      feat_6_text: "Daily script catalog syncing via encrypted CDN. When a game updates, fixes push automatically.",

      // Benchmarks
      bench_badge: "Environment Evaluation",
      bench_title: "sUNC & Luau Compatibility Verification",
      bench_subtitle: "Validate standard API calls before launching Xeno. Our virtual machine clears every public unc-test suite.",
      bench_check_1: "<strong>getgenv / getrenv / getreg</strong> — global environment tables",
      bench_check_2: "<strong>hookmetamethod & hookfunction</strong> — engine vtable hooks",
      bench_check_3: "<strong>Drawing API v2</strong> — 144 FPS ESP, lines, text, and FOV circles",
      bench_check_4: "<strong>WebSocket / HttpGet / Request</strong> — secure external network sockets",
      score_ratio: "<strong>104 / 105</strong> tests passed",
      score_footer: "Official UNC Benchmark (latest run)",

      // FAQ
      faq_badge: "Frequently Asked Questions",
      faq_title: "Everything You Need to Know",
      faq_subtitle: "Quick answers about installing and running Xeno without issues",
      faq_q1: "Is Xeno truly keyless?",
      faq_a1: "Yes. We discarded Linkvertise, LootLabs, and all key verification gates. Launch and execute scripts immediately.",
      faq_q2: "Why do some antiviruses trigger warnings?",
      faq_a2: "Any memory executor reads game memory and executes bytecode, which heuristic scanners flag as RiskWare / HackTool. Xeno contains no malware, trojans, or miners. Add its folder to Windows Defender exclusions.",
      faq_q3: "How do I run a script in Xeno?",
      faq_a3: "1. Launch Roblox and join your desired place.<br>2. Run Xeno.exe (it auto-attaches to the game process).<br>3. Pick a script from the built-in library or paste your Luau code and hit 'Execute'.",
      faq_q4: "Does Xeno survive weekly Roblox updates?",
      faq_a4: "Yes. The client dynamically fetches patched function offsets from our cloud servers without requiring a fresh full installer download.",

      // CTA
      dl_badge: "Version 1.3.65 Stable",
      dl_title: "Ready to Experience Xeno?",
      dl_desc: "Download the official installer now. No subscriptions, ads, or hidden restrictions.",
      dl_btn_exe: "Download Xeno Installer (.exe)",
      dl_spec_plat: "Platform: Windows 10 / 11 (x64, ARM64)",
      dl_spec_size: "File size: ~18.4 MB",

      // Agreement & Footer
      agr_title: "Terms of Service & Disclaimer",
      agr_text: "Xeno Executor is developed by an independent research group for educational testing and Luau VM evaluation. Roblox is a registered trademark of Roblox Corporation. This project is not affiliated with, sponsored, or endorsed by Roblox Corporation. By using this software you agree to adhere to local regulations and assume full account responsibility.",
      foot_tagline: "Freedom of Luau code execution and customization in Roblox.",
      foot_nav: "Navigation",
      foot_downloads: "Downloads",
      foot_community: "Community",
      foot_support: "Support",
      foot_kb: "Knowledge Base",
      foot_security: "Security Policy",
      foot_contacts: "Team Contacts",

      toast_download: "Starting download of Xeno-v1.3.65.exe"
    }
  };

  let currentLang = localStorage.getItem('xeno_lang') || 'ru';

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.ru;
    currentLang = lang;
    localStorage.setItem('xeno_lang', lang);

    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = dict.lang_label;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;
  }

  // Language switcher
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const nextLang = currentLang === 'ru' ? 'en' : 'ru';
      applyLanguage(nextLang);
      showToast(nextLang === 'ru' ? 'Язык: Русский' : 'Language: English');
    });
  }

  applyLanguage(currentLang);

  // =========================================================================
  // 2. Mobile Menu Toggle
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobLinks = document.querySelectorAll('.mob-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 3. Games Grid Filter
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.game-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      gameCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || filter === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 4. Toast helper
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // =========================================================================
  // 5. Direct Download Links Handler
  // =========================================================================
  const downloadLinks = document.querySelectorAll('.download-link');
  downloadLinks.forEach(link => {
    link.addEventListener('click', () => {
      showToast(translations[currentLang].toast_download);
    });
  });

  // =========================================================================
  // 6. FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // =========================================================================
  // 7. Interactive 3D Perspective Tilt on Mouse Move
  // =========================================================================
  const canvas = document.querySelector('.isometric-canvas');
  const previewWrapper = document.querySelector('.hero-preview-wrapper');

  if (canvas && previewWrapper && window.innerWidth > 1024) {
    previewWrapper.addEventListener('mousemove', (e) => {
      const rect = previewWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = -12 + (x / rect.width) * 15;
      const rotateX = 10 - (y / rect.height) * 15;

      canvas.style.transform = `rotateY(${rotateY.toFixed(2)}deg) rotateX(${rotateX.toFixed(2)}deg) rotateZ(1deg)`;
    });

    previewWrapper.addEventListener('mouseleave', () => {
      canvas.style.transform = `rotateY(-12deg) rotateX(10deg) rotateZ(2deg)`;
    });
  }
});
