function toggleMenu(){
  document.getElementById('navigation').classList.toggle("open");
}

const x = document.getElementById('hambBtn')
x.onclick = toggleMenu;


// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// set current year in header
document.querySelector('#timeHeader').textContent = currentDate.getFullYear();

// last modified

//const datefieldUK = document.querySelector('#lastmod'); // for european/family history format with day first.
const dateHeader = document.querySelector('#timeHeader');

const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);


//datefield.innerHTML = `<em>${fulldate}</em>`;
//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
dateHeader.innerHTML = `<em>${fulldateUK}</em>`;

//-*------------------------------------------
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
