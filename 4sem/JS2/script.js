// console.log(_.sum([4, 2, 8, 9, 6])); //29
// console.log(_.shuffle([1, 2, 3, 4, 5, 6, 7])); //[4, 3, 2, 6, 7, 5, 1]

// window.addEventListener('scroll', _.throttle(() => {
//     console.log("Hello!")
// }, 300))

// document.querySelector('input').addEventListener('input', _.debounce(() => {
//     console.log('Hello!')
// }, 600, {
//     leading: true,
//     trailing: false
// }))


// const output = document.querySelector('.output');
// let scrollEventCounter = 0;

// document.addEventListener('scroll', () => {
//     scrollEventCounter += 1;
//     output.textContent = scrollEventCounter;
// })


// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//     vanilla: 0,
//     throttled: 0,
//     debounced: 0,
// }

// document.addEventListener('scroll', () => {
//     eventCounter.vanilla += 1;
//     vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener('scroll', _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
// }, 500));

// document.addEventListener('scroll', _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
// }, 500))

// const inputField = document.getElementById('search');
// const fetchData = (query) => {
//     console.log(`Запит на сервер ${query}`);
// }
// const throttledFetchData = _.throttle((query) => fetchData(query), 500);
// inputField.addEventListener('input', (event) => {
//     const query = event.target.value;
//     throttledFetchData(query);
// })





const box = document.getElementById('box');

const moveBox = (x, y) => {
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
};

const debouncedMoveBox = _.debounce((x, y) => moveBox(x, y), 100);

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    debouncedMoveBox(x, y);
})