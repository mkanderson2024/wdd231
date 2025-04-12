//Import modular java script data
import { activities } from '../data/activities.mjs'
console.log(activities)

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
// Create cards
const allCards = document.querySelector("#activity-cards")

function displayActivities(activitiesList) {
    activitiesList.forEach(activity => {
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
        activityWeather.className = 'activity-weather'
        activityCard.appendChild(activityWeather)

        //          cost
        const activityCost = document.createElement('p')
        activityCost.innerText = `Cost: ${activity.cost}`
        activityCost.className = 'activity-cost'
        activityCard.appendChild(activityCost)

        //          reservation
        const activityReservation = document.createElement('p')
        activityReservation.innerText = `Reservation required: ${activity.reservation}`
        activityReservation.className = 'activity-reservation'
        activityCard.appendChild(activityReservation)

        //          ages
        const activityAge = document.createElement('p')
        activityAge.innerText = `Suggested ages: ${activity.ages}`
        activityAge.className = 'activity-age'
        activityCard.appendChild(activityAge)

        //          description
        const activityDescription = document.createElement('p')
        activityDescription.innerText = activity.description
        activityDescription.className = 'activity-description'
        activityCard.appendChild(activityDescription)

        allCards.appendChild(activityCard)
    })
}

displayActivities(activities)