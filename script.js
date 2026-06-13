// ====== Config ======
const WHATSAPP = "5491133805700";

// ====== Íconos (SVG inline, trazo limpio) ======
const SVG = {
  celular: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
  tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="2.5" width="15" height="19" rx="2.5"/><path d="M10 18.5h4"/></svg>',
  consola: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5h8a4.5 4.5 0 0 1 4.4 5.4l-.5 2.3A2.6 2.6 0 0 1 15.6 17L14 15.5h-4L8.4 17a2.6 2.6 0 0 1-4.3-.8l-.5-2.3A4.5 4.5 0 0 1 8 8.5Z"/><path d="M7.5 11.5v2M6.5 12.5h2"/><circle cx="16" cy="11.8" r=".6" fill="currentColor" stroke="none"/><circle cx="17.3" cy="13.2" r=".6" fill="currentColor" stroke="none"/></svg>',
  joystick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14V7"/><circle cx="12" cy="5.2" r="2.3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0Z"/></svg>',
  drone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9.5" y="9.5" width="5" height="5" rx="1.3"/><circle cx="5" cy="5" r="2.4"/><circle cx="19" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><path d="M6.7 6.7 9.6 9.6M17.3 6.7 14.4 9.6M6.7 17.3 9.6 14.4M17.3 17.3 14.4 14.4"/></svg>',
  notebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="11" rx="1.6"/><path d="M2.5 19.5h19"/></svg>',
  robot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M3.7 10.5h16.6"/><circle cx="9" cy="14.5" r="1.1"/><circle cx="15" cy="14.5" r="1.1"/></svg>',
  repuesto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.5a3.8 3.8 0 0 0-5 4.8l-6 6 2.5 2.5 6-6a3.8 3.8 0 0 0 4.8-5l-2.4 2.4-1.9-.5-.5-1.9 2.5-2.4Z"/></svg>',
};

// ====== Servicios ======
const servicios = [
  {
    ico: SVG.celular,
    title: "Celulares",
    desc: "Reparación de todas las marcas: Samsung, iPhone, Motorola, Xiaomi y más.",
    tags: ["Pantalla / módulo", "Batería", "Pin de carga", "Cámara", "Daño por líquido", "Botones"],
  },
  {
    ico: SVG.tablet,
    title: "Tablets",
    desc: "Display, táctil y carga para tablets de cualquier marca.",
    tags: ["Pantalla", "Táctil", "Batería", "Conector de carga"],
  },
  {
    ico: SVG.consola,
    title: "Consolas",
    desc: "PlayStation, Xbox y Nintendo Switch: limpieza, HDMI, lectoras y más.",
    tags: ["Puerto HDMI", "Lectora", "Ventilación / pasta", "Fuente", "No enciende"],
  },
  {
    ico: SVG.joystick,
    title: "Controles / Joysticks",
    desc: "Solucionamos el drift de sticks, botones y gatillos.",
    tags: ["Drift de sticks", "Botones", "Gatillos L/R", "Batería", "Conector"],
  },
  {
    ico: SVG.drone,
    title: "Drones",
    desc: "Diagnóstico, reparación y calibración de drones y sus controles.",
    tags: ["Motores", "Hélices / brazos", "Cámara / gimbal", "Calibración", "Placa"],
  },
  {
    ico: SVG.notebook,
    title: "Notebooks",
    desc: "Mantenimiento, upgrades y reparación de hardware.",
    tags: ["Pantalla", "Teclado", "Batería", "SSD / RAM", "Limpieza", "Bisagras"],
  },
  {
    ico: SVG.robot,
    title: "Aspiradoras robot",
    desc: "Servicio para Roborock, Ecovacs, iLife y otras marcas.",
    tags: ["Batería", "Sensores", "Motores", "Cepillos", "No carga"],
  },
  {
    ico: SVG.repuesto,
    title: "Venta de repuestos",
    desc: "Pantallas, baterías, módulos y accesorios para que repares o repongas.",
    tags: ["Pantallas", "Baterías", "Pines de carga", "Accesorios"],
  },
];

