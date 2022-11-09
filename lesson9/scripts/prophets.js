const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not OK');
          }
        return response.json();
    })

    .then( function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portait = document.createElement('img');
    let birthdate = document.createElement('span');
    let deathdate = document.createElement('span');

    // change the textContent property of the h2 element to contain the prophets full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    deathdate.textContent = `Date of Death: ${prophet.death} `;

    // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
    portait.setAttribute('src', prophet.imageurl);
    portait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portait.setAttribute('loading', 'lazy');

    // Add/append the section card with the h2 element
    card.appendChild(h2);

    card.appendChild(portait);
    card.appendChild(birthdate);
    card.appendChild(deathdate);

    // add/ append the existing html div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);

}