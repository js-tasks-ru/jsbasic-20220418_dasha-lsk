import createElement from "../../assets/lib/create-element.js";
export default class ProductCard {
  divHead = document.createElement("div");
  divTop = document.createElement("div");
  imgCard = document.createElement("img");
  spanCard = document.createElement("span");
  divBody = document.createElement("div");
  divTitle = document.createElement("div");
  btn = document.createElement("button");
  imgIcon = document.createElement("img");
  
  constructor(product) {
    this.divHead.setAttribute("class", "card");
    this.divTop.setAttribute("class", "card__top");
    this.imgCard.setAttribute("class", "card__image");
    this.imgCard.setAttribute("alt", "product");
    this.spanCard.setAttribute("class", "card__price");
    this.divBody.setAttribute("class", "card__body");
    this.divTitle.setAttribute("class", "card__title");
    this.btn.setAttribute("type", "button");
    this.btn.setAttribute("class", "card__button");
    this.imgIcon.setAttribute("alt", "icon");
    this.imgIcon.setAttribute("src", "/assets/images/icons/plus-icon.svg");
    this.divHead.appendChild(this.divTop);
    this.divTop.appendChild(this.imgCard);
    this.divTop.appendChild(this.spanCard);
    this.divBody.appendChild(this.divTitle);
    this.divBody.appendChild(this.btn);
    this.divHead.appendChild(this.divBody);
    this.btn.appendChild(this.imgIcon);
    this.divTitle.innerHTML = product.name;
    this.spanCard.innerHTML = "€" + product.price.toFixed(2);
    this.imgCard.setAttribute(
      "src",
      `/assets/images/products/${product.image}`
    );
    this.btn.onclick = () => { 
      let event =  new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      });
      this.btn.dispatchEvent(event);
    }
  }
  get elem() {
    return this.divHead;
  }
}