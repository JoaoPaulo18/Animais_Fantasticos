export function AnimaisImages() {
  const images = document.querySelectorAll(".Images_animals li");
  const texts = document.querySelectorAll(".Texts_animals div");

  const FAQ = document.querySelectorAll(".Faq_list dt");

  FAQ.forEach((f) =>
    f.addEventListener("click", (e) => {
      FAQ.forEach((e) => e.classList.remove("active"));
      e.target.classList.toggle("active");
    })
  );

  function ChangeImg(index) {
    texts.forEach((t) => t.classList.remove("active"));
    texts[index].classList.add("active");
  }

  images.forEach((img, index) => {
    const i = index;
    img.addEventListener("click", () => ChangeImg(i));
  });
}
