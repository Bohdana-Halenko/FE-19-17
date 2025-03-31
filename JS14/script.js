// all()
// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     })
// }
// const promiseA = one('promise one', 1000);
// const promiseB = one('promise two', 2000);

// Promise.all([promiseA, promiseB])
//   .then((value) => console.log(value)) //['promise one', 'promise two']
//   .catch((error) => console.log(error));

// race()
// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     })
// }

// const promiseA = one('First promise', 3000);
// const promiseB = one("Second promise", 1500);

// Promise.race([promiseA, promiseB])
//   .then((value) => console.log(value)) //Second promise
//   .catch((error) => console.log(error))

// any()
// let promise = Promise.any(iterable);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Помилка!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Помилка!")), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Проблема!")), 2000)
//   ),
// ]).catch(error => {
//   console.log(error.constructor.name); //AggregateError
//   console.log(error.errors[0]); //Error: Помилка!
//   console.log(error.errors[1]); //Error: Проблема!
// })

// resolve() reject()
// new Promise(resolve => resolve('success')).then(value => console.log(value));
// Promise.resolve("success").then(value => console.log(value));

// new Promise((resolve, reject) => reject('error')).catch(error => console.log(error));
// Promise.reject('error').catch(error => console.log(error))

// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return {
//             success: false,
//             message: "Guest name is not found"
//         }
//     }
//     return {
//         success: true,
//         message: `Welcome ${guestName}`
//     }
// }

// const result = makeGreeting('Bob');

// if (result.success) {
//     console.log(result.message)
// } else {
//     console.log(result.message)
// }

// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return Promise.reject("Guest name is not found");
//     }
//     return Promise.resolve(`Welcome ${guestName}`);
// }
// makeGreeting('Bob')
//     .then(greeting => console.log(greeting))
//     .catch(error => console.log(error));

// Promise.allSettled()

const horses = ["Мілка", "Зорька", "Ластунка", "Rariti", "Пінкі-Пай"];
let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

refs.startBtn.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;
    const promises = horses.map(run);
    updateWinnerField('');
    updateProgressField("Заїзд розпочався. Ставки не приймаються!");
    deterWinner(promises);
    waitAll(promises);
}


function deterWinner(horsesP) {
    Promise.race(horsesP).then(( {horse, time} ) => {
        updateWinnerField(`Переможець ${horse}, фінішував за ${time}!`);
        updateResultsTable({
        horse, time, raceCounter
    })
    })
}

function waitAll(horsesP) {
    Promise.all(horsesP).then(() => {
        updateProgressField("Заїзд закінчено. Ставки не приймаються!")
    })
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr>
                <td>${raceCounter}</td>
                <td>${horse}</td>
                <td>${time}</td>
            </tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr)
}

function run(horse) {
  return new Promise((resolve) => {
    const time = getRondomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRondomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
