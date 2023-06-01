export default function initSmoothScroll() {
  const links = document.querySelectorAll("[data-header='menu'] a");
  if (links.length) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
