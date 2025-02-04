// task1
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const pickMe = document.getElementById("pickMe");

slider.addEventListener(
  "input", _.debounce(() => {
    image.style.width = `${slider.value}px`;
    image.style.height = `${slider.value}px`;
    pickMe.textContent = slider.value;
  }, 200)
);




// task2
const box = document.getElementById('box');

const moveBox = (x, y) =>{
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
};

const debouncedMoveBox = _.debounce((x, y) => moveBox(x,y), 100);

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    debouncedMoveBox(x, y);
});
