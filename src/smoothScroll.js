import { getElement } from "./utils.js";

const scrollToTopBtn = getElement(".scroll-to-top-btn");
const navbar = getElement(".navbar");
const navHero = getElement(".nav-hero");
const navCenterContainer = getElement(".nav-center-container");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeroHeight = navHero.getBoundingClientRect().height;
  const navCenterContainerHeight =
    navCenterContainer.getBoundingClientRect().height;
  if (scrollHeight > navHeroHeight + navCenterContainerHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    scrollToTopBtn.classList.add("show-link");
  } else {
    scrollToTopBtn.classList.remove("show-link");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    // linksContainer.style.height = 0;
  });
});
