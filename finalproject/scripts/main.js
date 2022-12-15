//Menu Hamburger ------------------------------------------------------
function toggleMenu(){
    document.getElementById('navigation').classList.toggle("open");
  }
  
  const x = document.getElementById('hambBtn')
  x.onclick = toggleMenu;


  

const dateMod = new Date(document.lastModified);
const formatData = new Intl.DateTimeFormat("en-GB", {dateStyle: "short"}).format(dateMod);
document.getElementById("lastModified").innerHTML = formatData;


