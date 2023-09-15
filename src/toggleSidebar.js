import { getElement } from "./utils.js";

const sidebarOverlay = getElement(".sidebar-overlay");
const closeSidebarBtn = getElement(".sidebar-close");
const toggleSidebarBtn = getElement(".toggle-nav");
const sidebar = getElement(".sidebar-links");
const submenu = getElement(".submenu");
const slider = getElement(".slider");
const header = getElement("header");
const linkBtns = [...document.querySelectorAll(".nav-link")];

toggleSidebarBtn.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});

// set sidebar

// sidebar.innerHTML = sublinks
//   .map((item) => {
//     const { links, page } = item;
//     return `<article >
// <h4>${page}</h4>
// <div class="sidebar-sublinks">
// ${links
//   .map((link) => {
//     return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
//   })
//   .join("")}
// </div>
// </article>`;
//   })
//   .join("");
