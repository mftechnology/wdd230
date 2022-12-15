const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  //const members = jsonObject["companies"].filter(members => members.memberLevel === "GOLD");
  const fruit = jsonObject;
  fruit.forEach(displayFruits);
});

function displayFruits(fruit) {
    //create elements to add to the form
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let nutritions = document.createElement('p');

    //set text contains value of nutritions
    nutritions.textContent = `Carbohydrates:${fruit.nutritions.carbohydrates}, Protein:${fruit.nutritions.protein},
    Fat:${fruit.nutritions.fat}, Calories:${fruit.nutritions.calories}, Sugar:${fruit.nutritions.sugar}`;
 
    // build the image attributes by using the setAttribute method for the value and label
    option1.setAttribute('value', nutritions.textContent);
    option1.setAttribute('label', fruit.name);
  
    option2.setAttribute('value', nutritions.textContent);
    option2.setAttribute('label', fruit.name);
  
    option3.setAttribute('value', nutritions.textContent);
    option3.setAttribute('label', fruit.name);
 
    // add/ append the existing html div with the fruit class with the option fruit

    document.querySelector('.option1').appendChild(option1);
    document.querySelector('.option2').appendChild(option2);
    document.querySelector('.option3').appendChild(option3);
}

// function to add the same page the information before submit
function logSubmit(event) {
    const formatData = new Intl.DateTimeFormat("en-GB", {dateStyle: "short"}).format(dateMod);
    log.textContent = `Ticket created with success! Order Date:${formatData}`;

    const select = document.getElementById('juice1').value;
    log1.textContent = select;

    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  const log1 = document.getElementById('log1');
  form.addEventListener('submit', logSubmit);
 

// initialize display elements
const todayDisplay = document.querySelector(".today");
const orderDisplay = document.querySelector(".order");

// get the stored value in localStorage
let numOrder = Number(window.localStorage.getItem("orders-ls"));

// determine if this is the first visit or display the number of visits.
if (numOrder !== 0) {
	orderDisplay.textContent = numOrder;
} else {
	orderDisplay.textContent = `This is the first ticket!`;
}

// increment the number of orders.
numOrder++;
// store the new number of orders value
localStorage.setItem("orders-ls", numOrder);
// show todays date.
todayDisplay.textContent = Date.now();