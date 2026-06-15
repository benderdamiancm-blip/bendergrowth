/* ============================================================
   Bender Growth · main.js
   Año dinámico en el footer. Sin dependencias.
   ============================================================ */
(function () {
  "use strict";
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
