//This is for Hamburguer Menu 
function toggleMenu() {
    document.getElementById("navigationLinks").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;


 // Adding the date 

const d = new Date();
const year = d.getFullYear();
document.getElementById("year").textContent = year;

//Last modified
let oLastModif = new Date(document.lastModified);
let dayModif = oLastModif.getDate() 
let monthModif = oLastModif.getMonth()
let yearModif = oLastModif.getFullYear() 
let hourModif = oLastModif.getHours()
let minuteModif = oLastModif.getMinutes()
let secondsModif = oLastModif.getSeconds()
let completeMod = `Last Modification: ${dayModif}/${monthModif + 1}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;


// Dark Mode

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const titles = document.querySelector("h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark_mode")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		titles.style.color = "#fff";
		modeButton.innerHTML = '<span class="material-symbols-outlined">brightness_5</span>'
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		titles.style.color = "#03256c";
		modeButton.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
	}
});

