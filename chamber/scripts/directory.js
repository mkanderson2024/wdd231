//-------Copyright Date Script-------
const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

//Last Modified Script
const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;
//-------Hamburger Button Script -------

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//-------Constants--------
const url = "data/members.json";
const cards = document.querySelector('#business-cards');

//Display Buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

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

//-------Functions-------

getBusinessData();
//Initial Function
async function getBusinessData() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        console.table(data.members);
        displayMembers(data.members)
    } catch (error) {
        console.error("Error getting member data:", error);
    }

}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let owner = document.createElement("h5");
        let phoneNumber = document.createElement("h5");
        let website = document.createElement("h5");
        let image = document.createElement("img");
        let memberLevel = document.createElement("h5");
        let status = "";
        // Sets member status
        if (member.memberLevel == "3")
            status = "Gold";
        else if (member.memberLevel == "2")
            status = "Silver";
        else
            status = "Member"

        name.textContent = `${member.name}`;

        image.setAttribute('src', member.imageUrl);
        image.setAttribute('alt', `Image of ${name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        owner.textContent = `${member.owner}`;
        phoneNumber.textContent = `${member.phoneNumber}`
        website.textContent = `${member.website}`
        memberLevel.textContent = `Member status: ${status}`

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(owner);
        card.appendChild(memberLevel);

        cards.appendChild(card)

    });
}

