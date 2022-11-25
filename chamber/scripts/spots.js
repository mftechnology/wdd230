//import myJson from './data.json' assert {type: 'json'};

//const requestURL = myJson;

const requestURL = 'https://mftechnology.github.io/wdd230/chamber/json/data.json';

/*async function getCompanies(){
    const response = await fetch(requestURL);
    if (response.ok){
        const data = await response.json();
       // data.companies.forEach(company => {displayBusiness(company)})
        data.filter([memberLevel] === "GOLD");
        company.forEach(displayBusiness);
    }
}
*/
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const members = jsonObject["companies"].filter(members => members.memberLevel === "GOLD");
  members.forEach(displayBusiness);
});

function displayBusiness(company) {
    //create elements to add to the document
    let card = document.createElement('section');
    let portait = document.createElement('img');
    let member = document.createElement('span');
    let category = document.createElement('p');
 
    // change the textContent property of the h2 element to contain the prophets full name
    category.textContent = company.Category;

    // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
    portait.setAttribute('src', company.img);
    portait.setAttribute('alt', `Portait of ${company.name}`);
    portait.setAttribute('loading', 'lazy');
  
 
    // Add/append the section card with the h2 element
    card.appendChild(portait);
    card.appendChild(member);
    card.appendChild(category);
    


    
    // add/ append the existing html div with the cards class with the section card
   //cards.appendChild(card);
     console.log(`IMPRIME: ${company.Category}`);
        //document.querySelector('div.stay').appendChild(card);    
 
}


 