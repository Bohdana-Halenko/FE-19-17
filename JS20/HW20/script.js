// 1
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery .image');
    let currentIndex = 0;

    images[currentIndex].classList.add('active');

    function updateImage() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex)
        })
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
    })
})

// 2
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');

const createBoxes = (amount) => {
    const baseSize = 30;
    const sizeIncrement = 10;
    for (let i = 0; i < amount; i++) {
        let item = document.createElement('div');
        const size = baseSize + i * sizeIncrement;
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.style.margin = `5px`;

        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        item.style.backgroundColor = randomColor;
        boxes.append(item);
    }
};

const destroyBoxes = () => {
    boxes.innerHTML = "";
};

createBtn.addEventListener('click', () => {
    const amount = document.querySelector('[type="number"]').value;
    createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);