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
	if (modeButton.textContent.includes("🌙")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		titles.style.color = "#fff";
		modeButton.textContent = "🌞"
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		titles.style.color = "#03256c";
		modeButton.innerHTML = "🌙"
	}
});



const visitsDisplay = document.querySelector("#visits");

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





// Obtain 3 spotlights
const requestURL = 'https://raw.githubusercontent.com/Pangloss1107/wdd230/main/chamber/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const clients = jsonObject["clients"];
    
    for (let i = 0; i < 3; i++) {
        let clientsSection = document.createElement("div");      
        let h3 = document.createElement("h3");
        let portrait = document.createElement("img");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let web = document.createElement("a")

		let j = (Math.floor(Math.random()*9));

		clientsSection.setAttribute('class', 'clients');
		h3.textContent =  clients[j].name;
		h3.setAttribute('class', 'titleh3')
		portrait.setAttribute('src', clients[j].imageUrl);
		portrait.setAttribute('alt', 'Image of ' + clients[j].name + ' company');
		portrait.setAttribute('loading', 'lazy');
		p3.textContent = clients[j].adress;
		p3.setAttribute('class', 'adressline');
		p4.textContent = `Phone number: ${clients[j].phonenumber}`;
		p4.setAttribute('class', 'pnumber')
		web.setAttribute('href', clients[j].website);
		web.textContent = clients[j].website;

		clientsSection.appendChild(h3);
		clientsSection.appendChild(portrait);
		clientsSection.appendChild(p3);
		clientsSection.appendChild(p4);
		clientsSection.appendChild(web);


		document.querySelector('.spotlights').append(clientsSection);
    }
  });



  //Update the banner if the day is Monday, Tuesday, or Wednesdays 

  const banner = document.querySelector('.banner');

const actualDay = d.getDay();
if (actualDay === 1 || actualDay === 3) {
banner.classList.add('open');
  
}