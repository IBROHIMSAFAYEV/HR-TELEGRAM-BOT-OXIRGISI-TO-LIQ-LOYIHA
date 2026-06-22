
// ── Telegram WebApp init ──
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.disableVerticalSwipes?.();
  tg.setHeaderColor?.('#FC3F1D');
  tg.setBackgroundColor?.(tg.colorScheme === 'dark' ? '#1a1a1a' : '#f7f8fa');
}

// ── Lang data ──
const L = {
  uz: {
    hr_platform:"HR Platform", tagline:"Innovatsiya bilan kelajakni quramiz",
    employees:"Xodimlar", offices:"Do'konlar", founded:"Asos.",
    about_co:"Kompaniya haqida", industry:"Soha", hq:"Bosh ofis", website:"Veb-sayt", contact:"Aloqa",
    mission:"Missiya", mission_text:"Biz zamonaviy texnologiyalar orqali biznes va jamiyatni raqamlashtirish yo'lida ishlaymiz.",
    vacancies:"Vakansiyalar", open_pos:"Bo'sh ish", about_us:"Biz haqimizda", watch_v:"Video ko'rish",
    open_vac:"Bo'sh ish o'rinlari", jobs_count:"Bo'sh ish",
    search_ph:"Ish qidirish...", all:"Barchasi", mkt:"Marketing", dsgn:"Dizayn",
    back:"Orqaga", apply:"Ariza shakli",
    step1_title:"Shaxsiy ma'lumotlar", fullname:"To'liq ism", name_ph:"Ismingizni kiriting",
    phone:"Telefon", email:"E-mail", exp_years:"Tajriba (yil)",
    step2_title:"Kasbiy savollar", q1:"Nega aynan biz?", q1_ph:"Kompaniyaga qiziqishingiz...",
    q2:"Kuchli tomoningiz", q2_ph:"Eng katta kuchli tomoningiz...",
    work_style:"Ish uslubi", remote:"Masofaviy", office:"Ofis", hybrid:"Gibrid",
    step3_title:"Oxirgi qadam", salary_exp:"Kutilgan maosh (USD)", start_date:"Qachon boshlashingiz mumkin?",
    extra:"Qo'shimcha ma'lumot", extra_ph:"GitHub, portfolio...",
    will_send:"Admin ga yuboriladi", resp_time:"⏱ Javob: 1-3 ish kuni",
    send_btn:"Arizani yuborish", sent_title:"Ariza yuborildi!",
    congrats:"Tabriklaymiz! 🎉", success_msg:"Arizangiz muvaffaqiyatli yuborildi.\nHR jamoamiz siz bilan tez orada bog'lanadi.",
    other_vac:"Boshqa vakansiyalar", next:"Keyingi",
    video_title:"Video materiallar", co_life:"Kompaniya hayoti",
    main_vid:"TechCorp — Biz haqimizda", playing:"Hozir ijro etilmoqda...", stop:"To'xtatish",
    other_vids:"Boshqa videolar",
    v2:"Jamoamiz bilan tanishing", v3:"Ofis Tashkent 2024", v4:"Mukofotlar & yutuqlar", v5:"Remote ish imkoniyatlari",
    nav_home:"Bosh", nav_jobs:"Ish o'rinlar", nav_video:"Video",
    choose_lang:"Tilni tanlang",
    jobs:[
      {title:"Senior Frontend Developer",dept:"IT / Web",type:"Full-time",loc:"Toshkent",sal:"$1500-2500",cat:"IT"},
      {title:"Backend Python Developer",dept:"IT / Backend",type:"Full-time",loc:"Remote",sal:"$1200-2000",cat:"IT"},
      {title:"HR Generalist",dept:"Human Resources",type:"Part-time",loc:"Toshkent",sal:"$700-1000",cat:"HR"},
      {title:"UX/UI Designer",dept:"Design",type:"Full-time",loc:"Hybrid",sal:"$900-1500",cat:"Design"},
      {title:"Digital Marketing Manager",dept:"Marketing",type:"Full-time",loc:"Toshkent",sal:"$800-1200",cat:"Marketing"},
      {title:"DevOps Engineer",dept:"IT / Infrastructure",type:"Full-time",loc:"Remote",sal:"$1500-2200",cat:"IT"},
      {title:"Content Manager",dept:"Marketing",type:"Part-time",loc:"Toshkent",sal:"$500-800",cat:"Marketing"},
      {title:"Mobile Developer (Flutter)",dept:"IT / Mobile",type:"Full-time",loc:"Hybrid",sal:"$1200-1800",cat:"IT"},
    ]
  },
  ru: {
    hr_platform:"HR Платформа", tagline:"Строим будущее с инновациями",
    employees:"Сотрудники", offices:"Офисы", founded:"Осн.",
    about_co:"О компании", industry:"Отрасль", hq:"Главный офис", website:"Веб-сайт", contact:"Контакт",
    mission:"Миссия", mission_text:"Мы работаем над цифровизацией бизнеса и общества с помощью современных технологий.",
    vacancies:"Вакансии", open_pos:"8 открытых позиций", about_us:"О нас", watch_v:"Смотреть видео",
    open_vac:"Открытые вакансии", jobs_count:"8 вакансий",
    search_ph:"Поиск работы...", all:"Все", mkt:"Маркетинг", dsgn:"Дизайн",
    back:"Назад", apply:"Форма заявки",
    step1_title:"Личные данные", fullname:"Полное имя", name_ph:"Введите ваше имя",
    phone:"Телефон", email:"E-mail", exp_years:"Опыт (лет)",
    step2_title:"Проф. вопросы", q1:"Почему именно мы?", q1_ph:"Ваш интерес к компании...",
    q2:"Ваша сильная сторона", q2_ph:"Ваша главная сильная сторона...",
    work_style:"Стиль работы", remote:"Удалённо", office:"Офис", hybrid:"Гибрид",
    step3_title:"Последний шаг", salary_exp:"Ожидаемая зарплата (USD)", start_date:"Когда можете начать?",
    extra:"Доп. информация", extra_ph:"GitHub, портфолио...",
    will_send:"Отправляется админу", resp_time:"⏱ Ответ: 1-3 рабочих дня",
    send_btn:"Отправить заявку", sent_title:"Заявка отправлена!",
    congrats:"Поздравляем! 🎉", success_msg:"Ваша заявка успешно отправлена.\nНаша HR-команда свяжется с вами.",
    other_vac:"Другие вакансии", next:"Далее",
    video_title:"Видеоматериалы", co_life:"Жизнь компании",
    main_vid:"TechCorp — О нас", playing:"Сейчас воспроизводится...", stop:"Стоп",
    other_vids:"Другие видео",
    v2:"Познакомьтесь с командой", v3:"Офис Ташкент 2024", v4:"Награды и достижения", v5:"Возможности удалённой работы",
    nav_home:"Главная", nav_jobs:"Вакансии", nav_video:"Видео",
    choose_lang:"Выберите язык",
    jobs:[
      {title:"Senior Frontend Developer",dept:"IT / Web",type:"Полный день",loc:"Ташкент",sal:"$1500-2500",cat:"IT"},
      {title:"Backend Python Developer",dept:"IT / Backend",type:"Полный день",loc:"Удалённо",sal:"$1200-2000",cat:"IT"},
      {title:"HR Generalist",dept:"Отдел кадров",type:"Частичная",loc:"Ташкент",sal:"$700-1000",cat:"HR"},
      {title:"UX/UI Дизайнер",dept:"Дизайн",type:"Полный день",loc:"Гибрид",sal:"$900-1500",cat:"Design"},
      {title:"Менеджер по маркетингу",dept:"Маркетинг",type:"Полный день",loc:"Ташкент",sal:"$800-1200",cat:"Marketing"},
      {title:"DevOps инженер",dept:"IT / Инфраструктура",type:"Полный день",loc:"Удалённо",sal:"$1500-2200",cat:"IT"},
      {title:"Контент-менеджер",dept:"Маркетинг",type:"Частичная",loc:"Ташкент",sal:"$500-800",cat:"Marketing"},
      {title:"Mobile Developer (Flutter)",dept:"IT / Mobile",type:"Полный день",loc:"Гибрид",sal:"$1200-1800",cat:"IT"},
    ]
  },
  en: {
    hr_platform:"HR Platform", tagline:"Building the future through innovation",
    employees:"Employees", offices:"Offices", founded:"Est.",
    about_co:"About Company", industry:"Industry", hq:"Headquarters", website:"Website", contact:"Contact",
    mission:"Mission", mission_text:"We work to digitize business and society through modern technologies. Every employee builds the future.",
    vacancies:"Vacancies", open_pos:"8 open positions", about_us:"About Us", watch_v:"Watch Video",
    open_vac:"Open Positions", jobs_count:"8 vacancies",
    search_ph:"Search jobs...", all:"All", mkt:"Marketing", dsgn:"Design",
    back:"Back", apply:"Application Form",
    step1_title:"Personal Info", fullname:"Full Name", name_ph:"Enter your name",
    phone:"Phone", email:"E-mail", exp_years:"Experience (years)",
    step2_title:"Professional Q&A", q1:"Why specifically us?", q1_ph:"Your interest in the company...",
    q2:"Your strength", q2_ph:"Your greatest strength...",
    work_style:"Work style", remote:"Remote", office:"Office", hybrid:"Hybrid",
    step3_title:"Final Step", salary_exp:"Expected Salary (USD)", start_date:"When can you start?",
    extra:"Additional Info", extra_ph:"GitHub, portfolio...",
    will_send:"Will be sent to admin", resp_time:"⏱ Response: 1-3 business days",
    send_btn:"Submit Application", sent_title:"Application Sent!",
    congrats:"Congratulations! 🎉", success_msg:"Your application was successfully submitted.\nOur HR team will contact you soon.",
    other_vac:"Other Vacancies", next:"Next",
    video_title:"Video Materials", co_life:"Company Life",
    main_vid:"TechCorp — About Us", playing:"Now playing...", stop:"Stop",
    other_vids:"Other Videos",
    v2:"Meet our team", v3:"Office Tashkent 2024", v4:"Awards & achievements", v5:"Remote work opportunities",
    nav_home:"Home", nav_jobs:"Jobs", nav_video:"Video",
    choose_lang:"Choose Language",
    jobs:[
      {title:"Senior Frontend Developer",dept:"IT / Web",type:"Full-time",loc:"Tashkent",sal:"$1500-2500",cat:"IT"},
      {title:"Backend Python Developer",dept:"IT / Backend",type:"Full-time",loc:"Remote",sal:"$1200-2000",cat:"IT"},
      {title:"HR Generalist",dept:"Human Resources",type:"Part-time",loc:"Tashkent",sal:"$700-1000",cat:"HR"},
      {title:"UX/UI Designer",dept:"Design",type:"Full-time",loc:"Hybrid",sal:"$900-1500",cat:"Design"},
      {title:"Digital Marketing Manager",dept:"Marketing",type:"Full-time",loc:"Tashkent",sal:"$800-1200",cat:"Marketing"},
      {title:"DevOps Engineer",dept:"IT / Infrastructure",type:"Full-time",loc:"Remote",sal:"$1500-2200",cat:"IT"},
      {title:"Content Manager",dept:"Marketing",type:"Part-time",loc:"Tashkent",sal:"$500-800",cat:"Marketing"},
      {title:"Mobile Developer (Flutter)",dept:"IT / Mobile",type:"Full-time",loc:"Hybrid",sal:"$1200-1800",cat:"IT"},
    ]
  }
};
// Javascript qismi
let lang = 'uz';
let activePg = 'pg-home';
let prevPg = null;
let activeFilter = 'all';
let selXP = null;
let selRadio = null;
let selJob = null;
let progTimer = null;

