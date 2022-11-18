//select output elements

const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('#figcaption');

//Get the weather data from the API openweathermap.org

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=a65fbd4d340b1656a4dd99e24f4ff07a';
//const apiURL= 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=a65fbd4d340b1656a4dd99e24f4ff07a'
async function apiFetch () {
    try {
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            console.log(`Response not OK:${await response.text()}`)
        }
    }catch(error) {
        console.log(`Error: ${error.message}`);
    }
}
apiFetch();
//captialize
/*
function captialize(string) {
    return`${string.charAt(0).toUpperCase()} ${string.slice(1)}`;
}*/

// display the results

function displayResults(data){
    temperature.textContent = data.main.temp.toFixed(0); //to fixed around the number
    let desc = data.weather[0].description;
    description.textContent = desc.toUpperCase();
    caption.textContent = `Icon of current weather condition at Fairbanks which is ${desc}`;
    weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weathericon.alt = `Icon of current weather condition at Fairbanks which is ${desc}`;   
    }
