const newrequestURL = 'https://pangloss1107.github.io/chamber/directory/scripts/data.json'
const cards = document.querySelector('cards');

fetch(newrequestURL)
    .then(function (response){
        return response.json();
    })

    .then(function(jsonObject){
        const clients = jsonObject['clients'];
        clients.forEach(displayClients)
    })


function displayClients(clients){
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let adress = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');


    //Change the textContent property of the h2 element to contain the companies name
    h2.textContent = clients.name;

    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 

    portrait.setAttribute('src', clients.imageUrl);
    portrait.setAttribute('alt', 'Image of ' + clients.name + ' company');
    portrait.setAttribute('loading', 'lazy');

    //Build the paragraph with the information
    adress.textContent = clients.adress
    phone.textContent = clients.phonenumber
    website.textContent = clients.website

    //Add the section(card) with the elements

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('article.cards').appendChild(card);
};



   
    
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}