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


const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Key Phrases DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp2.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}



// Weeks
const bweek01 = document.querySelector('#week01'); 
const bweek02 = document.querySelector('#week02'); 
const bweek03 = document.querySelector('#week03'); 
const bweek04 = document.querySelector('#week04'); 
const bweek05 = document.querySelector('#week05'); 
const data = "https://raw.githubusercontent.com/Pangloss1107/wdd230/main/wek05/activityJson.json"


function obtenerWeeks(){
    fetch(data)
        .then(resultado =>{
            return resultado.json();
        })
        .then(datos => {
            //console.log(datos.weeks);
            const { weeks } = datos;
            console.log(weeks.week01)
            
            Object.entries(weeks.week01).forEach( ([key, value]) => {
                console.log(key);
                console.log(value);
                let a = document.createElement('a');
                a.setAttribute('href', value)
                a.textContent = `${key} |`
               
                
                bweek01.appendChild(a)
          
            })
            Object.entries(weeks.week02).forEach( ([key, value]) => {
                console.log(key);
                console.log(value);
                let a = document.createElement('a');
                a.setAttribute('href', value)
                a.textContent = `${key} |`
               
                
                bweek02.appendChild(a)
          
            })

            Object.entries(weeks.week03).forEach( ([key, value]) => {
                console.log(key);
                console.log(value);
                let a = document.createElement('a');
                a.setAttribute('href', value)
                a.textContent = `${key} |`
               
                
                bweek03.appendChild(a)
          
            })

            Object.entries(weeks.week04).forEach( ([key, value]) => {
                console.log(key);
                console.log(value);
                let a = document.createElement('a');
                a.setAttribute('href', value)
                a.textContent = `${key} |`
               
                
                bweek04.appendChild(a)
          
            })

            Object.entries(weeks.week05).forEach( ([key, value]) => {
                console.log(key);
                console.log(value);
                let a = document.createElement('a');
                a.setAttribute('href', value)
                a.textContent = `${key} |`
               
                
                bweek05.appendChild(a)
          
            })


   
        })

        
}
obtenerWeeks();

