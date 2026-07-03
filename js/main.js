/* ============================================================
   Bender Growth · main.js
   - Marca el documento como con-JS (para reveals progresivos).
   - Reveal on-scroll accesible (respeta prefers-reduced-motion).
   - Año dinámico en el footer.
   Sin dependencias.
   ============================================================ */
(function () {
  "use strict";

  // Marca que hay JS: habilita los estados iniciales del reveal en CSS.
  document.documentElement.classList.add("js");

  // Año dinámico.
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Elementos que revelan al entrar en viewport (incluye el embudo).
  var targets = document.querySelectorAll(".reveal, .funnel");

  if (reduce || !("IntersectionObserver" in window)) {
    // Sin animación: mostrar todo de una.
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });
})();
