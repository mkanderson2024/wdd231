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