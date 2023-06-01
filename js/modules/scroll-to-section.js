export default function initSmoothScroll() {
  const links = document.querySelectorAll("[data-header='menu'] a");
  function smoothScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}
