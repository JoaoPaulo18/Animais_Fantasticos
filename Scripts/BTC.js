export function BTC() {
  const span = document.querySelector("#BTC");
  fetch("https://blockchain.info/ticker")
    .then((e) => e.json())
    .then((r) => (span.innerHTML = (1000 / r.BRL.sell).toFixed(4)));
}
