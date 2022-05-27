function toggleText() {
  // ваш код...
  let btn = document.getElementsByClassName("toggle-text-button");
  let txt = document.getElementById("text");
  btn[0].onclick = function () {
    if (txt.hidden == false) {
      txt.hidden = true;
    } else {
      txt.hidden = false;
    }
  };
}
