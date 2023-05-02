function initScrollToSection() {
  const internalLinks = document.querySelectorAll(
    ".js-header-menu a[href^='#']"
  );
  if (internalLinks.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    internalLinks.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
initScrollToSection();
