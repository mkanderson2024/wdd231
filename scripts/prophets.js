// Constants
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


// Functions
// ----Initial Function ----
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // This creates cards to add to the html coding under the div.cards element
        let card = document.createElement("section")
        let fullName = document.createElement("h2")
        let portrait = document.createElement("img")
        // This creates the h2 element with the prophets first and last name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        // This builds the html element img attributes for each card
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // This appends the section(card) with the elemnts for the name and the picture
        card.appendChild(fullName)
        card.appendChild(portrait)
        cards.appendChild(card)
    });


}

getProphetData();