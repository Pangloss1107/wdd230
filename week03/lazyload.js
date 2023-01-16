//Last modified
let oLastModif = new Date(document.lastModified);
let dayModif = oLastModif.getDate() 
let monthModif = oLastModif.getMonth()
let yearModif = oLastModif.getFullYear() 
let hourModif = oLastModif.getHours()
let minuteModif = oLastModif.getMinutes()
let secondsModif = oLastModif.getSeconds()
let completeMod = `Last Modification: ${dayModif}/${monthModif}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;