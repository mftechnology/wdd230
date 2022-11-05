const currentTime = new Date();
// set date time on page thanks
let hour = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

document.querySelector('#timeform').textContent = hour;