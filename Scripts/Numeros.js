export function Numeros() {
  const numbers = document.querySelector(".Numeros");
  const Algarism = document.querySelectorAll(".Numeros span");

  function StartCount() {
    Algarism.forEach((x) => {
      const total = x.innerText;
      const incremento = Math.floor(total / 100);
      let soma = 0;
      x.innerText = 0;
      const Timer = setInterval(() => {
        soma += incremento;
        x.innerText = soma;
        if (++x.innerText >= total) {
          x.innerText = total;
          clearInterval(Timer);
        }
      }, 25 * Math.random());
    });
  }

  function ObserverWatch(e) {
    if (e[0].target.classList.contains("active")) {
      StartCount();
      observer.disconnect();
    }
  }

  const observer = new MutationObserver(ObserverWatch);

  observer.observe(numbers, { attributes: true });
}
