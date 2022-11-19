//insert data html

//document.querySelector('#temp').textContent = 70;
//document.querySelector('#wind').textContent = 2.0;

// get value
//const temp = document.querySelector('temp');
//const wind = document.querySelector('wind');

const temp = document.querySelector('#temperature')
const wind = document.querySelector('#speed');

if (temp<= 50 && wind > 3.0) {
    const factor = Math.round(
        35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16
      );
    document.querySelector('#chill').textContent = Math.trunc(factor) + "º F" ;
}else{
    document.querySelector('#chill').textContent = "N/A";
}


