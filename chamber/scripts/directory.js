//import myJson from './data.json' assert {type: 'json'};

//const requestURL = myJson;

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
    let address = document.createElement('span');
    let phone = document.createElement('span');
    let member = document.createElement('span');
    let br = document.createElement('br');
    let url = document.createElement('a');
    

    // change the textContent property of the h2 element to contain the prophets full name
    h3.textContent = company.name;
    address.textContent = `Address: ${company.address} `;
    phone.textContent = `Phone: ${company.phone} `;
    member.textContent = `Member Level: ${company.memberLevel} `;
    url.textContent = company.website;
 

    // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
    portait.setAttribute('src', company.img);
    portait.setAttribute('alt', `Portait of ${company.name}`);
    portait.setAttribute('loading', 'lazy');
    url.setAttribute('href', company.website)

    // Add/append the section card with the h2 element
    card.appendChild(h3);
    card.appendChild(portait);
    card.appendChild(br);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(member);
    card.appendChild(url);
    

    // add/ append the existing html div with the cards class with the section card
   //cards.appendChild(card);
     document.querySelector('div.cards').appendChild(card);
}

getCompanies();
 
