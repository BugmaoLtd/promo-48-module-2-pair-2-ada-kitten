"use strict";

const addButton = document.querySelector(".js-btn-add");
const form = document.querySelector(".js-new-form");

addButton.addEventListener("click", ()=> {
form.classList.remove("collapsed");
});

const cancelButton = document.querySelector(".js-btn-cancel");
cancelButton.addEventListener("click", ()=> {
form.classList.add("collapsed");
});