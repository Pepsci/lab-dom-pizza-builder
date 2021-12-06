// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible' ;
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  const pep = document.getElementById("pepe")
  if(state.pepperoni)
  pep.style.display = '';
  else pep.style.display = 'none';
  
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushOne) => {
    if (state.mushrooms) {
      mushOne.style.visibility = "visible"
    } else {
      mushOne.style.visibility = "hidden"
    }
  });

  const mushr = document.getElementById("mushr")
  if(state.mushrooms)
  mushr.style.display= ""
  else   mushr.style.display= "none"
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((gpOne) => {
    if (state.greenPeppers) {
      gpOne.style.visibility = "visible";
    } else {
      gpOne.style.visibility = "hidden";
          }
  });

  const greenp = document.getElementById('greenp');
  state.greenPeppers ? greenp.style.display = "" : greenp.style.display = "none";


}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
    if (state.whiteSauce){
      sauce.classList.add('sauce-white');
    }else{
      sauce.classList.remove('sauce-white');
    }

    const whiteS = document.getElementById('whiteS')
  state.whiteSauce ? whiteS.style.display = "" : whiteS.style.display = "none";
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
    if (state.glutenFreeCrust){
      crust.classList.add('crust-gluten-free');
    }else{
      crust.classList.remove('crust-gluten-free');
    }
    
    const gfc = document.getElementById('gfc');
    state.glutenFreeCrust ? gfc.style.display = "" : gfc.style.display = "none";

}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {

   state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
