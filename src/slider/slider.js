import { getElement } from "../utils.js";
import slides from "./sliderData.js";

const slider = getElement(".slider");
const nextBtn = getElement(".nextBtn");
const prevBtn = getElement(".prevBtn");

if (slides.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
let images = [...slides];
if (slides.length === 2) {
  images = [...slides, ...slides];
}
slider.innerHTML += images
  .map((image, slideIndex) => {
    const { img, name } = image;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === images.length - 1) {
      position = "last";
    }
    if (slides.length <= 1) {
      position = "active";
    }
    return `<img src=${img} alt=${name} class="slider-img ${position}" />`;
  })
  .join("");

const startSlider = (type) => {
  const active = getElement(".active");
  const last = getElement(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = slider.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = slider.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

setInterval(startSlider, 8000);
