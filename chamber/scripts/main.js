//Menu Hamburger ------------------------------------------------------
function toggleMenu(){
  document.getElementById('navigation').classList.toggle("open");
}

const x = document.getElementById('hambBtn')
x.onclick = toggleMenu;



// set current year in footer ............................................................
const currentDate = new Date();

// set current year in header
document.querySelector('#year').textContent = currentDate.getFullYear();

// set current year in header
document.querySelector('#timeHeader').textContent = currentDate.getFullYear();




// last modified

const dateHeader = document.querySelector('#timeHeader');

const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);

dateHeader.innerHTML = `<em>${fulldateUK}</em>`;

document.querySelector("#lastModified").textContent = document.lastModified();




//Banner ------------------------------------------------------------------------------
let bannerDay = new Date().getDay();

const banner = document.querySelector('#banner');
if (bannerDay === 1 || bannerDay === 2){
    banner.style.display = 'block';
} else{
    banner.style.display = 'none';
}

const close = document.querySelector('#close');

close.addEventListener('click', () => {
    banner.style.display = 'none';
})