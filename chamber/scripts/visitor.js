
function getDaysSinceLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        localStorage.setItem('lastVisit', new Date().getTime());
        return "Welcome! Let us know if you have any questions.";
    }

    const lastVisitDate = new Date(parseInt(lastVisit));
    const today = new Date();

    // Set hours, minutes, seconds, and milliseconds to 0 to compare only dates
    lastVisitDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const timeDifference = today.getTime() - lastVisitDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    localStorage.setItem('lastVisit', new Date().getTime());

    let returnedMessage = ``;
    const quickReturn = `Back so soon! Awesome!`
    let longReturn = `It has been ${daysDifference} days since your last visit.`

    if (daysDifference < 1) {
        returnedMessage = `${quickReturn}`
    }
    if (daysDifference >= 1) {
        if (daysDifference = 1) {
            longReturn = `It has been ${daysDifference} day since your last visit.`
        }
        else { returnedMessage = `${longReturn}` }
    }
    return returnedMessage;
}

const message = getDaysSinceLastVisit();
console.log(message);

const greeting = document.getElementById("visit-message")
let greetingMessage = message
greeting.innerHTML = greetingMessage