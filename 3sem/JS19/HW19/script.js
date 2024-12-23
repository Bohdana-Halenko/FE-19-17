// 1
const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.body.style.backgroundColor = radio.value;
    });
});

document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;


// 2.1
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'незнайомець';
});


// 2.2
const validationInput = document.getElementById('validation-input');
const requiredLength = parseInt(validationInput.dataset.length, 10);

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length === requiredLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});


// 3
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = `${fontSizeControl.value}px`
})