function waLink(text) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

// Render servicios
const cards = document.getElementById("cards");
if (cards) {
  cards.innerHTML = servicios
    .map(
      (s) => `
    <div class="card">
      <div class="card-ico">${s.ico}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul>${s.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      <a class="card-link" target="_blank" rel="noopener"
         href="${waLink(`¡Hola Pandashop! Quiero consultar por servicio técnico de ${s.title}.`)}">
         Pedir presupuesto →
      </a>
    </div>`
    )
    .join("");
}

// ====== Opiniones / reseñas ======
const reviews = [
  { n: "Martín G.", m: "iPhone 12 · Pantalla", t: "Cambiaron el módulo en el día y quedó impecable. Súper cumplidores, los recomiendo." },
  { n: "Carla R.", m: "PS5 · Puerto HDMI", t: "Pensé que mi PlayStation no tenía arreglo y me la dejaron como nueva. Muy buena atención." },
  { n: "Diego F.", m: "Samsung S21 · Batería", t: "Presupuesto claro antes de tocar nada y garantía por escrito. Todo transparente." },
  { n: "Lucía M.", m: "Notebook · Limpieza", t: "La notebook andaba lentísima y volvió a volar. Precio justo y rápido." },
  { n: "Joaquín P.", m: "Joystick · Drift", t: "Me solucionaron el drift del joystick en un rato. Excelente y a buen precio." },
  { n: "Sofía V.", m: "iPad · Cambio de glass", t: "Cambiaron solo el vidrio y me ahorré un montón. Atención de 10." },
];
const revWrap = document.getElementById("reviews");
if (revWrap) {
  revWrap.innerHTML = reviews
    .map(
      (r) => `
    <div class="review">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">“${r.t}”</p>
      <div class="review-who">
        <span class="review-av">${r.n.charAt(0)}</span>
        <div><div class="review-name">${r.n}</div><div class="review-meta">${r.m}</div></div>
      </div>
    </div>`
    )
    .join("");
}

// ====== Tips de cuidado ======
const tips = [
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M9 5.5h6"/><path d="m9.5 13 1.7 1.7L15 11"/></svg>', t: "Usá funda y vidrio templado", d: "Una buena funda y un templado absorben los golpes y evitan el cambio de módulo, que es la reparación más cara." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="16" height="10" rx="2.5"/><path d="M21.5 10.5v3"/><path d="M6 12h6"/></svg>', t: "Cuidá la batería", d: "Mantené la carga entre 20% y 80% y evitá dejarlo al 100% enchufado toda la noche. Así dura más ciclos." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>', t: "Evitá el calor y el sol directo", d: "El calor degrada la batería y la pantalla. No lo dejes en el auto al sol ni cargando sobre la cama o el sillón." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 7h5l-3 13 2-9h-5l3-11Z"/></svg>', t: "Usá cargadores certificados", d: "Los cargadores y cables truchos dañan el pin de carga y la batería. Invertí en uno original o certificado." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c4 4.5 6.5 7.5 6.5 11a6.5 6.5 0 0 1-13 0c0-3.5 2.5-6.5 6.5-11Z"/></svg>', t: "Cuidalo del agua", d: "Si se moja, apagalo, no lo cargues y no lo prendas. Traelo cuanto antes: actuar rápido salva la placa." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>', t: "Limpiá el pin de carga", d: "La pelusa del bolsillo se acumula en el conector y hace que cargue mal. Limpialo con cuidado y un pincel seco." },
];
const tipsWrap = document.getElementById("tips-list");
if (tipsWrap) {
  tipsWrap.innerHTML = tips
    .map(
      (t) => `
    <div class="tip">
      <div class="tip-ico">${t.ico}</div>
      <h3>${t.t}</h3>
      <p>${t.d}</p>
    </div>`
    )
    .join("");
}

