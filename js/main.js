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

const searchButton = document.querySelector(".js_button-search");
const descrinputText = document.querySelector(".js_in_search_desc");

searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descrSearchText = descrinputText.value; 
    const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
    const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
    const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
    const cardone = document.querySelector(".js-catone")
    const cardtwo = document.querySelector(".js-cattwo")
    const cardthree = document.querySelector(".js-catthree")
    const breedText = document.querySelector(".js_catbreed")
    const notYourBreed = document.querySelector(".js_notyourbreed")
    
  
    if (kittenDesc1.includes(descrSearchText)) {
      cardone.classList.remove("hidden");
      cardtwo.classList.add("hidden");
      cardthree.classList.add("hidden");
      
    }
    
    if (kittenDesc2.includes(descrSearchText)) {
      cardtwo.classList.remove("hidden");
      cardone.classList.add("hidden");
      cardthree.classList.add("hidden");
      
    }
    
    if (kittenDesc3.includes(descrSearchText)) {
      cardthree.classList.remove("hidden");
      cardone.classList.add("hidden");
      cardtwo.classList.add("hidden");
      
    } 

    if (breedText !== "card_race"){
      notYourBreed.innerHTML = "Uy que despiste, no sabemos su raza"
    }

    
  });



 

