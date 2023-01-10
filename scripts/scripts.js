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
let completeMod = `Last Modification: ${dayModif}/${monthModif}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;


// Dark Mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark_mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.innerHTML = '<span class="material-symbols-outlined">brightness_5</span>'
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
	}
});
