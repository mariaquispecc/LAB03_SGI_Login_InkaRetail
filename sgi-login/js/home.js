/* ══════════════════════════════════════════════════════
   SGI InkaRetail — Home · home.js
   Lee el usuario de sessionStorage y puebla la página.
   Si no hay sesión, redirige al login.
   ══════════════════════════════════════════════════════ */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /* Leer usuario de sessionStorage */
  const raw = sessionStorage.getItem("sgi_user");

  /* Si no hay sesión activa → redirigir al login */
  if (!raw) {
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(raw);

  /* Iniciales para el avatar */
  const initials = user.nombre
    .split(" ")
    .map(n => n[0] || "")
    .join("")
    .substring(0, 2)
    .toUpperCase();

  /* Poblar topbar */
  document.getElementById("nav-avatar").textContent  = initials;
  document.getElementById("nav-nombre").textContent  = user.nombre;
  document.getElementById("nav-rol").textContent     = user.rol;

  /* Poblar saludo */
  const primerNombre = user.nombre.split(" ")[0];
  document.getElementById("saludo-nombre").textContent = primerNombre;

});

/* Cerrar sesión */
function cerrarSesion() {
  sessionStorage.removeItem("sgi_user");
  window.location.href = "index.html";
}
