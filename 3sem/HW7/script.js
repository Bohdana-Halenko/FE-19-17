// 1
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

// 2
const strings = ['one', 'two', 'three'];
strings[3] = 'four';
console.log(strings);

// 3
const sum = [15, 31, 24, 12, 5, 17];
let total = 0;
for (let i = 0; i < sum.length; i++){
    total += sum[i]
}
console.log(total);

// 4
const arr = [13, 15, 7, 9, 54];
for (const num of arr) {
    console.log(num);
}

// 5
const newArr = ['hello', 'sun', 'goiteens', 'arr', 'terminal'];
for (let i = 0; i < newArr.length; i++){
    if (newArr[i].length < 5) {
        continue;
    }
    console.log(newArr[i]);
}

// 6
const newNumbers = [13, 42, 25, 67, 74, 12, 5, 33, 65, 97];
let max = newNumbers[0];
for (let i = 0; i < newNumbers.length; i++){
    if (newNumbers[i] > max) {
        max = newNumbers[i];
    }
}
console.log(max);

// 7
const numbersNew = [13, 42, 25, 67, 74, 12, 5, 33, 65, 97];
for (let i = 0; i < numbersNew.length; i++){
    if (numbersNew[i] % 2 === 0) {
        console.log(numbersNew[i]);
    }
}


// HW6
// 1
let number = 1;
while (number < 11) {
    console.log(number);
    number += 1;
}

// 2
for (let i = 2; i <= 20; i += 1){
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// 3
for (let i = 1; i <= 10; i++){
    console.log(`7 * ${i} = ${7 * i}`);

}

// 6
const n = 4;
for (let i = 0; i < n; i++){
    if (i >= n) {
        break;
    }
    console.log(n);
}

// 7
let a = 1;
while (a <= 20) {
    if (a % 3 === 0) {
        a += 1;
        continue;
    }
    console.log(a);
    a++;
}