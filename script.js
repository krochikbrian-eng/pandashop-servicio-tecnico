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
    ".card, .why-item, .step, .cat-card, .spec-item, .spec-media, .stat, .seo-block, .section-head, .review"
  );
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("reveal-in"));
    return;
  }
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.transitionDelay = Math.min((i % 4) * 70, 210) + "ms";
          el.classList.add("reveal-in");
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();
