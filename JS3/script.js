const message = "hello" + " " + "JavaScript";
console.log(message); // hello JavaScript


const result = 6 + '6' + 1;
console.log(result); // 661


const number = 5 + 5 + '5';
console.log(number); // 105
console.log(typeof number); 


const a = "My name is Dana ";
console.log(a.length); //15


const b = "Welcome to New York";
console.log(b.toLowerCase()); //welcome to new york
console.log(b.toUpperCase()); //WELCOME TO NEW YORK
console.log(b); //Welcome to New York

console.log(b.indexOf('to')); //8
console.log(b.indexOf('GoITeens'));

console.log(b.includes('new')); //false
console.log(b.includes('New')); //true

console.log(b.startsWith('Wel')); //true
console.log(b.endsWith('.')); //false

console.log(b.length); //19
console.log(b.padEnd(25, '!')); //Welcome to New York!!!!!!
console.log(b.padStart(21, '@')); //@@Welcome to New York



const name = 'Nick';
const age = 15;
const mood = 'happy';

const mes = 'My name is ' + name + ', I`m ' + age + ' years old and ' + mood + '.'
console.log(mes); //My name is Nick, I`m 15 years old and happy.

const sameMes = `My name is ${name}, I'm ${age} years old and ${mood}.`;
console.log(sameMes); //My name is Nick, I'm 15 years old and happy.


console.log(`Сума покупки: ${121 + 58}`); //Сума покупки: 179