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

document.addEventListener('DOMContentLoaded', function () {
    const timestampInput = document.getElementById('timestamp');
    const now = new Date();
    const timestamp = now.toLocaleString();

    timestampInput.value = timestamp;
});

document.getElementById('application-form-main').addEventListener('submit', function () {
    const now = new Date();
    const timestamp = now.toLocaleString();
    document.getElementById('timestamp').value = timestamp;
});


