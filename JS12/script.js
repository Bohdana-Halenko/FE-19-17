// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 150,
// }
// for (const key in hotel) {
//     console.log('Key:', key);
// }

// for (const key in hotel) {
//     console.log('value:', hotel[key]);
// }

// const keys = Object.keys(hotel);
// console.log(keys); //['name', 'stars', 'capacity']

// const values = Object.values(hotel);
// console.log(values); // ['Hilton', 5, 150]

// const entries = Object.entries(hotel);
// console.log(entries); //[[], [], []]

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 150,
// }

// const keys = Object.keys(hotel);  //['name', 'stars', 'capacity']
// for (const key of keys) {
//     console.log('Value:', hotel[key]);
// } // Value: Hilton

// const entries = Object.entries(hotel);
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }



// const goods = {
//     orange: 5,
//     kiwi: 12,
//     apples: 4,
//     banana: 2,
// }
// const values = Object.values(goods);

// let total = 0;
// for (const value of values) {
//     total += value;
// }
// console.log(total); //23

// const temp = [32, 28, 35, 29, 32, 30, 27, 35];
// const min = Math.min(...temp);
// console.log(min);  // 27

// const names = ['Bob', 'Nick', 'Alex'];
// const copyNames = [...names];
// console.log(names);
// console.log(copyNames);
// console.log(names === copyNames);

// const names = ['Bob', 'Nick', 'Alex'];
// const sliceNames = names.slice();
// console.log(names);
// console.log(sliceNames);

// const names = ['Bob', 'Nick', 'Alex'];
// const completeNames = [...names, 'Piter'];
// console.log(completeNames); //['Bob', 'Nick', 'Alex', 'Piter']
// const names = ['Bob', 'Nick', 'Alex'];
// const newNames = ['Anna', 'Poll', 'Nika'];
// const copy = [...names, ...newNames];
// console.log(copy); //['Bob', 'Nick', 'Alex', 'Anna', 'Poll', 'Nika']


// const names = ['Bob', 'Nick', 'Alex', 'Anna', 'Poll', 'Nika'];
// const newArr = [...names.slice(0, 4), ...names.slice(5)];
// console.log(newArr); //['Bob', 'Nick', 'Alex', 'Anna', 'Nika']




// const a = { x: 3, y: 5 };
// const b = { x: 2, c: 10 };
// const c = Object.assign({}, a, b);
// console.log(c); //{x: 2, y: 5, c: 10}

// const d = { ...a, ...b };

// const t = {
//     x: 5, j: 2, ...a, s: 6, ...b,
// };
// console.log(t); //{x: 2, j: 2, y: 5, s: 6, c: 10}


// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// a = 10;
// console.log(a); // 10
// console.log(b); // 5

// const a = ['Bob'];
// const b = a;
// console.log(a); //['Bob']
// console.log(b); //['Bob']
// a.push('Poll');
// console.log(a); //['Bob', 'Poll']
// console.log(b); // ['Bob', 'Poll']
// b.push('Nick');
// console.log(a); // ['Bob', 'Poll', 'Nick']
// console.log(b); // ['Bob', 'Poll', 'Nick']











// HW 12
// 1
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// 2

const countProps = function (obj) {
    return Object.keys(obj).length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// 3
const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTask = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTask) {
            maxTask = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee + ':' + maxTask;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux



// 4
const countTotalSalary = function (employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    } 
    return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400




// 5
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const item of arr) {
//         if (item.hasOwnProperty(prop)) {
//             values.push(item[prop]);
//         }
//     }
//     return values;
// };


// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []



// 6
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    let totalPrice = 0;
    for (let i = 0; i < allProdcuts.length; i += 1){
        if (allProdcuts[i].name === productName) {
            totalPrice += allProdcuts[i].price * allProdcuts[i].quantity;
        }
    }
    return totalPrice;
};


console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроїд')); // 2800