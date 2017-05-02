var endScroll = 0;
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    header.classList.add("header-color");
  }
  else{
    header.classList.remove("header-color");
  }
})
