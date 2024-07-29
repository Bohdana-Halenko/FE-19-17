// const arr = ['hello', 1, false, null, undefined];

// const names = ['Марго', 'Михайло', 'Станіслав', 'Кирило'];
// console.log(names);
// console.log(names[5]);
// names[0] = 'Маргарита';
// console.log(names[0]);
// names[8] = 'Артем';
// console.log(names);

// console.log(names.length); //4
// names.length = 2;
// console.log(names); // ['Марго', 'Михайло']

// names.length = 6;
// console.log(names); // ['Марго', 'Михайло', 'Станіслав', 'Кирило', empty × 2]



// Ітерація

// const names = ['Марго', 'Михайло', 'Станіслав', 'Кирило'];
// for (let i = 0; i < names.length; i += 1){
//     console.log('Names: ', names[i]);
// }

// for (const name of names) {
//     console.log(name);
// }

// const string = 'Hello';
// for (const letter of string) {
//     console.log(letter);
// }



// const names = ['Марго', 'Михайло', 'Станіслав', 'Кирило'];
// const nameFind = 'Стас';
// let message;
// for (const name of names) {
//     if (name === nameFind) {
//         message = 'Клієнта знайдено';
//         break;
//     }
//     message = 'Клієнта не знайдено';
// }
// console.log(message);


// const numbers = [20, 1, 35, 14, 84, 7, 3, 4, 34];
// const newNum = 15;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < newNum) {
//         continue;
//     }
//     console.log(`Число більше ніж ${newNum}: ${numbers[i]}`);
// }



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1){
    console.log('Підмасив матриці matrix[i]:', matrix[i]);

    for (let x = 0; x < matrix[i].length; x += 1){
        console.log('Елемент підмасиву матриці matrix[i][x]: ', matrix[i][x]);
        total += matrix[i][x];
    }
}
console.log(total); //45