const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", open);
  menuButton.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".desktop-nav a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = "☰";
  });
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".project-card, .timeline-item, .education-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".visible { opacity: 1 !important; transform: translateY(0) !important; }";
document.head.appendChild(style);
