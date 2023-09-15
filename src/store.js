import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating: { rate, count },
    } = product;
    return { id, title, description, price, category, image, rate, count };
  });
  setStorageItem("store", store);
};

const findProduct = (id) => {
  let intID = parseInt(id);
  let product = store.find((product) => product.id === intID);
  return product;
};

export { store, setupStore, findProduct };
