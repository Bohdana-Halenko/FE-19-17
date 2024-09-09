// const hotel = {
//     name: 'Hilton',
//     stars: 4,
//     capacity: 150,
// }

// const { name, stars, status } = hotel;
// const { name = 'Hilton Resort', stars = 5, status = 'empty' } = hotel;
// console.log(name, stars, status);

// const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;
// console.log(hotelName, stars, hotelStatus);

// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);

// let option = {
//     size: {
//         height: 150,
//         width: 150
//     },
//     items: ["Kiwi", "Apple"],
// }
// const {
//     size: { height, width },
//     items: [item1, item2],
//     title = "Menu"
// } = option;

// console.log(title);
// console.log(item1);
// console.log(item2);
// console.log(height);
// console.log(width);




// const rgb = [255, 150, 20];
// let red, green, blue;
// [red, green, blue] = rgb;
// const [red, green, blue, alfa = 0.5] = rgb;
// console.log(`red: ${red}, green: ${green}, blue: ${blue}, alfa: ${alfa}`);


// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, colors: ${colors}`);

let arr = ['Bohdana', 'Halenko'];
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

let firstName = arr[0];
let surname = arr[1];
console.log(firstName);
console.log(surname);

