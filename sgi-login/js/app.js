/* ══════════════════════════════════════════════════════
   SGI InkaRetail — Login · app.js
   ══════════════════════════════════════════════════════ */

"use strict";

/* ── Usuarios registrados (demo + nuevos) ──────────── */
const USUARIOS = [
  { email: "admin@inkaretail.com",    pass: "Admin123!", nombre: "Lizbeth Jaico",  rol: "Administrador" },
  { email: "vendedor@inkaretail.com", pass: "Vendedor1",  nombre: "Carlos Quispe", rol: "Vendedor"       },
  { email: "almacen@inkaretail.com",  pass: "Stock2024",  nombre: "Ana Torres",    rol: "Jefe de Almacén"},
];

/* ── Cambiar de tab ─────────────────────────────────── */
function switchTab(tab) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  document.getElementById("panel-" + tab).classList.add("active");
  document.getElementById("tab-" + tab + "-btn").classList.add("active");
  limpiarMensajes();
}

/* ── Helpers ────────────────────────────────────────── */
function mostrarMsg(id, texto, tipo) {
  const el = document.getElementById(id);
  el.textContent = texto;
  el.className   = "msg show " + tipo;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = "msg"; }, 5000);
}

function marcarInput(id, tipo) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("err", "ok");
  if (tipo) el.classList.add(tipo);
}

function limpiarMensajes() {
  ["msg-login", "msg-registro"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "msg";
  });
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── LOGIN ──────────────────────────────────────────── */
function doLogin() {
  const email = document.getElementById("l-email").value.trim();
  const pass  = document.getElementById("l-pass").value;

  marcarInput("l-email", ""); marcarInput("l-pass", "");

  /* Validación: campos vacíos */
  if (!email || !pass) {
    mostrarMsg("msg-login", "❌  Completa todos los campos.", "err");
    if (!email) marcarInput("l-email", "err");
    if (!pass)  marcarInput("l-pass",  "err");
    return;
  }

  /* Validación: formato email */
  if (!emailValido(email)) {
    mostrarMsg("msg-login", "❌  Formato de correo inválido.", "err");
    marcarInput("l-email", "err");
    return;
  }

  /* Buscar usuario */
  const user = USUARIOS.find(u => u.email === email);
  if (!user) {
    mostrarMsg("msg-login", "❌  Usuario no encontrado.", "err");
    marcarInput("l-email", "err");
    return;
  }

  /* Verificar contraseña */
  if (user.pass !== pass) {
    mostrarMsg("msg-login", "❌  Contraseña incorrecta.", "err");
    marcarInput("l-pass", "err");
    return;
  }

  /* ── ÉXITO: abrir ventana de bienvenida ── */
  marcarInput("l-email", "ok");
  marcarInput("l-pass",  "ok");
  abrirBienvenida(user);
}

/* ── REGISTRO ───────────────────────────────────────── */
function doRegistro() {
  const nombre = document.getElementById("r-nombre").value.trim();
  const email  = document.getElementById("r-email").value.trim();
  const pass   = document.getElementById("r-pass").value;
  const pass2  = document.getElementById("r-pass2").value;
  const rol    = document.getElementById("r-rol").value;

  ["r-nombre","r-email","r-pass","r-pass2"].forEach(id => marcarInput(id, ""));

  /* Campos vacíos */
  if (!nombre || !email || !pass || !pass2 || !rol) {
    mostrarMsg("msg-registro", "❌  Todos los campos son obligatorios.", "err");
    if (!nombre) marcarInput("r-nombre", "err");
    if (!email)  marcarInput("r-email",  "err");
    if (!pass)   marcarInput("r-pass",   "err");
    if (!pass2)  marcarInput("r-pass2",  "err");
    return;
  }

  /* Formato email */
  if (!emailValido(email)) {
    mostrarMsg("msg-registro", "❌  Formato de correo inválido.", "err");
    marcarInput("r-email", "err");
    return;
  }

  /* Email duplicado */
  if (USUARIOS.find(u => u.email === email)) {
    mostrarMsg("msg-registro", "❌  Este correo ya está registrado.", "err");
    marcarInput("r-email", "err");
    return;
  }

  /* Contraseñas no coinciden */
  if (pass !== pass2) {
    mostrarMsg("msg-registro", "❌  Las contraseñas no coinciden.", "err");
    marcarInput("r-pass",  "err");
    marcarInput("r-pass2", "err");
    return;
  }

  /* Fuerza de contraseña */
  if (pass.length < 8) {
    mostrarMsg("msg-registro", "❌  Mínimo 8 caracteres en la contraseña.", "err");
    marcarInput("r-pass", "err");
    return;
  }
  if (!/[A-Z]/.test(pass)) {
    mostrarMsg("msg-registro", "❌  La contraseña necesita al menos una mayúscula.", "err");
    marcarInput("r-pass", "err");
    return;
  }
  if (!/[0-9]/.test(pass)) {
    mostrarMsg("msg-registro", "❌  La contraseña necesita al menos un número.", "err");
    marcarInput("r-pass", "err");
    return;
  }

  /* ── ÉXITO: guardar y mostrar bienvenida ── */
  const nuevoUser = { email, pass, nombre, rol };
  USUARIOS.push(nuevoUser);

  ["r-nombre","r-email","r-pass","r-pass2"].forEach(id => marcarInput(id, "ok"));

  /* Limpiar formulario y abrir bienvenida */
  setTimeout(() => {
    document.getElementById("r-nombre").value = "";
    document.getElementById("r-email").value  = "";
    document.getElementById("r-pass").value   = "";
    document.getElementById("r-pass2").value  = "";
    document.getElementById("r-rol").value    = "";
    ["r-nombre","r-email","r-pass","r-pass2"].forEach(id => marcarInput(id, ""));
    abrirBienvenida(nuevoUser);
  }, 800);
}

/* ── Ventana de bienvenida ──────────────────────────── */

// Guarda el usuario de sesión actual (se usa al redirigir)
let SESION_USUARIO = null;

function abrirBienvenida(user) {
  SESION_USUARIO = user;
  document.getElementById("welcome-name").textContent = user.nombre;
  document.getElementById("welcome-rol").textContent  = "Rol: " + user.rol;
  document.getElementById("overlay").classList.add("show");
}

function cerrarBienvenida() {
  /* Guardar sesión en sessionStorage y redirigir al Home */
  if (SESION_USUARIO) {
    sessionStorage.setItem("sgi_user", JSON.stringify(SESION_USUARIO));
    window.location.href = "home.html";
  } else {
    /* Fallback: solo cerrar el popup */
    document.getElementById("overlay").classList.remove("show");
    document.getElementById("l-email").value = "";
    document.getElementById("l-pass").value  = "";
    marcarInput("l-email", ""); marcarInput("l-pass", "");
    limpiarMensajes();
    switchTab("login");
  }
}

/* ── Enter en inputs ────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("l-pass")?.addEventListener("keydown", e => {
    if (e.key === "Enter") doLogin();
  });
  document.getElementById("r-pass2")?.addEventListener("keydown", e => {
    if (e.key === "Enter") doRegistro();
  });

  /* Limpiar error al escribir */
  ["l-email","l-pass"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", () => {
      marcarInput(id, "");
      document.getElementById("msg-login").className = "msg";
    });
  });
  ["r-nombre","r-email","r-pass","r-pass2"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", () => {
      marcarInput(id, "");
      document.getElementById("msg-registro").className = "msg";
    });
  });
});
