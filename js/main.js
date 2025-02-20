"use strict";

const button = document.querySelector("js-btn-add");
const formDisplay = document.querySelector(".js-interaction-form");

button.addEventListener("click", () => {
    formDisplay.classList.remove("collapsed");
})
