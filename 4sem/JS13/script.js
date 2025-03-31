// const isSuccess = false;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//              resolve('Успіх!')
//         } else {
//             reject('Помилка!')
//          }
//      }, 1000)
// })
 
// // console.log( 'Before')
// // promise.then(
// //     value => {
// //         console.log('onResolve: ');
// //         console.log(value)
// //     },
// //     error => {
// //         console.log('onReject: ');
// //         console.log(error)
// //     }
// // )
// // console.log('After')

// promise
//     .then(value => {
//         console.log(value)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(()=>{ console.log('Promise')})


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 2500)
// })

// promise
//     .then(value => {
//         console.log(value); //5
//         return value * 3; //15
//     })
//     .then(value => {
//         console.log(value); //15
//         return value * 5
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Finish!')
//     })



// const fetch = username => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching data ${username}`)
//         setTimeout(() => {
//           const onSuccess = true;
//           if (onSuccess) {
//             resolve("Успіх!");
//           } else {
//             reject("Помилка!");
//           }
//         }, 2500);
//     })
// }

// fetch('Bob')
//     .then(user => console.log(user))
//     .catch(error => console.log(error))




// function checkEvenNumbers(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.every(num => num % 2 === 0)) {
//             resolve('Всі числа парні!')
//         } else {
//             reject('Є непарні числа')
//         }
//     })
// }

// checkEvenNumbers([8, 12, 20, 98, 64, 50])
//     .then(console.log)
//     .catch(console.error)

// checkEvenNumbers([8, 12, 21, 98, 64, 50])
//   .then(console.log)
//   .catch(console.error);