function tr(k) { return L[lang][k] || L.uz[k] || k; }

function applyLang() {
  document.querySelectorAll('[data-k]').forEach(el => {
    const k = el.getAttribute('data-k');
    el.textContent = tr(k);
  });
  document.querySelectorAll('[data-k-ph]').forEach(el => {
    el.placeholder = tr(el.getAttribute('data-k-ph'));
  });
  document.querySelectorAll('#langLabel,.langAll').forEach(el => el.textContent = lang.toUpperCase());
  document.querySelectorAll('.lang-opt').forEach((el, i) => {
    el.classList.toggle('on', ['uz','ru','en'][i] === lang);
    el.innerHTML = el.innerHTML;
  });
  const opts = document.querySelectorAll('.lang-opt');
  const labels = ['🇺🇿 O\'zbekcha','🇷🇺 Русский','🇬🇧 English'];
  ['uz','ru','en'].forEach((l,i) => {
    if(opts[i]) {
      const isOn = l === lang;
      opts[i].className = 'lang-opt' + (isOn ? ' on' : '');
      opts[i].innerHTML = `<span>${labels[i]}</span>${isOn ? '<div class="lang-check"><i class="ti ti-check"></i></div>' : ''}`;
    }
  });
  renderJobs();
}

// ── Page transitions ──
function goPage(id, from) {
  const cur = document.getElementById(from || activePg);
  const next = document.getElementById(id);
  if (!next || id === activePg) return;
  cur?.classList.add('slide-out');
  next.classList.add('active');
  setTimeout(() => { cur?.classList.remove('active','slide-out'); }, 300);
  prevPg = activePg;
  activePg = id;
  // sync bottom nav
  syncNav(id);
  // update Telegram back button
  if (tg?.BackButton) {
    const hasBB = ['pg-form','pg-success'].includes(id);
    hasBB ? tg.BackButton.show() : tg.BackButton.hide();
  }
}

