// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     alert('Parent click');
// });
// child.addEventListener('click', () => {
//     alert('Child click');
// });
// des.addEventListener('click', () => {
//     alert('Des click');
// });




// 2
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        return
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}

createPaletteItems();

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 200; i++){
        const color = getRandomColor();
        const item = document.createElement('button');
        item.type = 'button';
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add('item');
        items.push(item);
    }
    colorPalette.append(...items);
}

function getRandomColor() {
return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`
}

function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, '0');
}