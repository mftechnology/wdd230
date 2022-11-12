//import myJson from './json/data.json' assert {type: 'json'};
const requestURL = 'https://mftechnology.github.io/wdd230/chamber/json/data.json';

async function getCompanies(){
    const response = await fetch(requestURL);
    if (response.ok){
        const data = await response.json();
        data.companies.forEach(company => {displayBusiness(company)})
       
    }
}

function displayBusiness(company) {
    //create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let portait = document.createElement('img');
    let name = document.createElement('span');
    

    // change the textContent property of the h2 element to contain the prophets full name
    h3.textContent = company.name;
 

    // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
    portait.setAttribute('src', company.img);
    portait.setAttribute('alt', `Portait of ${company.name}`);
    portait.setAttribute('loading', 'lazy');

    // Add/append the section card with the h2 element
    card.appendChild(h3);

    card.appendChild(portait);
    card.appendChild(name);
    

    // add/ append the existing html div with the cards class with the section card
   //cards.appendChild(card);
     document.querySelector('div.cards').appendChild(card);
}
getCompanies();
 
