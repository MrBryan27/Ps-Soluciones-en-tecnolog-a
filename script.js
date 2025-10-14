// Esperar a que todo el contenido del sitio cargue
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  initParticles(); // Iniciar partículas una vez cargado
});

// =============================
// 🎇 FONDO DE PARTÍCULAS
// =============================
let canvas, ctx, particles = [];

function initParticles() {
  canvas = document.getElementById("canvas");
  if (!canvas) return; // Evita errores si no existe el canvas

  ctx = canvas.getContext("2d");
  resizeCanvas();
  createParticles();
  drawParticles();

  // Ajustar cuando se cambia el tamaño de la ventana
  window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 188, 212, 0.7)";
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(drawParticles);
}

// =============================
// ✉️ FORMULARIO DE CONTACTO (EmailJS v4)
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");

  if (!form) return; // Si no hay formulario, no hace nada

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusText.textContent = "Enviando mensaje...";

    emailjs.send("service_9qb7icl", "template_kisi506", {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    })
    .then(() => {
      statusText.textContent = "✅ ¡Mensaje enviado correctamente!";
      form.reset();
    })
    .catch((error) => {
      console.error("Error de EmailJS:", error);
      statusText.textContent = "❌ Error al enviar el mensaje. Intenta nuevamente.";
    });
  });
});

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

