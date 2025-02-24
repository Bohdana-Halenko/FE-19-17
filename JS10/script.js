// console.log('1');

// setTimeout(() => {
//   console.log("2");
// }, 5000)

// console.log("3");


// const one = () => {
//     console.log('Hello!')
// }

// const timer = setTimeout(one, 4000);
// clearTimeout(timer);






// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('.btn');

//     if (button) {
//         button.addEventListener('click', () => {
//             setTimeout(() => {
//                 alert('I love JS');
//             }, 2000)
//         })
//     }
// })


// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timer = null;

// startBtn.addEventListener('click', () => {
//     timer = setInterval(() => {
//         console.log('I love JS!')
//     }, 1000)
// })

// stopBtn.addEventListener('click', () => {
//     clearInterval(timer);
//     console.log('Stopped!')
// })


let count = 0;
const counterEl = document.getElementById("counter");

setInterval(() => {
    count++;
    counterEl.textContent = count;
}, 1000)