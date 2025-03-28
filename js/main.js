"use strict";


// Ejercicio 2.1

const dataList = document.querySelector(".list");
const kittenOne = `<li class="card js-catone">
<article>
    <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race js_catbreed">Siamés</h4>
    <p class="card_description">Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.
    </p>
</article>
</li>`;

const kittenTwo = `<li class="card js-cattwo">
<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race js_catbreed">Sphynx</h4>
<p class="card_description">Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

const kittenThree =  `<li class="card js-catthree">
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
<h3 class="card_title ">Cielo</h3>
<h4 class="card_race js_catbreed">Maine Coon</h4>
<p class="card_description">Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

const kittenData = document.querySelector(".js-list");
const content = kittenOne + kittenTwo + kittenThree;
kittenData.innerHTML = content;

// Ejercicio 2.2


const form = document.querySelector(".js-new-form");
const addButton = document.querySelector(".js-btn-add");
const cancelButton = document.querySelector(".js-btn-cancel");

function handleClickNewCatForm(event) {
  if (form.classList.contains("collapsed")) {
    console.log(EventTarget)
    form.classList.remove("collapsed");
  } else { 
    form.classList.add("collapsed");
  }
}

addButton.addEventListener("click",handleClickNewCatForm)




// Ejercicio 2.3

/*const searchButton = document.querySelector(".js_button-search");
const descrInputText = document.querySelector(".js_in_search_desc");
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const catone = document.querySelector(".js-catone");
const cattwo = document.querySelector(".js-cattwo");
const catthree = document.querySelector(".js-catthree");


const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = descrInputText.value; 
  if (kittenDesc1.includes(descrSearchText)) {
    console.log(event)
    catone.classList.remove("hidden");
    cattwo.classList.add("hidden");
    catthree.classList.add("hidden");
  
  }
  if (kittenDesc2.includes(descrSearchText)) {
    cattwo.classList.remove("hidden");
    catone.classList.add("hidden");
    catthree.classList.add("hidden");
  }
  if (kittenDesc3.includes(descrSearchText)) {
    catthree.classList.remove("hidden");
    cattwo.classList.add("hidden");
    catone.classList.add("hidden");
  } if (descrSearchText === "" ) {
    catone.classList.remove("hidden");
    cattwo.classList.remove("hidden");
    catthree.classList.remove("hidden");
  }
};

searchButton.addEventListener("click", filterKitten) */


// // Bonus ejercicio 2.3

// let breedText = "";
// if (kittenRace1 === "") {
//    breedText = `Uy que despiste, no sabemos su raza`;
//   } else {
//   breedText = kittenRace1;
// }


//     let breedText = document.querySelector(".js_catbreed")
//     breedText =Siamés;
//     breedText = Sphynx;
//     breedText = Maine Coon;
//     const searchBreed = document.querySelector(".js-search-breed")
//     const breedResponse = searchBreed.value;
//     const notYourBreed = document.querySelector(".js_notyourbreed")
    
  
 

//     if (breedText !== breedResponse){
//        notYourBreed.innerHTML = "Uy que despiste, no sabemos su raza";
//        cardtwo.classList.add("hidden");
//        cardthree.classList.add("hidden");
//        cardone.classList.add("hidden");
//     } if(breedText === breedResponse){
//        cardone.classList.remove("hidden");
//        cardtwo.classList.remove("hidden");
//        cardthree.classList.remove("hidden");
//     }

//     }
       
//     }

    
//   });



// Ejercicio 2.5.2

 const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
 const kittenName1 = "Anastacio";
 const kittenRace1 = "Siamés";
 const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

 const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
 const kittenName2 = "Fiona";
 const kittenRace2 = "Sphynx";
 const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
 

 const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
 const kittenName3 = "Cielo";
 const kittenRace3 = "Maine Coon";
 const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";


  // Ejercicio 2.
const kittenData1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siamés",
};

const kittenData2 = {
 image: "https://dev.adalab.es/sphynx-gato.webp",
 name: "Fiona",
 race: "Sphynx",
 desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
};

const kittenData3 = {
 image: "https://dev.adalab.es/maine-coon-cat.webp",
 name: "Cielo",
 race: "Maine Coon",
 desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
};

const kittenDataList = [kittenData1, kittenData2, kittenData3];

console.log(kittenDataList[2].race)

function renderKitten(kittenDataList) {
 return `<li class="card js-catone">
<article>
    <img class="card_img" src="${kittenDataList[0].image}" alt="siames-cat" />
    <h3 class="card_title">${kittenDataList[0].name}</h3>
    <h4 class="card_race js_catbreed">${kittenDataList[0].race}</h4>
    <p class="card_description">${kittenDataList[0].desc}
    </p>
</article>
</li>`;
}

