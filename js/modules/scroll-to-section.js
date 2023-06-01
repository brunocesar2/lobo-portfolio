export default function initSmoothScroll() {
  const links = document.querySelectorAll("[data-header='menu'] a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
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
