// const a = function (message) {
//     console.log(message);
// }
// //...
// const b = function (callback) {
//     const string = 'Hello!';
//     callback(string);
// }

// b(a);

// for (let i = 0; i <= 10; i += 1){
//     console.log(i);
// }

// const repeat = function (n) {
//     for (let i = 0; i <= n; i += 1){
//         console.log(i);
//     }
// }
// repeat(10);

// const filter = function (array, test) {
//     const newFilter = [];
//     for (const element of array) {
//        test(element)
//     }
//     return newFilter;
// }


// const filter = function (array, test) {
//     const newFilter = [];
//     for (const element of array) {
//         const passed = test(element);
//         if (passed){
//             newFilter.push(element);
//         }
//     }
//     return newFilter;
// }

// const fruits = [
//     { name: 'kiwi', quantity: 300, isFresh: true },
//     { name: 'orange', quantity: 100, isFresh: false },
//     { name: 'apples', quantity: 88, isFresh: true },
// ]

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);

// console.log(value);
// value = 5;

// if (true) {
//     console.log(value);
//     var value = 10;
//     console.log(value);
// }

// value = 15;
// console.log(value);

// console.log(value); //error
// const value = 5;
// console.log(value); //5

// if (true) {
//     console.log(value); // error
//     const value = 10;
//     console.log(value); //10
// }

// console.log(value); //5


// const add = function (a, b, c) {
//     return a + b + c;
// }

// const add = (a, b, c) =>  a + b + c ;

// const a = x => {
//     return x * 2;
// }

// const b = () => {
//     console.log('Hello!')
// }



// const add = (...args) => {
//     console.log(args);
// }

// add(2, 17, 15, 6); //[2, 17, 15, 6]


// 1
const applyCallbackToEachElement = (arr, callback) => { 
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}  
const arr = [1, 2, 3, 4, 5];  
const squareCallback = (number) => Math.pow(number, 2);  
const result = applyCallbackToEachElement(arr, squareCallback);  
console.log(result); // [1, 4, 9, 16, 25]

// 2
const calculateDiscountedPrice = (price, discount, callback) => {
    const result = price - (price * discount / 100);
    callback(result);
 }; 
 
const showDiscountedPrice = (result) => console.log(`Discounted price: ${result}`);

calculateDiscountedPrice(300, 10, showDiscountedPrice); // Discounted price: 90