// ====== Contadores animados ======
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const fmt = (v, group) => (group ? v.toLocaleString("es-AR") : String(v));
  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const pre = el.dataset.prefix || "";
    const suf = el.dataset.suffix || "";
    const group = el.dataset.group === "1";
    if (reduce) { el.textContent = pre + fmt(target, group) + suf; return; }
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(Math.round(target * e), group) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }),
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
})();

// ====== Fallas que reparamos ======
const fixes = [
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2.5" width="14" height="19" rx="2.5"/><path d="M10 18.5h4"/><path d="m8.5 8 7 5M15.5 8l-7 5"/></svg>', t: "Cambio de pantalla", d: "Si se astilló, no da imagen, se ve distorsionada o falla el táctil." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="16" height="10" rx="2.5"/><path d="M21.5 10.5v3"/><path d="m9 9-2 3.2h3L8 15.5"/></svg>', t: "Cambio de batería", d: "Si no enciende, no carga bien, dura poco o se recalienta." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-10 0Z"/><path d="M12 16v5"/></svg>', t: "Pin de carga", d: "Si carga solo en cierta posición, intermitente o directamente no carga." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/></svg>', t: "Jack de audio", d: "Si al conectar los auriculares no suena o se escucha de un solo lado." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.4"/></svg>', t: "Botón / Home", d: "Si el botón no responde, está trabado o no detecta la huella digital." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3.5"/></svg>', t: "Micrófono / parlante", d: "Si no te escuchan en las llamadas o fallan los audios y notas de voz." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="12" cy="13.5" r="3.4"/><path d="M8 7l1.4-2.5h5.2L16 7"/></svg>', t: "Cambio de cámara", d: "Si se mojó, se rompió el lente, la tapa trasera o sale borrosa." },
  { ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/><path d="M9.5 2.5v4M14.5 2.5v4M9.5 17.5v4M14.5 17.5v4M2.5 9.5h4M2.5 14.5h4M17.5 9.5h4M17.5 14.5h4"/></svg>', t: "Placa / no enciende", d: "Si el equipo no da señales de vida y queda completamente apagado." },
];
const fixWrap = document.getElementById("fixes");
if (fixWrap) {
  fixWrap.innerHTML = fixes
    .map(
      (f) => `
    <div class="fix">
      <div class="fix-ico">${f.ico}</div>
      <h3>${f.t}</h3>
      <p>${f.d}</p>
    </div>`
    )
    .join("");
}

// ====== FAQ ======
const faqs = [
  { q: "¿Cómo pido un presupuesto?", a: "Escribinos por WhatsApp o completá el formulario con el equipo y la falla. Revisamos y te pasamos un presupuesto cerrado antes de reparar. Solo avanzamos con tu aprobación." },
  { q: "¿Las reparaciones tienen garantía?", a: "Sí, todas las reparaciones quedan respaldadas con comprobante y garantía escrita sobre el trabajo realizado." },
  { q: "¿Cuánto tarda una reparación?", a: "Depende del equipo y el repuesto. Muchas reparaciones de celulares (pantalla, batería) se entregan en el día. Te confirmamos el plazo al dar el presupuesto." },
  { q: "¿Atienden a clientes de todo el país?", a: "Sí. Coordinamos el envío de tu equipo para repararlo y te lo devolvemos. Escribinos por WhatsApp y te explicamos cómo." },
  { q: "¿Usan repuestos originales?", a: "Trabajamos con repuestos originales y de calidad A+. Antes de reparar te indicamos qué tipo de repuesto se usa en cada caso." },
  { q: "¿Dónde están y qué horarios tienen?", a: "Estamos en Vera 1150, Villa Crespo (CABA). Atendemos de lunes a viernes de 10 a 19 y sábados de 10:30 a 13:30." },
  { q: "¿Qué medios de pago aceptan?", a: "Aceptamos efectivo, transferencia y tarjetas de crédito y débito." },
];