function goBack(target) {
  const cur = document.getElementById(activePg);
  const prev = document.getElementById(target || prevPg || 'pg-home');
  cur?.classList.remove('active');
  prev?.classList.add('active');
  activePg = target || prevPg || 'pg-home';
  prevPg = null;
  if (tg?.BackButton) tg.BackButton.hide();
  syncNav(activePg);
}

function navTo(id, btn) {
  if (['pg-form','pg-success'].includes(id)) return;
  goPage(id, activePg);
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
}

function syncNav(id) {
  const map = {'pg-home':0,'pg-jobs':1,'pg-video':2};
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('active', map[id] === i));
}

// Telegram back button
if (tg?.BackButton) {
  tg.BackButton.onClick(() => {
    if (activePg === 'pg-form') goBack('pg-jobs');
    else if (activePg === 'pg-success') goBack('pg-jobs');
    else tg.BackButton.hide();
  });
}

// ── Jobs ──
function renderJobs() {
  const search = document.getElementById('jobSearch')?.value?.toLowerCase() || '';
  const list = document.getElementById('jobsList');
  if (!list) return;
  const jobs = L[lang].jobs;
  list.innerHTML = '';
  jobs.forEach(job => {
    if (activeFilter !== 'all' && job.cat !== activeFilter) return;
    if (search && !job.title.toLowerCase().includes(search) && !job.dept.toLowerCase().includes(search)) return;
    const d = document.createElement('div');
    d.className = 'job-card';
    d.innerHTML = `<div class="job-arrow"><i class="ti ti-arrow-right"></i></div>
      <div class="job-title">${job.title}</div>
      <div class="job-dept">${job.dept}</div>
      <div class="job-tags">
        <span class="tag t-type">${job.type}</span>
        <span class="tag t-loc"><i class="ti ti-map-pin" style="font-size:10px;"></i> ${job.loc}</span>
        <span class="tag t-sal">${job.sal}</span>
      </div>`;
    d.onclick = () => openForm(job);
    list.appendChild(d);
  });
}

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  renderJobs();
}

