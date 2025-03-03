// let seconds = 0;
// let timer = setInterval(function () {
//     seconds++;
//     console.log(seconds);
// }, 1000)


// let seconds = 5;
// let timer = setTimeout(function () {
//     console.log('Stop!');
// }, seconds * 1000)


// 1
// Створіть таймер, який відлічує задану кількість хвилин та секунд до нуля.
// Після досягнення нульового значення виведіть повідомлення "Час вийшов!".

// let timer;

// document.getElementById('start').addEventListener('click', function () {
//     let minutes = parseInt(document.getElementById('minutes').value) || 0;
//     let seconds = parseInt(document.getElementById('seconds').value) || 0;
//     let totalTime = minutes * 60 + seconds;

//     if (totalTime > 0) {
//         clearInterval(timer);
//         timer = setInterval(() => {
//             if (totalTime <= 0) {
//                 clearInterval(timer);
//                 document.getElementById('timer').textContent = "Час вийшов!";
//             } else {
//                 totalTime--;
//                 let min = Math.floor(totalTime / 60);
//                 let sec = totalTime % 60;
//                 document.getElementById("timer").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
//             }
//         }, 1000)
//     }
// })



// 2
// Розробіть секундомір, який показує час з точністю до мілісекунд.Включіть можливість
// запуску, призупинки та скидання секундоміра.Виводьте час на екран у форматі
// "години:хвилини:секунди.мілісекунди".

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let running = false;

// function formatTime(ms) {
//     let totalMs = ms % 1000;
//     let totalSecond = Math.floor(ms / 1000);
//     let hours = Math.floor(totalSecond / 3600);
//     let minutes = Math.floor((totalSecond % 3600) / 60);
//     let seconds = totalSecond % 60;

//     return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2, "0")}.${String(totalMs).padStart(3, "0")}`;
// }

// function updateDisplay() {
//     document.getElementById('timer').textContent = formatTime(elapsedTime);
// }

// document.getElementById("start").addEventListener('click', function () {
//     if (!running) {
//         startTime = Date.now() - elapsedTime;
//         timerInterval = setInterval(() => {
//             elapsedTime = Date.now() - startTime;
//             updateDisplay();
//         }, 10);
//         running = true;
//     }
// });

// document.getElementById("pause").addEventListener('click', function () {
//     clearInterval(timerInterval);
//     running = false;
// })

// document.getElementById('reset').addEventListener('click', function () {
//     clearInterval(timerInterval);
//     elapsedTime = 0;
//     updateDisplay();
//     running = false;
// });

// updateDisplay();


// 3
// Створити таймер, який буде починати відлік з 10 секунд та зменшувати час кожну мілісекунду.
// При досягненні 5 секунд, таймер повинен змінювати колір фону сторінки на червоний.

// 4
// Створіть анімацію, використовуючи таймер, яка змінює розмір елемента на сторінці з
// плавним збільшенням та зменшенням.Анімація повинна циклічно повторюватися.

let scale = 1;
let growing = true;

function animateBox() {
    const box = document.getElementById('box');

    if (growing) {
        scale += 0.05;
        if (scale >= 1.5) growing = false;
    } else {
        scale -= 0.05;
        if (scale <= 0.75) growing = true;
    }

    box.style.transform = `scale(${scale})`
}

setInterval(animateBox, 100);