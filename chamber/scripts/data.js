
// last modified

const dateMod = new Date(document.lastModified);
const formatData = new Intl.DateTimeFormat("en-GB", {dateStyle: "short"}).format(dateMod);
document.getElementById("lastModified").innerHTML = formatData;

// short 12/11/2022
// full saturday, 12 November 2022

