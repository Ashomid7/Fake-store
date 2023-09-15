import { addToCart } from "./cart/setupCart.js";

const display = (products, element, filters) => {
  element.innerHTML = products
    .map((product) => {
      const { id, title, price, description, image, rate } = product;
      return `
    <article class="product-card">
          <div class="product-card-inner">
            <div class="product-card-front">
              <div class="product-img-container">
                <img
                  src=${image}
                  class="product-img"
                  alt=""
                />
              </div>
              <!-- product info -->
              <div class="product-info">
                <h4 class="product-title">${title}</h4>
                <div class="product-footer">
                  <h4>
                    <span> <i class="fa fa-star"></i> ${rate} </span>
                  </h4>
                  <h4>$${price}</h4>
                </div>
              </div>
            </div>
            <div class="product-card-back">
              <h4 class="product-title">${title}</h4>
              <p class="product-desc">
                ${description}
              </p>
              <div class="add-to-cart-btn-container">
                <button class="btn add-to-cart-btn" data-id="${id}">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </article>`;
    })
    .join("");

  if (filters) return;

  element.addEventListener("click", function (e) {
    const parent = e.target.parentElement;
    if (parent.classList.contains("add-to-cart-btn")) {
      addToCart(parent.dataset.id);
    }
  });
};

export default display;
