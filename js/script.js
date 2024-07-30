"use strict";

// About section
//////////////////////////////////////////////////
const cards = document.querySelectorAll(".cards");
const aboutHeading = document.querySelectorAll(".about-heading");
const switchBox = document.querySelector(".switch-box");
const switchBtns = document.querySelectorAll(".btn-switch");

switchBox.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".btn-switch");

  // guard clause
  if (!clicked) return;

  // active tab
  switchBtns.forEach((t) => t.classList.remove("btn-active"));
  clicked.classList.add("btn-active");

  // active header
  aboutHeading.forEach((t) => t.classList.remove("heading-secondary--active"));
  document
    .querySelector(`.heading-secondary--${clicked.dataset.btn}`)
    .classList.add("heading-secondary--active");

  // active content area
  cards.forEach((t) => t.classList.remove("cards--active"));
  document
    .querySelector(`.cards--${clicked.dataset.btn}`)
    .classList.add("cards--active");
});

// Feature section
//////////////////////////////////////////////////

const featureImg = document.querySelectorAll(".how-img");
const btnsBox = document.querySelector(".how-list");
const listBtns = document.querySelectorAll(".feature");

btnsBox.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".feature");

  // guard clause
  if (!clicked) return;

  // active btn
  listBtns.forEach((t) => t.classList.remove("feature--active"));
  clicked.classList.add("feature--active");

  // active img
  featureImg.forEach((t) => t.classList.remove("how-img--active"));
  document
    .querySelector(`.how-img--${clicked.dataset.btn}`)
    .classList.add("how-img--active");
});
