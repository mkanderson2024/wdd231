const openButton = document.querySelector("#openButton")
const dialogBoxText = document.querySelector("#dialogBoxText");
const dialogCloseButton = document.querySelector("#dialogCloseButton");
const submitButton = document.querySelector("#submit");

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

document.getElementById('submit').addEventListener("click", () => {
    valthis()
})
// Checkbox Validation
function valthis() {
    var checkBoxes = document.getElementsByClassName('activity-interest');
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            isChecked = true;
        };
    };
    if (isChecked) {
        ;
    } else {
        alert('Please, check at least one Activities checkbox!');
        returnToPreviousPage()
    }
}

function returnToPreviousPage() {
    window.location.reload();
}
