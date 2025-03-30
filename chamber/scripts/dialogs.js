const openButton = document.querySelector("#openButton")
const dialogBoxText = document.querySelector("#dialogBoxText");
const dialogCloseButton = document.querySelector("#dialogCloseButton");

// Non Profit Dialog Box
openButton1.addEventListener("click", () => {
    dialogBoxText1.showModal();
});

dialogCloseButton1.addEventListener("click", () => {
    dialogBoxText1.close();
});
// Bronze Dialog Box
openButton2.addEventListener("click", () => {
    dialogBoxText2.showModal();
});

dialogCloseButton2.addEventListener("click", () => {
    dialogBoxText2.close();
});
// Silver Dialog Box
openButton3.addEventListener("click", () => {
    dialogBoxText3.showModal();
});

dialogCloseButton3.addEventListener("click", () => {
    dialogBoxText3.close();
});
// Gold Dialog Box
openButton4.addEventListener("click", () => {
    dialogBoxText4.showModal();
});

dialogCloseButton4.addEventListener("click", () => {
    dialogBoxText4.close();
});

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

document.getElementBdocument.getElementById("timeStamp").innerHTML = `Current time: ${hours}:${minutes}:${seconds}`


