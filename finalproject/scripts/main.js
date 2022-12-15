const dateMod = new Date(document.lastModified);
const formatData = new Intl.DateTimeFormat("en-GB", {dateStyle: "short"}).format(dateMod);
document.getElementById("lastModified").innerHTML = formatData;
  