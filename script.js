// ====== Config ======
const WHATSAPP = "5491133805700";

// ====== Servicios ======
const servicios = [
  {
    ico: "📱",
    title: "Celulares",
    desc: "Reparación de todas las marcas: Samsung, iPhone, Motorola, Xiaomi y más.",
    tags: ["Pantalla / módulo", "Batería", "Pin de carga", "Cámara", "Daño por líquido", "Botones"],
  },
  {
    ico: "📲",
    title: "Tablets",
    desc: "Display, táctil y carga para tablets de cualquier marca.",
    tags: ["Pantalla", "Táctil", "Batería", "Conector de carga"],
  },
  {
    ico: "🎮",
    title: "Consolas",
    desc: "PlayStation, Xbox y Nintendo Switch: limpieza, HDMI, lectoras y más.",
    tags: ["Puerto HDMI", "Lectora", "Ventilación / pasta", "Fuente", "No enciende"],
  },
  {
    ico: "🕹️",
    title: "Controles / Joysticks",
    desc: "Solucionamos el drift de sticks, botones y gatillos.",
    tags: ["Drift de sticks", "Botones", "Gatillos L/R", "Batería", "Conector"],
  },
  {
    ico: "🚁",
    title: "Drones",
    desc: "Diagnóstico, reparación y calibración de drones y sus controles.",
    tags: ["Motores", "Hélices / brazos", "Cámara / gimbal", "Calibración", "Placa"],
  },
  {
    ico: "💻",
    title: "Notebooks",
    desc: "Mantenimiento, upgrades y reparación de hardware.",
    tags: ["Pantalla", "Teclado", "Batería", "SSD / RAM", "Limpieza", "Bisagras"],
  },
  {
    ico: "🤖",
    title: "Aspiradoras robot",
    desc: "Servicio para Roborock, Ecovacs, iLife y otras marcas.",
    tags: ["Batería", "Sensores", "Motores", "Cepillos", "No carga"],
  },
  {
    ico: "🔧",
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

// ====== Animación de aparición al hacer scroll ======
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".card, .why-item, .step, .cat-card, .spec-item, .spec-media, .stat, .seo-block, .section-head"
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
