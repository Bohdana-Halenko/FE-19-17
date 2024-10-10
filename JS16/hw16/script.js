// Task 3
class Storage{
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        return this.items.push(item);
    }
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]



// Task 4
class StringBuilder{
    constructor(str) {
        this._value = str;
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value += str;
    }
    prepend(str) {
        this._value = str + this._value;
    }
    pad(str) {
        this._value = str + this._value + str;
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


// Task 1
// class Account{
//     constructor({ email, login }) {
//         this.email = email;
//         this.login = login;
//     }
//     getInfo() {
//         return `Login: ${this.login}, Email: ${this.email}`;
//     }
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// Task 2
class User{
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}



const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers