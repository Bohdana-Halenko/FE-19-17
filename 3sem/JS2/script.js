'use strict';
// const a = 20;
// const b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // Оператори порівняння
// console.log(a > b);
// console.log(a < b);
// a >= b;
// a <= b;
// a == b;
// a != b;
// console.log(a === b);
// console.log(a !== b);

// 5 == '5' //true
// 5 === '5' //false

// 0 == false;
// 0 === false;

// const c = '20';
// console.log(typeof Number(c));


// const d = 'qwe';
// console.log(Number(d));
// console.log(typeof Number(d));


// console.log(Number.parseInt('10px')); //10
// console.log(Number.parseInt('15qwe24')); //15
// console.log(Number.parseInt('14.45qwe')); //14
// console.log(Number.parseInt('qwe')); //NaN

// console.log(Number.parseFloat('10px')); //10
// console.log(Number.parseFloat('12qwe74')); //12
// console.log(Number.parseFloat('12.24qwe78')); //12.24




// const x = Number('25');
// console.log(Number.isNaN(x)); //false

// const y = Number('qweqwe');
// console.log(Number.isNaN(y)); //true

// 0.3 + 0.5
// 0.3 //0.30000000000000002

// // console.log(0.1 + 0.3 === 0.4); 0.40000000000001 === 0.4
// console.log(0.1 + 0.3); //0.40000000000001

// (0.1*10 + 0.3*10) / 10


// console.log(Math.floor(2.8)); //2

// console.log(Math.ceil(3.4)); //4

// console.log(Math.round(1.2)); //1
// console.log(Math.round(1.5)); //2

// console.log(Math.max(20, 100, 47, 124, 99)); //124

// console.log(Math.min(85, 24, 78, 12)); //12

// console.log(Math.pow(2, 3)); //

// console.log(Math.random() * (10 - 1) + 1);



// HW2
// 1 Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
const c = 30;
const f = 1.8 * c + 32;
console.log(f);

// 2 Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль. 
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
console.log(hours);
console.log(minutes);

// 3 Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let h = 100;
let e = 100;
h -= 25; 
e -= 30;
console.log(h);
console.log(e);

// 4 Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
let price = 100;
let sum = price - price * 0.1;
// let sum = (price / 100) * 90;
console.log(sum);

// 5 Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль. 
const n = 3.14;
console.log(Math.floor(n));

// 6 Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.   
const v = '5.741hg11';
console.log(parseFloat(v));

// 7 Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. 
const x = '3.1524pppr1';
console.log(parseInt(x));

// 8 Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.   
const a = 25;
console.log(Math.sqrt(a));

// 9 Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
const num = 20;
const string = '15kj';
console.log(parseInt(string));
console.log(num.toString());
console.log(typeof num.toString());