const faqList = document.getElementById("faq-list");
if (faqList) {
  faqList.innerHTML = faqs
    .map(
      (f) => `
    <div class="faq-item">
      <button class="faq-q">${f.q}<span>+</span></button>
      <div class="faq-a"><div>${f.a}</div></div>
    </div>`
    )
    .join("");
  faqList.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });
}

// ====== Formulario -> WhatsApp ======
const form = document.getElementById("budgetForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tipo = document.getElementById("f-tipo").value;
    const modelo = document.getElementById("f-modelo").value;
    const falla = document.getElementById("f-falla").value;
    const nombre = document.getElementById("f-nombre").value;
    const tel = document.getElementById("f-tel").value;
    const msg =
      `¡Hola Pandashop! Quiero pedir un presupuesto de servicio técnico.\n\n` +
      `• Equipo: ${tipo}\n` +
      `• Marca y modelo: ${modelo}\n` +
      `• Falla: ${falla}\n` +
      `• Nombre: ${nombre}` +
      (tel ? `\n• Teléfono: ${tel}` : "");
    window.open(waLink(msg), "_blank");
  });
}

// ====== Nav móvil ======
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

// Año footer
const yEl = document.getElementById("year");
if (yEl) yEl.textContent = new Date().getFullYear();

// ====== Estado abierto / cerrado del local (hora de Buenos Aires) ======
(function () {
  const el = document.getElementById("openStatus");
  if (!el) return;
  // Lun–Vie 10:00–19:00 · Sáb 10:30–13:30 (minutos desde medianoche)
  const sched = { 1: [600, 1140], 2: [600, 1140], 3: [600, 1140], 4: [600, 1140], 5: [600, 1140], 6: [630, 810] };
  const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const nowBA = () => {
    const f = new Intl.DateTimeFormat("en-US", { timeZone: "America/Argentina/Buenos_Aires", hour12: false, weekday: "short", hour: "2-digit", minute: "2-digit" });
    const p = Object.fromEntries(f.formatToParts(new Date()).map((x) => [x.type, x.value]));
    return { d: days[p.weekday], m: parseInt(p.hour, 10) * 60 + parseInt(p.minute, 10) };
  };
  const render = () => {
    const { d, m } = nowBA();
    const r = sched[d];
    if (r && m >= r[0] && m < r[1]) {
      el.className = "tb-status open";
      el.textContent = "Abierto ahora";
    } else {
      el.className = "tb-status closed";
      el.textContent = "Cerrado ahora";
    }
  };
  render();
  setInterval(render, 60000);
})();

// ====== Barra de progreso de scroll ======
(function () {
  const bar = document.getElementById("scrollProg");
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();

// ====== Scroll-spy: resalta la sección activa en el menú ======
(function () {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, a);
  });
  if (!map.size) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const a = map.get(en.target);
          if (a) a.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  map.forEach((_, sec) => io.observe(sec));
})();

// ====== Animación de aparición al hacer scroll ======
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".card, .why-item, .step, .cat-card, .spec-item, .spec-media, .stat, .seo-block, .section-head, .review, .tip, .fix, .ff"
  );
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("reveal-in"));
    return;
  }
  targets.forEach((el) => el.classList.add("reveal"));
  const reveal = (el, i) => {
    el.style.transitionDelay = Math.min((i % 4) * 70, 210) + "ms";
    el.classList.add("reveal-in");
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) { reveal(entry.target, i); io.unobserve(entry.target); }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => io.observe(el));
  // Red de seguridad: si algo no se reveló (observer no disparó), mostrarlo igual
  setTimeout(() => {
    targets.forEach((el, i) => { if (!el.classList.contains("reveal-in")) reveal(el, i); });
  }, 2500);
})();
