// Языки сайта: ru, en, uk, he, ar. Тексты — в T, у элементов атрибут data-t="ключ".
// Снимки: assets/shots/<язык>/<имя>.jpg, если такого нет — русский снимок.
(function () {
  var L = ["ru", "en", "uk", "he", "ar"];
  var NAMES = { ru: "Русский", en: "English", uk: "Українська", he: "עברית", ar: "العربية" };
  var T = {
    nav_home: ["Главная", "Home", "Головна", "דף הבית", "الرئيسية"],
    nav_priv: ["Конфиденциальность", "Privacy", "Конфіденційність", "פרטיות", "الخصوصية"],
    home_title: ["Приложения для телевизора", "Apps for your TV", "Застосунки для телевізора", "אפליקציות לטלוויזיה", "تطبيقات للتلفزيون"],
    home_lead: ["Простые и удобные программы для Android TV и телефонов. Делаем для людей — так, чтобы разобрался каждый, в том числе бабушки и дедушки.",
      "Simple, easy apps for Android TV and phones. Made for people — so that anyone can figure them out, grandparents included.",
      "Прості та зручні програми для Android TV і телефонів. Робимо для людей — так, щоб розібрався кожен, зокрема бабусі й дідусі.",
      "אפליקציות פשוטות ונוחות ל-Android TV ולטלפונים. בנויות לאנשים — כך שכל אחד יסתדר, גם סבא וסבתא.",
      "برامج بسيطة ومريحة لأجهزة Android TV والهواتف. نصنعها للناس — بحيث يفهمها الجميع، بمن فيهم الأجداد."],
    sptv_tag: ["Android TV · IPTV-плеер", "Android TV · IPTV player", "Android TV · IPTV-плеєр", "Android TV · נגן IPTV", "Android TV · مشغل IPTV"],
    sptv_card: ["Плеер для ваших плейлистов M3U в привычном стиле Stalker: каналы с логотипами, программа передач, архив, избранное, видеотека и интернет-радио.",
      "A player for your M3U playlists in the familiar Stalker style: channels with logos, TV guide, catch-up, favorites, video library and internet radio.",
      "Плеєр для ваших плейлистів M3U у звичному стилі Stalker: канали з логотипами, програма передач, архів, обране, відеотека та інтернет-радіо.",
      "נגן לפלייליסטים M3U שלכם בסגנון Stalker המוכר: ערוצים עם לוגו, לוח שידורים, ארכיון, מועדפים, ספריית וידאו ורדיו אינטרנט.",
      "مشغل لقوائم تشغيل M3U الخاصة بك بأسلوب Stalker المألوف: قنوات بشعارات، دليل البرامج، الأرشيف، المفضلة، مكتبة الفيديو وراديو الإنترنت."],
    more: ["Подробнее", "Learn more", "Детальніше", "פרטים נוספים", "المزيد"],
    dwg_tag: ["Android / Android TV · в разработке", "Android / Android TV · in development", "Android / Android TV · у розробці", "Android / Android TV · בפיתוח", "Android / Android TV · قيد التطوير"],
    dwg_card: ["Просмотр чертежей DWG на телефоне и телевизоре: слои, выбор объектов, тексты на русском, английском и иврите.",
      "View DWG drawings on your phone and TV: layers, object selection, text in Russian, English and Hebrew.",
      "Перегляд креслень DWG на телефоні й телевізорі: шари, вибір об'єктів, тексти російською, англійською та івритом.",
      "צפייה בשרטוטי DWG בטלפון ובטלוויזיה: שכבות, בחירת אובייקטים, טקסט ברוסית, אנגלית ועברית.",
      "عرض رسومات DWG على الهاتف والتلفزيون: الطبقات، اختيار العناصر، نصوص بالروسية والإنجليزية والعبرية."],
    foot_priv: ["Политика конфиденциальности", "Privacy policy", "Політика конфіденційності", "מדיניות פרטיות", "سياسة الخصوصية"],
    sptv_h1: ["SPTV — плеер для телевизора", "SPTV — a player for your TV", "SPTV — плеєр для телевізора", "SPTV — נגן לטלוויזיה", "SPTV — مشغل للتلفزيون"],
    sptv_lead: ["Смотрите свои IPTV-каналы в привычном интерфейсе в стиле Stalker. Крупно, понятно, управляется пультом.",
      "Watch your IPTV channels in a familiar Stalker-style interface. Large, clear, controlled with the remote.",
      "Дивіться свої IPTV-канали у звичному інтерфейсі в стилі Stalker. Великий шрифт, зрозуміло, керується пультом.",
      "צפו בערוצי ה-IPTV שלכם בממשק מוכר בסגנון Stalker. גדול, ברור, נשלט בשלט רחוק.",
      "شاهد قنوات IPTV الخاصة بك في واجهة مألوفة بأسلوب Stalker. كبيرة وواضحة وتُدار بجهاز التحكم."],
    h_tv: ["Телевидение", "Television", "Телебачення", "טלוויזיה", "التلفزيون"],
    tv1: ["Плейлисты M3U / M3U8 по ссылке или из файла", "M3U / M3U8 playlists from a link or file", "Плейлисти M3U / M3U8 за посиланням або з файлу", "פלייליסטים M3U / M3U8 מקישור או מקובץ", "قوائم تشغيل M3U / M3U8 من رابط أو ملف"],
    tv2: ["Логотипы, группы, номера каналов", "Logos, groups, channel numbers", "Логотипи, групи, номери каналів", "לוגו, קבוצות, מספרי ערוצים", "الشعارات والمجموعات وأرقام القنوات"],
    tv3: ["Программа передач (EPG) и архив по дням", "TV guide (EPG) and catch-up by day", "Програма передач (EPG) і архів за днями", "לוח שידורים (EPG) וארכיון לפי ימים", "دليل البرامج (EPG) والأرشيف حسب الأيام"],
    tv4: ["Избранное, сортировка, свой порядок каналов, поиск", "Favorites, sorting, your own channel order, search", "Обране, сортування, свій порядок каналів, пошук", "מועדפים, מיון, סדר ערוצים משלכם, חיפוש", "المفضلة والفرز وترتيب القنوات الخاص بك والبحث"],
    tv5: ["Скрытие ненужных групп и стран", "Hide groups and countries you don't need", "Приховування непотрібних груп і країн", "הסתרת קבוצות ומדינות מיותרות", "إخفاء المجموعات والدول غير المطلوبة"],
    h_easy: ["Удобство", "Convenience", "Зручність", "נוחות", "سهولة الاستخدام"],
    e1: ["Мастер первого запуска", "First-run setup wizard", "Майстер першого запуску", "אשף הגדרה בהפעלה ראשונה", "معالج الإعداد عند التشغيل الأول"],
    e2: ["Ввод ключа и ссылок с телефона по QR-коду", "Enter keys and links from your phone via QR code", "Введення ключа й посилань з телефона за QR-кодом", "הזנת מפתח וקישורים מהטלפון באמצעות קוד QR", "إدخال المفتاح والروابط من الهاتف عبر رمز QR"],
    e3: ["Подсказки к каждому разделу настроек", "Tips for every settings section", "Підказки до кожного розділу налаштувань", "הסברים לכל סעיף בהגדרות", "تلميحات لكل قسم في الإعدادات"],
    e4: ["Клавиатура открывается только по кнопке OK", "The keyboard opens only when you press OK", "Клавіатура відкривається лише кнопкою OK", "המקלדת נפתחת רק בלחיצה על OK", "تفتح لوحة المفاتيح فقط عند الضغط على OK"],
    e5: ["Плитки ваших приложений в главном меню", "Tiles for your apps in the main menu", "Плитки ваших застосунків у головному меню", "אריחים של האפליקציות שלכם בתפריט הראשי", "مربعات لتطبيقاتك في القائمة الرئيسية"],
    e6: ["Пять языков: русский, English, українська, עברית, العربية", "Five languages: Russian, English, Ukrainian, Hebrew, Arabic", "П'ять мов: російська, англійська, українська, іврит, арабська", "חמש שפות: רוסית, אנגלית, אוקראינית, עברית, ערבית", "خمس لغات: الروسية والإنجليزية والأوكرانية والعبرية والعربية"],
    h_more: ["Ещё", "More", "Ще", "ועוד", "المزيد"],
    m1: ["Видеотека: фильмы и сериалы из ваших источников", "Video library: movies and series from your sources", "Відеотека: фільми й серіали з ваших джерел", "ספריית וידאו: סרטים וסדרות מהמקורות שלכם", "مكتبة الفيديو: أفلام ومسلسلات من مصادرك"],
    m2: ["Интернет-радио из открытого каталога", "Internet radio from an open catalog", "Інтернет-радіо з відкритого каталогу", "רדיו אינטרנט מקטלוג פתוח", "راديو الإنترنت من دليل مفتوح"],
    m3: ["Погода и гороскоп на главном экране", "Weather and horoscope on the home screen", "Погода й гороскоп на головному екрані", "מזג אוויר והורוסקופ במסך הראשי", "الطقس والأبراج على الشاشة الرئيسية"],
    m4: ["Личный кабинет со всеми сведениями о подключении", "An account page with all your connection details", "Особистий кабінет з усіма відомостями про підключення", "אזור אישי עם כל פרטי החיבור", "صفحة الحساب مع كل تفاصيل الاتصال"],
    h_shots: ["Как это выглядит", "How it looks", "Як це виглядає", "איך זה נראה", "كيف يبدو"],
    shots_note: ["Логотипы и названия каналов на снимках размыты: каналы зависят от вашего плейлиста.", "Channel logos and names are blurred in the screenshots: channels depend on your playlist.", "Логотипи й назви каналів на знімках розмиті: канали залежать від вашого плейлиста.", "הלוגואים ושמות הערוצים בצילומים מטושטשים: הערוצים תלויים בפלייליסט שלכם.", "شعارات القنوات وأسماؤها مموهة في اللقطات: القنوات تعتمد على قائمة التشغيل الخاصة بك."],
    h_imp: ["Важно", "Important", "Важливо", "חשוב", "مهم"],
    imp: ["SPTV — только плеер. В нём нет встроенных каналов, фильмов или плейлистов. Вы добавляете свои источники, например плейлист от вашего провайдера, и отвечаете за законность их использования.",
      "SPTV is only a player. It has no built-in channels, movies or playlists. You add your own sources, such as a playlist from your provider, and you are responsible for using them legally.",
      "SPTV — лише плеєр. У ньому немає вбудованих каналів, фільмів чи плейлистів. Ви додаєте свої джерела, наприклад плейлист від вашого провайдера, і відповідаєте за законність їх використання.",
      "SPTV הוא נגן בלבד. אין בו ערוצים, סרטים או פלייליסטים מובנים. אתם מוסיפים מקורות משלכם, למשל פלייליסט מהספק שלכם, ואחראים לשימוש החוקי בהם.",
      "SPTV مجرد مشغل. لا يحتوي على قنوات أو أفلام أو قوائم تشغيل مدمجة. أنت تضيف مصادرك الخاصة، مثل قائمة تشغيل من مزودك، وتتحمل مسؤولية استخدامها بشكل قانوني."],
    s_menu: ["Главное меню", "Main menu", "Головне меню", "תפריט ראשי", "القائمة الرئيسية"],
    s_groups: ["Быстрый выбор группы каналов", "Quick channel group picker", "Швидкий вибір групи каналів", "בחירה מהירה של קבוצת ערוצים", "اختيار سريع لمجموعة القنوات"],
    s_weather: ["Погода прямо в меню", "Weather right in the menu", "Погода просто в меню", "מזג אוויר ישר בתפריט", "الطقس مباشرة في القائمة"],
    s_horo: ["Гороскоп на сегодня и завтра", "Horoscope for today and tomorrow", "Гороскоп на сьогодні й завтра", "הורוסקופ להיום ולמחר", "الأبراج لليوم والغد"],
    s_signs: ["Выбор знака зодиака", "Choose your zodiac sign", "Вибір знака зодіаку", "בחירת מזל", "اختيار البرج"],
    s_ch: ["Список каналов с программой", "Channel list with the guide", "Список каналів з програмою", "רשימת ערוצים עם לוח שידורים", "قائمة القنوات مع الدليل"],
    s_chg: ["Группы, избранное, поиск", "Groups, favorites, search", "Групи, обране, пошук", "קבוצות, מועדפים, חיפוש", "المجموعات والمفضلة والبحث"],
    s_arch: ["Архив передач по дням", "Catch-up by day", "Архів передач за днями", "ארכיון תוכניות לפי ימים", "أرشيف البرامج حسب الأيام"],
    s_skins: ["Оболочки, например «Город будущего»", "Themes, like \"City of the Future\"", "Оболонки, наприклад «Місто майбутнього»", "ערכות נושא, למשל \"עיר העתיד\"", "السمات، مثل «مدينة المستقبل»"],
    s_set: ["Настройки с подсказками", "Settings with tips", "Налаштування з підказками", "הגדרות עם הסברים", "إعدادات مع تلميحات"],
    s_chset: ["Скрытие ненужных групп", "Hide unneeded groups", "Приховування непотрібних груп", "הסתרת קבוצות מיותרות", "إخفاء المجموعات غير المطلوبة"],
    s_phone: ["Ввод ссылок с телефона по QR-коду", "Enter links from your phone via QR code", "Введення посилань з телефона за QR-кодом", "הזנת קישורים מהטלפון בקוד QR", "إدخال الروابط من الهاتف عبر رمز QR"]
  };
  function pick() {
    try { var s = localStorage.getItem("lang"); if (L.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || "ru").slice(0, 2).toLowerCase();
    if (n === "iw") n = "he";
    return L.indexOf(n) >= 0 ? n : "en";
  }
  function apply(lang) {
    var i = L.indexOf(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "he" || lang === "ar") ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach(function (el) { var v = T[el.getAttribute("data-t")]; if (v) el.textContent = v[i]; });
    document.querySelectorAll("img[data-shot]").forEach(function (im) {
      var n = im.getAttribute("data-shot"), ru = im.getAttribute("data-base") + n + ".jpg";
      var src = lang === "ru" ? ru : im.getAttribute("data-base") + lang + "/" + n + ".jpg";
      im.onerror = function () { im.onerror = null; im.src = ru; if (im.parentNode.parentNode.tagName === "A") im.parentNode.parentNode.href = ru; };
      im.src = src;
      var a = im.closest("a"); if (a) a.href = src;
      var cap = im.parentNode.querySelector("figcaption"); if (cap) im.alt = cap.textContent;
    });
    document.querySelectorAll(".langs button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-l") === lang); });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("header.top");
    if (nav) {
      var box = document.createElement("div"); box.className = "langs";
      L.forEach(function (l) { var b = document.createElement("button"); b.setAttribute("data-l", l); b.textContent = NAMES[l]; b.onclick = function () { apply(l); }; box.appendChild(b); });
      nav.appendChild(box);
    }
    apply(pick());
  });
})();
