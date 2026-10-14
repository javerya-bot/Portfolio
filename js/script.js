
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation menu.
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Contact form: prepare an email using the visitor's email app.
  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Replace this with your actual email address.
      const recipient = "ayllaa2405@gmail.com";

      if (recipient === "your@gmail.com") {
        const note = document.querySelector("#formNote");
        note.textContent =
          "Please add your real email in js/script.js before using this form.";
        note.setAttribute("role", "status");
        return;
      }

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      const subject = encodeURIComponent(
        `Portfolio message from ${name}`
      );

      const body = encodeURIComponent(
        `Hi Javerya,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`
      );

      window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});
