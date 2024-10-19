export function PopUp() {
  const Pops = document.querySelectorAll("[data-popup]");
  let Box = null;
  Pops.forEach((pop) => {
    pop.addEventListener("mouseover", MouseOver);
  });

  function MouseOver(e) {
    e.target.addEventListener("mousemove", MouseMove);
    e.target.addEventListener("mouseout", MouseOut);
    Createbox(e.currentTarget);
  }
  function MouseOut(e) {
    Box.remove();
    e.currentTarget.removeEventListener("mousemove", MouseMove);
    e.currentTarget.removeEventListener("mouseout", MouseOut);
  }
  function MouseMove({ offsetX, offsetY }) {
    Box.style.top = offsetY + 20 + "px";
    Box.style.left = offsetX + 20 + "px";
  }

  function Createbox(e) {
    Box = document.createElement("div");
    Box.classList.add("popup");
    Box.innerText = e.getAttribute("data-text");
    e.appendChild(Box);
    return Box;
  }
}
