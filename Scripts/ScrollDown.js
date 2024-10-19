export function ScrollDown() {
  const sections = document.querySelectorAll("section");
  const WindowHalf = window.innerHeight * 0.7;

  CheckScroll();

  function CheckScroll(e) {
    sections.forEach((sec) => {
      if (
        !sec.classList.contains("active") &&
        WindowHalf - sec.getBoundingClientRect().top > 0
      )
        sec.classList.add("active");

      if (sections[sections.length - 1].classList.contains("active"))
        window.removeEventListener("scroll", CheckScroll);
    });
  }

  window.addEventListener("scroll", CheckScroll);
}
