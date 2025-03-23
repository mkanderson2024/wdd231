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

let randnum1 = Math.floor(Math.random() * 7);
let randnum2 = Math.floor(Math.random() * 7);
let randnum3 = Math.floor(Math.random() * 7);
while (randnum2 == randnum1) { randnum2 = Math.floor(Math.random() * 7) };
while (randnum3 == randnum1 || randnum3 == randnum2) { randnum3 = Math.floor(Math.random() * 7) }

//Check random mumbers

// console.log(randnum1);
// console.log(randnum2);
// console.log(randnum3);

const displayMembers = (members) => {
    //Creates list for random businesses
    let businessesid = []
    //Creates 3 random numbers from business ids
    business1 = members[randnum1]
    business2 = members[randnum2]
    business3 = members[randnum3]
    // Adds business numbers to list
    businessesid.push(randnum1, randnum2, randnum3)
    //Test random buisnesses

    // console.log(business1)
    // console.log(business2)
    // console.log(business3)
    // console.log(businessesid)

    //Iterates through list of random businesses
    businessesid.forEach(item => {
        let member = members[item]
        console.log(item)
        console.log(member)
        //creates elements
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
        image.setAttribute('width', '140');
        image.setAttribute('height', '140');

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
    })

};
//         let card = document.createElement("section");
//         let name = document.createElement("h4");
//         let owner = document.createElement("h5");
//         let phoneNumber = document.createElement("h5");
//         let website = document.createElement("h5");
//         let image = document.createElement("img");
//         let memberLevel = document.createElement("h5");
//         let status = "";
//         // Sets member status
//         if (member.memberLevel == "3")
//             status = "Gold";
//         else if (member.memberLevel == "2")
//             status = "Silver";
//         else
//             status = "Member"

//         name.textContent = `${member.name}`;

//         image.setAttribute('src', member.imageUrl);
//         image.setAttribute('alt', `Image of ${name}`);
//         image.setAttribute('loading', 'lazy');
//         image.setAttribute('width', '340');
//         image.setAttribute('height', '440');

//         owner.textContent = `${member.owner}`;
//         phoneNumber.textContent = `${member.phoneNumber}`
//         website.textContent = `${member.website}`
//         memberLevel.textContent = `Member status: ${status}`

//         card.appendChild(name);
//         card.appendChild(image);
//         card.appendChild(phoneNumber);
//         card.appendChild(website);
//         card.appendChild(owner);
//         card.appendChild(memberLevel);

//         cards.appendChild(card)

//     });
// }