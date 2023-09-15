import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
  const searchForm = getElement(".search-form");
  const titleInput = getElement(".search-input");
  searchForm.addEventListener("keyup", function () {
    const value = titleInput.value;
    if (value) {
      const newStore = store.filter((products) => {
        let { title } = products;
        title = title.toLowerCase();
        if (title.startsWith(value)) {
          return products;
        }
      });
      display(newStore, getElement(".products-container"), true);
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
