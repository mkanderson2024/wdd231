// Constants
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");


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
        let info = document.createElement("div");
        info.classList.add("info");
        let place = document.createElement("p")
        let date = document.createElement("p");
        let death = document.createElement("p");
        let ageAtDeath = document.createElement("p");
        let length = document.createElement("p");
        let num = document.createElement("p");
        let portrait = document.createElement("img");


        // This creates the h2 element with the prophets first and last name and additional info
        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        date.innerHTML = `Birth: ${prophet.birthdate}`;
        place.innerHTML = `Place: ${prophet.birthplace}`;
        num.innerHTML = `Children: ${prophet.numofchildren}`;
        length.innerHTML = `Prophet Years: ${prophet.length}`;
        death.innerHTML = `Death: ${prophet.death}`;
        ageAtDeath.innerHTML = `Age: ${getAgeAtDeathInYears(
            prophet.birthdate,
            prophet.death
        )}`;
        // This builds the info list
        info.appendChild(date);
        info.appendChild(place);
        info.appendChild(num);
        info.appendChild(length);
        info.appendChild(death);
        info.appendChild(ageAtDeath);

        // This builds the html element img attributes for each card
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // This appends the section(card) with the elemnts for the name and the picture
        card.appendChild(fullName);
        card.appendChild(info);
        card.appendChild(portrait);
        cards.appendChild(card);
    });


}

//Filtered Prophets
const getProphets = async (filter = "all") => {
    let prophets = await json.fetch(url);

    switch (filter) {
        case "idaho":
            prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
            break;
        case "nonus":
            prophets = prophets.filter((prophet) => prophet.birthplace === "England");
            break;
        case "ten":
            prophets = prophets.filter((prophet) => prophet.length >= 15);
            break;
        case "childs":
            prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
            break;
        case "childl":
            prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
            break;
        case "old":
            prophets = prophets.filter(
                (prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
            );
            break;
        default:
            break;
    }

    displayProphets(prophets);
};
// Buttons
all.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("all");
    all.classList.add("active");
});

idaho.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("idaho");
    idaho.classList.add("active");
});

document.querySelector("#nonus").addEventListener("click", () => {
    clearButtonClasses();
    getProphets("nonus");
    nonus.classList.add("active");
});

ten.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("ten");
    ten.classList.add("active");
});

childs.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("childs");
    childs.classList.add("active");
});

childl.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("childl");
    childl.classList.add("active");
});

old.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("old");
    old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
    let birth = new Date(birthdate);
    let death = new Date(deathdate);
    if (deathdate === null) {
        death = new Date();
    }
    return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
    filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}

getProphetData();