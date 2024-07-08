// const message = "hello" + " " + "JavaScript";
// console.log(message); // hello JavaScript


// const result = 6 + '6' + 1;
// console.log(result); // 661


// const number = 5 + 5 + '5';
// console.log(number); // 105
// console.log(typeof number);


// const a = "My name is Dana ";
// console.log(a.length); //15


// const b = "Welcome to New York";
// console.log(b.toLowerCase()); //welcome to new york
// console.log(b.toUpperCase()); //WELCOME TO NEW YORK
// console.log(b); //Welcome to New York

// console.log(b.indexOf('to')); //8
// console.log(b.indexOf('GoITeens'));

// console.log(b.includes('new')); //false
// console.log(b.includes('New')); //true

// console.log(b.startsWith('Wel')); //true
// console.log(b.endsWith('.')); //false

// console.log(b.length); //19
// console.log(b.padEnd(25, '!')); //Welcome to New York!!!!!!
// console.log(b.padStart(21, '@')); //@@Welcome to New York



// const name = 'Nick';
// const age = 15;
// const mood = 'happy';

// const mes = 'My name is ' + name + ', I`m ' + age + ' years old and ' + mood + '.'
// console.log(mes); //My name is Nick, I`m 15 years old and happy.

// const sameMes = `My name is ${name}, I'm ${age} years old and ${mood}.`;
// console.log(sameMes); //My name is Nick, I'm 15 years old and happy.


// console.log(`Сума покупки: ${121 + 58}`); //Сума покупки: 179










// &&
// const num = 25;
// const result = num > 15 && num < 35;
// console.log(result); //true


// const number = 40;
// const res = number > 15 && number < 35;
// console.log(res); //false


// ||
// const num = 40;
// const result = num < 10 || num > 30;
// console.log(result); // true

// const num = 20;
// const result = num < 10 || num > 30;
// console.log(result); // false

// !
// console.log(true); //true
// console.log(!true); //false
// console.log(!1); //false
// console.log(!0); //true


// let cost = 0;
// const sub = 'pro';

// if (sub === 'premium') {
//     cost = 100;
// }
// console.log(cost); //0

// let cost;
// const sub = 'free';
// if (sub === 'free') {
//     cost = 100;
// } else {
//     cost = 0;
// }

// console.log(cost); //100



// let cost;
// const sub = 'premium';

// if (sub === 'free') {
//     cost = 0;
// } else if (sub === 'pro') {
//     cost = 100;
// } else if (sub === 'premium') {
//     cost = 250;
// } else {
//     console.log('Ви не підписані');
// }


// let type;
// const age = 16;

// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }
// console.log(type); //child;

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); //adult

// const num1 = 5;
// const num2 = 10;
// let bigger;

// if (num1 > num2) {
//     bigger = num1;
// } else {
//     bigger = num2;
// }
// console.log(bigger);
// const bigger = num1 > num2 ? num1 : num2;
// console.log(bigger); //10