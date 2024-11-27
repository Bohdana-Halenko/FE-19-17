// 5 hw
// 1
function checkOptions() {
    const select = document.getElementById('drinks');
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "coffee") {
        alert("Ви обрали каву");
    } else if (selectedValue === 'tea') {
        alert("Ви обрали чай")
    } else if (selectedValue === 'juice') {
        alert("Ви обрали сік")
    }
};

// 2
function checkDay() {
    const fieldDay = document.getElementById("text-day").value;
    switch (fieldDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thurthday":
        case "Friday":
            alert("Робочий день");
            break;
        case "Saturday":
        case "Sunday":
            alert("Вихідний день");
            break;
        default:
            alert("Неправильно введена інформація");
    }
}

// 3
function checkMonth() {
    const fieldMonth = document.getElementById('month').value;
    if ((fieldMonth < 3 && fieldMonth > 0) || fieldMonth === 12) {
        alert(" Зима");
    } else if (fieldMonth > 2 && fieldMonth < 6) {
        alert("Весна");
    } else if (fieldMonth > 5 && fieldMonth < 9) {
        alert("Літо");
    } else if (fieldMonth > 8 && fieldMonth < 12) {
        alert("Осінь");
    } else {
        alert("Error");
    }
}

// 4
function checkDaysInMonth() {
    const fieldMonthDays = document.getElementById('months-days').value;
    if (fieldMonthDays === 2) {
        alert("28 or 29");
    } else if (
        fieldMonthDays === 1 ||
        fieldMonthDays === 3 ||
        fieldMonthDays === 5 ||
        fieldMonthDays === 7 ||
        fieldMonthDays === 8 ||
        fieldMonthDays === 10 ||
        fieldMonthDays === 12
    ) {
        alert("31")
    } else {
        alert("30")
    }
}


// 5
function checkColor() {
    const fieldColor = document.getElementById("color").value;
    switch (fieldColor) {
        case 'red':
            alert('stop');
            break;
        case 'yellow':
            alert('weit');
            break;
        case 'green':
            alert('go');
            break;
        default:
            alert('Введіть один з кольорів світофора');
    }
}



// 6hw
// 1
// let number = 1;
// while (number < 11) {
//     console.log(number);
//     number += 1;
// }

// // 2
// for (let i = 2; i <= 20; i += 1){
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// // 3
// for (let i = 1; i <= 10; i += 1){
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// // 4
// const n = 10;
// for (let i = 0; i < n; i += 1){
//     if (i >= n) {
//         break;
//     }
//     console.log(i);
// }

// 5
// let a = 1;
// while (a <= 20) {
//     if (a % 3 === 0) {
//         a += 1;
//         continue;
//     }
//     console.log(a);
//     a += 1;
// }


// hw7
// 1
// const arr1 = [1, 2, 3];
// arr1[1] = 10;
// console.log(arr1); //[1, 10, 3]

// // 2
// const arr2 = ['one', 'two', 'three'];
// arr2[arr2.length] = 'four';
// console.log(arr2); // ['one', 'two', 'three', 'four']

// // 3
// const arr3 = [5, 4, 8, 9, 2, 6, 7];
// let total = 0;
// for (let i = 0; i < arr3.length; i++){
//     total += arr3[i];
// }
// console.log(total); //41

// // 4
// const arr4 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr4.length; i++){
//     console.log(arr4[i]);
// }

// // 5
// const arr5 = ['hello', 'summer', 'school', 'hi', 'GoITeens'];
// for (let i = 0; i < arr5.length; i++){
//     if (arr5[i].length < 5) {
//         continue;
//     }
//     console.log(arr5[i]);
// }

// // 6
// const arr6 = [52, 7, 88, 71, 23, 12, 15, 42, 111, 25];
// let max = arr6[0];
// for (let i = 1; i < arr6.length; i++){
//     if (arr6[i] > max) {
//         max = arr6[i];
//     }
// }
// console.log(max);


// // 7
// const arr7 = [52, 7, 88, 71, 23, 12, 15, 42, 111, 25];
// for (let i = 0; i < arr7.length; i++){
//     if (arr7[i] % 2 === 0) {
//         console.log(arr7[i]);
//     }
// }



// hw8
// 1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];   
let string = '';  

for (let i = 0; i < friends.length; i++){
    string += friends[i];
    if (i < friends.length - 1) {
        string += ", "
    }
}
console.log(string); //Mango, Poly, Kiwi, Ajax

string = friends.join(", ");
console.log(string); 

// 2
const cards = [   
    'Карточка-1',   
    'Карточка-2',   
    'Карточка-3',   
    'Карточка-4',   
    'Карточка-5',   
];  
  
const cardRemove = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards); //['Карточка-1', 'Карточка-2', 'Карточка-4', 'Карточка-5']
const cardAdd = cards.splice(cards.length, 0, "Карточка-6");
console.log(cards); // ['Карточка-1', 'Карточка-2', 'Карточка-4', 'Карточка-5', 'Карточка-6']
const cardUpdate = cards.splice(cards.indexOf("Карточка-4"), 1, "Card-4");
console.log(cards); //['Карточка-1', 'Карточка-2', 'Card-4', 'Карточка-5', 'Карточка-6']