// 1
function checkFields() {
    const fieldValueOne = document.getElementById("text-one").value;
    const fieldValueTwo = document.getElementById("text-two").value;
    if (fieldValueOne !== "" && fieldValueTwo !== "") {
        alert('Oбидва поля заповнені');
    } else {
        alert('Не всі поля заповнені');
    }
}


// 2
function checkFieldsTwo() {
    const fieldNumberOne = parseFloat(document.getElementById("number-one").value);
    const fieldNumberTwo = parseFloat(document.getElementById("number-two").value);
    if (fieldNumberOne + fieldNumberTwo > 10) {
        alert('Сума більше 10');
    } else {
        alert('Сума менша або дорівнює 10');
    }
}


// 3
function checkFieldsJs() {
    const fieldValuetext = document.getElementById("text-check").value;
    if (fieldValuetext.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}



// 4
function checkNumber() {
    const fieldValueNumber = document.getElementById("number-four").value;
    if (fieldValueNumber >= 10 && fieldValueNumber <= 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

// 5
function checkForm() {
    const name = document.getElementById("inputName").value;
    const mail = document.getElementById("inputMail").value;
    const password = document.getElementById("inputPass").value;

    if (name.length > 2 && mail.includes('@') && mail.inclueds('.') && password.length > 5) {
        window.location.href = "./test.html";
        alert('Go to another page');
    } else {
        alert('Form is not value');
    }
}