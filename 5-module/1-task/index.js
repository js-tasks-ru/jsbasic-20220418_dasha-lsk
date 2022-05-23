function hideSelf() {
  // ваш код...
  let btn = document.getElementsByClassName("hide-self-button");
  // btn[0].addEventListener("click", () => {
  //   btn[0].hidden = true;
  // });
  btn[0].onclick = function() {
    btn[0].hidden = true; 
  }
}
