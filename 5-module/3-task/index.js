function initCarousel() {
  // ваш код...
  let right = document.getElementsByClassName("carousel__arrow_right")[0];
  let left = document.getElementsByClassName("carousel__arrow_left")[0];
  let carousel = document.getElementsByClassName("carousel__inner")[0];
  let i = 0;
  let width = carousel.offsetWidth;
  left.style.display = "none";
  right.onclick = function () {
    i = i + 1;
    carousel.style.transform = `translateX(-${width*i}px)`;
    if (i == 3) {
      right.style.display = "none";
      left.style.display = "";
    } else {
      right.style.display = "";
    }
  };
  left.onclick = function () {
    i = i - 1;
    carousel.style.transform = `translateX(-${width*i}px)`;
    if (i == 0) {
      left.style.display = "none";
      right.style.display = "";
    } else {
      left.style.display = "";
    }
  };
}
