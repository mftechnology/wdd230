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
    let h3 = document.createElement('h3');
    let hr = document.createElement('hr');
    let phone = document.createElement('p');
    let memberLevel = document.createElement('p');
  
 
    // change the textContent property of the h2 element to contain the prophets full name
    phone.textContent = `Phone: ${company.phone} `;
    memberLevel.textContent = `Membership-level: ${company.memberLevel} `;

    // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
    portait.setAttribute('src', company.img);
    portait.setAttribute('alt', `Portait of ${company.name}`);
    portait.setAttribute('loading', 'lazy');
    portait.setAttribute('width', "50%")
  
 
    // Add/append the section card with the h2 element
    card.appendChild(h3);
    card.appendChild(portait);
    card.appendChild(hr);
    card.appendChild(phone);
    card.appendChild(memberLevel);
  
    
    
    // add/ append the existing html div with the cards class with the section card
   //cards.appendChild(card);
    if (company.Category === "Stay") {
        h3.textContent = "Where to Stay";
        document.querySelector('div.Spotlight1').appendChild(card);    
    } 
    if (company.Category === "Food") {
        h3.textContent = "Where to Eat";
        document.querySelector('div.Spotlight2').appendChild(card);    
    } 
    if (company.Category === "Place") {
        h3.textContent = "What To Do";
        document.querySelector('div.Spotlight3').appendChild(card);    
    } 
}


 