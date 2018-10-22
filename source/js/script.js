var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");

// navMain.remove("main-nav__wrapper--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__wrapper--closed")) {
    navMain.classList.remove("main-nav__wrapper--closed");
    navMain.classList.add("main-nav__wrapper--opened");
  } else {
    navMain.classList.remove("main-nav__wrapper--opened");
    navMain.classList.add("main-nav__wrapper--closed");
  }
})
