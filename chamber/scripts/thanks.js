const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

//Shorthand of above
// const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));
let title = '';
let orgtitle = myInfo.get('organization-title')
let timeStamp = myInfo.get('timestamp')
console.log(timeStamp)

if (orgtitle == 'null')
    title = '';
else
    title = `(${orgtitle})`

document.querySelector('#results').innerHTML = `
<p>Application submitted for: </p>
<p>Name: ${myInfo.get('first-name')} ${myInfo.get('last-name')} ${title}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('mobile-number')}</p>
<p>Business or Organization: ${myInfo.get('business-organization-name')}</p>
<p>Membership Level: ${myInfo.get('membership-level')}</p>
<p>Business Description: ${myInfo.get('description')}</p>`