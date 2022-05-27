import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  carousel = document.createElement("div");
  slidesHolder = document.createElement("div");
  arrowRight = document.createElement("div");
  arrowLeft = document.createElement("div");
  imgRight =  document.createElement("img");
  imgLeft =  document.createElement("img");
  constructor(slides) { 
    this.arrowLeft.style.display = "none";
    this.carousel.setAttribute("class", "carousel");
    this.slidesHolder.setAttribute("class", "carousel__inner");
    this.arrowLeft.setAttribute("class", "carousel__arrow carousel__arrow_left");
    this.arrowRight.setAttribute("class","carousel__arrow carousel__arrow_right");
    this.imgRight.setAttribute("src","/assets/images/icons/angle-icon.svg");
    this.imgLeft.setAttribute("src","/assets/images/icons/angle-left-icon.svg");
    this.carousel.appendChild(this.arrowLeft);
    this.arrowLeft.appendChild(this.imgLeft);
    this.arrowRight.appendChild(this.imgRight);
    this.carousel.appendChild(this.arrowRight);
    this.carousel.appendChild(this.slidesHolder);
    slides.forEach((slide) => {
      let divSlide = document.createElement("div");
      let imgSlide = document.createElement("img");
      let divCaption = document.createElement("div");
      let spanPrice = document.createElement("span");
      let divTitle = document.createElement("div");
      let btnCarousel = document.createElement("button");
      let imgIcon = document.createElement("img");
      divSlide.setAttribute("class", "carousel__slide");
      divSlide.setAttribute("data-id", "penang-shrimp");
      imgSlide.setAttribute("class", "carousel__img");
      imgSlide.setAttribute("alt", "slide");
      let i=0;
      let width = 0;
      imgSlide.setAttribute("src", `/assets/images/carousel/${slide.image}`);
      divCaption.setAttribute("class", "carousel__caption");
      spanPrice.setAttribute("class", "carousel__price");
      divTitle.setAttribute("class", "carousel__title");
      btnCarousel.setAttribute("class", "carousel__button");
      btnCarousel.setAttribute("type", "button");
      imgIcon.setAttribute("alt", "icon");
      imgIcon.setAttribute("src", "/assets/images/icons/plus-icon.svg");
      divSlide.appendChild(imgSlide);
      divSlide.appendChild(divCaption);
      divCaption.appendChild(spanPrice);
      divCaption.appendChild(divTitle);
      divCaption.appendChild(btnCarousel);
      btnCarousel.appendChild(imgIcon);
      divTitle.innerHTML = slide.name;
      spanPrice.innerHTML = "€" + slide.price.toFixed(2);
      btnCarousel.onclick = () => {
        let event = new CustomEvent("product-add", {
          // имя события должно быть именно "product-add"
          detail: slide.id, // Уникальный идентификатора товара из объекта слайда
          bubbles: true, // это событие всплывает - это понадобится в дальнейшем
        });
        btnCarousel.dispatchEvent(event);
      };
      this.arrowRight.onclick = () => {
        i = i+1;
        width = this.carousel.offsetWidth;
        this.slidesHolder.style.transform = `translateX(-${width*i}px)`;
        if (i == slides.length-1) {
          this.arrowRight.style.display = "none";
          this.arrowLeft.style.display = "";
        } else {
          this.arrowRight.style.display = "";
        }
      }
      this.arrowLeft.onclick = () => {
        i = i-1;
        console.log(slides.length); 
        width = this.carousel.offsetWidth;
        this.slidesHolder.style.transform = `translateX(-${width*i}px)`;
        if (i == 0) {
          this.arrowLeft.style.display = "none";
          this.arrowRight.style.display = "";
        } else {
          this.arrowLeft.style.display = "";
        }
      }
      this.slidesHolder.appendChild(divSlide);
    });
  };
  
  get elem() {
    return this.carousel;
  }

}
