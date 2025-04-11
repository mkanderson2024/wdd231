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