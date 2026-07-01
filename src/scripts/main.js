/* ============================================================================
   main.js — Interacciones de Chateam (vanilla, sin dependencias)
   - Menú móvil accesible
   - Acordeón FAQ (ARIA)
   - Toggle de planes (Emprendedores / Empresarial)
   - Scroll-reveal progresivo (respeta prefers-reduced-motion)
   - Validación del formulario de leads en cliente
   ============================================================================ */
(function () {
  "use strict";

  // Marca que el JS está activo: habilita las animaciones de reveal sin que el
  // contenido quede oculto cuando el JS no se ejecuta (mejora progresiva).
  document.documentElement.classList.add("js");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------- Menú móvil */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  function closeMenu() {
    if (!navToggle || !mobileMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      mobileMenu.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ------------------------------------------------------------- FAQ acordeón */
  document.querySelectorAll("[data-faq-question]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      if (item) item.classList.toggle("is-open", !expanded);
    });
  });

  /* ----------------------------------------------------------- Toggle planes */
  const planTabs = document.querySelectorAll("[data-plan-tab]");
  const planPanels = document.querySelectorAll("[data-plan-panel]");

  planTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-plan-tab");
      planTabs.forEach(function (t) {
        t.setAttribute("aria-selected", String(t === tab));
      });
      planPanels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-plan-panel") !== target;
      });
    });
  });

  /* --------------------------------------------------------- Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------- Validación de formulario
     NOTA: no hay backend conectado. Se valida en cliente y se muestra el estado
     de éxito. Conectar a un endpoint real (o WhatsApp click-to-chat) en producción.
  -------------------------------------------------------------------------- */
  const form = document.querySelector("[data-lead-form]");
  if (form) {
    const success = form.querySelector("[data-form-success]");

    const validators = {
      nombre: function (v) {
        return v.trim().length >= 2 || "Escribe tu nombre completo.";
      },
      whatsapp: function (v) {
        return (
          /^[0-9+()\s-]{7,}$/.test(v.trim()) ||
          "Escribe un número de WhatsApp válido."
        );
      },
      email: function (v) {
        return (
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ||
          "Escribe un correo electrónico válido."
        );
      },
      empresa: function (v) {
        return v.trim().length >= 2 || "Escribe el nombre de tu empresa.";
      },
    };

    function validateField(input) {
      const rule = validators[input.name];
      if (!rule) return true;
      const result = rule(input.value);
      const field = input.closest(".field");
      const errorEl = field ? field.querySelector(".error-text") : null;
      if (result === true) {
        if (field) field.classList.remove("has-error");
        input.removeAttribute("aria-invalid");
        return true;
      }
      if (field) field.classList.add("has-error");
      if (errorEl) errorEl.textContent = result;
      input.setAttribute("aria-invalid", "true");
      return false;
    }

    form.querySelectorAll("input, textarea").forEach(function (input) {
      input.addEventListener("blur", function () {
        if (validators[input.name]) validateField(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      let firstInvalid = null;
      Object.keys(validators).forEach(function (name) {
        const input = form.elements[name];
        if (input && !validateField(input)) {
          valid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (!valid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      form.reset();
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  }

  /* ----------------------------------------------- Año dinámico del footer */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
