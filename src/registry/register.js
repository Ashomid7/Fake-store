import { getElement, setStorageItem } from "../utils.js";

const signUpBtn = getElement(".signup-btn");
const signInBtn = getElement(".signin-btn");
const registerBtn = getElement(".register-btn");
const registryForm1 = getElement(".registry-form-1");
const registryForm2 = getElement(".registry-form-2");
const closeRegistryBtn = getElement(".registry-close");
const registryInputs1 = getElement(".signin-registry-inputs");
const registryInputs2 = getElement(".signup-registry-inputs");

signUpBtn.addEventListener("click", () => {
  registryForm2.classList.remove("next-form");
  registryForm1.classList.add("prev-form");
});

closeRegistryBtn.addEventListener("click", () => {
  registryForm2.classList.add("next-form");
  registryForm1.classList.remove("prev-form");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(registryInputs1);
  console.log(formData);
  for (const pair of formData.entries()) {
    setStorageItem(pair[0], pair[1]);
  }
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(registryInputs2);
  console.log(formData);
  for (const pair of formData.entries()) {
    setStorageItem(pair[0], pair[1]);
  }
});
