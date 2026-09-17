const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");

    const isOpen = siteNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  const navLinks = siteNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}