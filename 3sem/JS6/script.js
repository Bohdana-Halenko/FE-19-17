// let counter = 0;

// while (counter < 10) {
//     console.log('counter: ', counter);
//     counter += 1;
// }

// let clients = 12;
// const maxClients = 20;
// while (clients < maxClients) {
//     console.log(clients);
//     clients += 1;
// }


// let password = '';
// do {
//     password = prompt('ВВедіть пароль довше 4ч символів', '');
// } while (password.length < 5);
// console.log('Ваш пароль:', password);

// const max = 15;
// for (let i = 0; i < max; i += 5){
//     console.log(i);
// }

// const target = 4;
// let sum = 0;
// for (let i = 0; i <= target; i += 1){
//     sum += i;
// }
// console.log(sum);

for (let i = 0; i < 10; i += 1){
    if (i === 5) {
        break;
    }
}


const num = 30;
for (let i = 0; i < num; i += 1){
    if (i % 2 === 1) {
        continue
    }
    console.log('парні: ', i);
}