// ── Form ──
function openForm(job) {
  selJob = job;
  selXP = null; selRadio = null;
  document.getElementById('formPos').textContent = job.title;
  toStep(1);
  document.querySelectorAll('.xp-btn').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.radio-item').forEach(r => r.classList.remove('on'));
  ['f_name','f_phone','f_email','f_why','f_str','f_salary','f_extra'].forEach(id => {
    const el = document.getElementById(id); if(el) el.value = '';
  });
  const df = document.getElementById('f_date'); if(df) df.value = '';
  goPage('pg-form', activePg);
}

function toStep(n) {
  [1,2,3].forEach(i => {
    document.getElementById('s'+i).style.display = i===n?'block':'none';
    document.getElementById('sd'+i)?.classList.toggle('on', i<=n);
  });
  document.getElementById('formScroll')?.scrollTo(0,0);
}

function pickXP(btn, val) {
  document.querySelectorAll('.xp-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on'); selXP = val;
}

function pickRadio(el, val) {
  document.querySelectorAll('.radio-item').forEach(r => r.classList.remove('on'));
  el.classList.add('on'); selRadio = val;
}

function submitForm() {
  const name = document.getElementById('f_name').value.trim() || '—';
  const phone = document.getElementById('f_phone').value.trim() || '—';
  const email = document.getElementById('f_email').value.trim() || '—';
  const salary = document.getElementById('f_salary').value || '—';

  // Telegram WebApp data send
  const data = {
    job: selJob?.title,
    name, phone, email,
    experience: selXP,
    why: document.getElementById('f_why').value,
    strength: document.getElementById('f_str').value,
    workStyle: selRadio,
    salary,
    startDate: document.getElementById('f_date').value,
    extra: document.getElementById('f_extra').value,
  };
  if (tg) {
    tg.sendData(JSON.stringify(data));
  }

  document.getElementById('sJobName').textContent = selJob?.title || '—';
  document.getElementById('sName').textContent = name;
  document.getElementById('sPhone').textContent = phone;
  goPage('pg-success', activePg);
  showToast('✅ ' + tr('send_btn'));
}

