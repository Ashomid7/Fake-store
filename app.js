// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
import "./src/registry/toggleRegistry.js";
import "./src/registry/register.js";
import "./src/smoothScroll.js";
import "./src/slider/slider.js";

// filter imports
import setupSearch from "./src/filters/search.js";
import setupCategories from "./src/filters/categories.js";
import setupPrice from "./src/filters/price.js";

// specific imports
import { store, setupStore } from "./src/store.js";
import display from "./src/displayProducts.js";
import fetchProducts from "./src/fetchProducts.js";
import { getElement } from "./src/utils.js";

const productsContainer = getElement(".products-container");

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, productsContainer);
  setupCategories(store);
  setupSearch(store);
  setupPrice(store);
};

window.addEventListener("load", init);
