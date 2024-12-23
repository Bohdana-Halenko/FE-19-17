// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
// };

// console.log(hotel);
// console.log(hotel.name);
// console.log(hotel['name']);

// hotel.name = 'Hilton Resort';
// console.log(hotel.name);
// console.log(hotel);

// hotel.address = 'NY';
// console.log(hotel);

// delete hotel.stars;
// delete hotel['stars'];
// console.log(hotel);

// console.log(hotel.pool);


// let name = "Hilton Resort";
// let stars = 4;

// const hotel5 = {
//     name: name,
//     stars: stars,
//     capasity: 150,
// }
// console.log(hotel5); //{name: 'Hilton Resort', stars: 4, capasity: 150}


// const hotel6 = {
//     name,
//     stars,
//     capasity: 200,
// }
// console.log(hotel6); //{name: 'Hilton Resort', stars: 4, capasity: 200}


// const key = 'user';
// const obj = {};
// obj[key] = 'Bob';
// console.log(obj); //{user: 'Bob'}

// const key = 'user';
// const getKey = function () {
//     return 'age';
// }

// const obj = {
//     [key]: 'Bob',
//     [getKey()]: 20,
// }
// console.log(obj); //{user: 'Bob', age: 20}


// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
//     getMassege5: function () {
//         console.log("Hello");
//     },

//     getMassege6() {
//         console.log("Hello!")
//     }
// };
// hotel.getMassege5(); //Hello
// hotel.getMassege6(); //Hello!


// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
//     showName() {
//         console.log(this.name);
//     }
// };
