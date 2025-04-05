import { places } from '../data/places.mjs'
console.log(places)

const allCards = document.querySelector("#cards")

function displayItems(places) {
    places.forEach(place => {
        const placeCard = document.createElement('div')
        placeCard.className = 'explore-card'


        const placePhoto = document.createElement('img')
        placePhoto.src = `${place.photo_url}`
        placePhoto.alt = place.name
        placePhoto.width = `300`
        placePhoto.loading = 'lazy'
        console.log(placePhoto)
        placeCard.appendChild(placePhoto)

        const placeTitle = document.createElement('h2')
        placeTitle.innerText = place.name
        placeCard.appendChild(placeTitle)

        const placeAddress = document.createElement('address')
        placeAddress.innerText = place.address
        placeCard.appendChild(placeAddress)

        const placeDescription = document.createElement('p')
        placeDescription.innerText = place.description
        placeCard.appendChild(placeDescription)

        const learnMoreButton = document.createElement('button')
        learnMoreButton.innerText = 'Learn More'
        placeCard.appendChild(learnMoreButton)


        allCards.appendChild(placeCard)
    })
}

displayItems(places)