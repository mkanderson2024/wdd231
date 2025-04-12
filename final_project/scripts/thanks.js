const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const activities = myInfo.getAll('activity-interest')

activities.forEach(activity => { console.log(activity) })

let timeStamp = myInfo.get('timestamp')
console.log(timeStamp)

document.querySelector('#results').innerHTML = `
<p>Group memeber details: </p>
<p>Name: ${myInfo.get('first-name')} ${myInfo.get('last-name')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('mobile-number')}</p>
<p>Interested in activities: ${activities}</p>
<p>About me description: ${myInfo.get('description')}</p>`