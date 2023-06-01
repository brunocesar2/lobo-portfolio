export default function initScrollToSection() {
  const internalLinks = document.querySelectorAll("[data-header='menu'] a");
  if (internalLinks.length) {
    internalLinks.forEach((menu) => {
      menu.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }
}
