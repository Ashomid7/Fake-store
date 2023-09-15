import { getElement } from "../utils.js";

const registryOverlay = getElement(".registry-overlay");
const closeRegistryBtn = getElement(".registry-close");
const toggleRegistryBtn = getElement(".toggle-registry");

toggleRegistryBtn.addEventListener("click", () => {
  registryOverlay.classList.add("show");
});
closeRegistryBtn.addEventListener("click", () => {
  registryOverlay.classList.remove("show");
});
