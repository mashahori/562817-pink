var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");

navMain.classList.remove("main-nav__wrapper--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__wrapper--closed") &&
pageHeader.classList.contains("page-header--nav-closed")) {
    navMain.classList.remove("main-nav__wrapper--closed");
    pageHeader.classList.remove("page-header--nav-closed");
    navMain.classList.add("main-nav__wrapper--opened");
  } else {
    navMain.classList.remove("main-nav__wrapper--opened");
    navMain.classList.add("main-nav__wrapper--closed");
    pageHeader.classList.add("page-header--nav-closed");
  }
})