// ── Video ──
function playVid() {
  document.getElementById('vidHero').style.display = 'none';
  document.getElementById('playerBox').style.display = 'block';
  let p = 0;
  clearInterval(progTimer);
  progTimer = setInterval(() => {
    p += 0.4;
    document.getElementById('prog').style.width = Math.min(p,100) + '%';
    if (p >= 100) clearInterval(progTimer);
  }, 150);
}

function stopVid() {
  clearInterval(progTimer);
  document.getElementById('playerBox').style.display = 'none';
  document.getElementById('vidHero').style.display = 'flex';
}

function tapVid(el) {
  el.style.opacity = '0.5';
  setTimeout(() => el.style.opacity = '', 300);
}

// ── Lang ──
function openLang() { document.getElementById('langSheet').classList.add('show'); }
function closeLangSheet(e) { if (e.target === document.getElementById('langSheet')) document.getElementById('langSheet').classList.remove('show'); }
function setLang(l) {
  lang = l;
  document.getElementById('langSheet').classList.remove('show');
  applyLang();
}

// ── Toast ──
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── Init ──
applyLang();


function submitForm() {
  const name = document.getElementById('f_name').value.trim();
  const phone = document.getElementById('f_phone').value.trim();
  const email = document.getElementById('f_email').value.trim();
  const why = document.getElementById('f_why').value.trim();
  const strength = document.getElementById('f_str').value.trim();
  const salary = document.getElementById('f_salary').value.trim();

  if (!name) {
    showToast("❌ Ismingizni kiriting");
    return;
  }

  if (!/^\+998\d{9}$/.test(phone.replace(/\s/g,''))) {
    showToast("❌ Telefon raqamini to'g'ri kiriting");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("❌ Email manzil noto'g'ri");
    return;
  }

  if (!selXP) {
    showToast("❌ Tajribani tanlang");
    return;
  }

  if (!why) {
    showToast("❌ Nega biz? maydonini to'ldiring");
    return;
  }

  if (!strength) {
    showToast("❌ Kuchli tomoningizni kiriting");
    return;
  }

  if (!selRadio) {
    showToast("❌ Ish uslubini tanlang");
    return;
  }

  if (!salary || salary <= 0) {
    showToast("❌ Kutilgan maoshni kiriting");
    return;
  }

  // Qolgan submitForm kodi shu yerda davom etadi
}

async function submitForm() {
  const name = document.getElementById('f_name').value.trim() || '—';
  const phone = document.getElementById('f_phone').value.trim() || '—';
  const email = document.getElementById('f_email').value.trim() || '—';
  const salary = document.getElementById('f_salary').value || '—';

  const data = {
    job: selJob?.title,
    name,
    phone,
    email,
    experience: selXP,
    why: document.getElementById('f_why').value,
    strength: document.getElementById('f_str').value,
    workStyle: selRadio,
    salary,
    startDate: document.getElementById('f_date').value,
    extra: document.getElementById('f_extra').value,
  };

  // Telegram botga yuborish
  const BOT_TOKEN = "7841059570:AAFEPUTgf1MGoFZDOBKZNK5X8xvg7hTZJHA";
  const CHAT_ID = "6308468282";

  const message = `
📨 Yangi ariza!

💼 Lavozim: ${data.job}
👤 Ism: ${data.name}
📞 Telefon: ${data.phone}
📧 Email: ${data.email}
📈 Tajriba: ${data.experience}

❓ Nega biz:
${data.why}

💪 Kuchli tomoni:
${data.strength}

🏢 Ish uslubi: ${data.workStyle}
💰 Kutilgan maosh: ${data.salary}
📅 Boshlash sanasi: ${data.startDate}

📝 Qo'shimcha:
${data.extra}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });
  } catch (err) {
    console.error("Telegram yuborishda xato:", err);
  }

  document.getElementById('sJobName').textContent = selJob?.title || '—';
  document.getElementById('sName').textContent = name;
  document.getElementById('sPhone').textContent = phone;

  goPage('pg-success', activePg);
  showToast('✅ Ariza yuborildi');
}


