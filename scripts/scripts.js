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


// Obtain the number of visits

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);



// JS for rating 

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

// Display the information in a table



const form = document.getElementById("info-form");
form.addEventListener("submit", function(event){
	event.preventDefault();

	let infoName = document.getElementById("info-name")
	let inputName = document.getElementById("fullname").value
	infoName.textContent = inputName;

	let inputEmail = document.getElementById("email").value;
	let infoEmail = document.getElementById("info-email");
	infoEmail.innerHTML= inputEmail;

	let inputRating = document.getElementById("r").value;
	let infoRating = document.getElementById("info-rating");
	infoRating.innerHTML= inputRating;

	let inputUserName = document.getElementById("keyphrase").value;
	let infoUserName = document.getElementById("info-username");
	infoUserName.innerHTML= inputUserName;

})

