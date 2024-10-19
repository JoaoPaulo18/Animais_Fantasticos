export function Menu() {
  const Btn = document.querySelector(".Mobile_button");
  const SubHover = document.querySelector(".Sub_hover");
  Btn.addEventListener("click", () => {
    Btn.classList.toggle("active");
  });
  SubHover.addEventListener("click", () => {
    SubHover.classList.toggle("active");
  });
}
// Codigo para adiconar e remover classe active do Menu BTN e Pop Up hover
