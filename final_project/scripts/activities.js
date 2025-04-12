// Grid/List Button Switches
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Converts to Grid Layout
//      With arrow Function
gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});
// Converts to List
//      Without arrow Function
listbutton.addEventListener("click", showList);
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

getActivityData()

async function getActivityData() {
    try {
        const responce = await fetch("data/activities.json");
        const data = await responce.json();
        console.table(data.activities);
        displayActivities(data.activities);
    }
    catch (error) {
        console.error("Error getting activities data:", error)
    }
}

const allCards = document.querySelector("#activity-cards")

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        const activityCard = document.createElement('div')
        activityCard.className = 'activity-card'
        //          img
        const activityPhoto = document.createElement('img')
        activityPhoto.setAttribute('src', `images/${activity.picture}`)
        activityPhoto.setAttribute('alt', `image of ${activity.activity}`)
        activityPhoto.setAttribute('loading', 'lazy')
        activityPhoto.width = `300`
        activityPhoto.loading = 'lazy'
        activityCard.appendChild(activityPhoto)

        //          title
        const activityTitle = document.createElement('h2')
        activityTitle.innerText = activity.activity
        activityCard.appendChild(activityTitle)

        //          weather
        const activityWeather = document.createElement('p')
        activityWeather.innerText = `Best weather for activity: ${activity.weather}`
        activityCard.appendChild(activityWeather)

        //          cost
        const activityCost = document.createElement('p')
        activityCost.innerText = activity.activityCost
        activityCard.appendChild(activityCost)

        //          reservation
        const activityReservation = document.createElement('p')
        activityReservation.innerText = `Reservation required: ${activity.reservation}`
        activityCard.appendChild(activityReservation)

        //          ages
        const activityAge = document.createElement('p')
        activityAge.innerText = `Suggested ages: ${activity.ages}`
        activityCard.appendChild(activityAge)

        //          description
        const activityDescription = document.createElement('p')
        activityDescription.innerText = activity.description
        activityCard.appendChild(activityDescription)

        allCards.appendChild(activityCard)

    })
}