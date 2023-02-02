const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
              //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth = document.createElement('p');
    let place = document.createElement('p');

    //Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' '+ prophet.lastname;

    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname + ' ' + prophet.order + ' ' + 'Latter-day President');
    portrait.setAttribute('loading', 'lazy');

    //Build the paragraph with the birth data
    birth.textContent = 'Date of Birth: ' + prophet.birthdate 
    place.textContent = 'Place of Birth: ' + prophet.birthplace


    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(place);
    card.appendChild(portrait)

    //Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
            }); 
            // end of arrow function and forEach loop
          }