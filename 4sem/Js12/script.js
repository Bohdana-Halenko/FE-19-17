// const date = new Date();
// console.log(date); //Mon Mar 10 2025 18:32:07 GMT+0200 (за східноєвропейським стандартним часом)

// let newDate = new Date(Date.parse('2025-03-10T15:30:50.000'));
// console.log(newDate); //Tue Mar 11 2025 00:30:50 GMT+0200 (за східноєвропейським стандартним часом)
//1741613450000
//1741645850000

// const date = new Date('March 12, 2025');
// console.log(date); //Wed Mar 12 2025 00:00:00 GMT+0200 (за східноєвропейським стандартним часом)

// const date = new Date(2025, 2, 10, 15, 30, 50, 0);
// console.log(date); //Mon Mar 10 2025 15:30:50 GMT+0200 (за східноєвропейським стандартним часом)
// []

// const date = new Date(1741613450000);
// console.log(date); //Mon Mar 10 2025 15:30:50 GMT+0200 (за східноєвропейським стандартним часом)

// const date = Date.now();
// console.log(date); //1741626033562
//1741626049178

// Get
// const date = new Date();
// console.log(date); //Mon Mar 10 2025 19:05:23 GMT+0200 (за східноєвропейським стандартним часом);
// console.log(date.getDate());//10
// console.log(date.getDay());//1
// console.log(date.getMonth());//2
// console.log(date.getFullYear());//2025
// console.log(date.getHours());//19
// console.log(date.getMinutes());//11
// console.log(date.getSeconds());//33
// console.log(date.getMilliseconds());//399
// console.log(date.getTime());

// console.log(date);

// const date = new Date();
// console.log(`Час в мілісекундах з початку епохи Юнікс: ${date.getTime()}`); //Час в мілісекундах з початку епохи Юнікс: 1741626875594

// let newDate = 'Дата: ';
// newDate += date.getDate() + ' / ';
// newDate += date.getMonth() + 1 + ' / ';
// newDate += date.getFullYear() + '. День тижня: ';
// newDate += date.getDay() - 1 + '. Час: ';
// newDate += date.getHours() + ':';
// newDate += date.getMinutes() + ':';
// newDate += date.getSeconds() + '.'

// console.log(newDate); //Дата: 10 / 3 / 2025. День тижня: 0. Час: 19:21:23.

// const date = new Date(2024, 6, 14, 5, 40, 0, 0);
// console.log(date.getTime()); //1720924800000

// const secondDate = new Date();
// console.log(secondDate.setFullYear(2024, 6, 14)); //1720975517173
// console.log(secondDate.setHours(5, 40, 0, 0)); //1720924800000

// let date = new Date();
// console.log(date); //Mon Mar 10 2025 19:57:38 GMT+0200 (за східноєвропейським стандартним часом)

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };

// const locUk = date.toLocaleString('Uk-uk', options);
// console.log(locUk); //понеділок, 10 березня 2025 р. о 20:02

// const locUs = date.toLocaleString('en-US', options);
// console.log(locUs); //Monday, March 10, 2025 at 08:04 PM


// let date = new Date();
// alert(+date);
// console.log(date.getTime())

// let start = new Date();
// for (let i = 0; i < 1000000; i++){
//     let a = i * i * i;
// }
// let end = new Date();
// console.log(`Цикл зайняв ${end - start} мс`);

// let start = Date.now();
// for (let i = 0; i < 1000000; i++) {
//   let a = i * i * i;
// }
// let end = Date.now();
// console.log(`Цикл зайняв ${end - start} мс`);




// 17.03
// function getSecondsToTomorrow() {
//   const now = new Date();
//   const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   const difMs = tomorrow - now;
   
//   return Math.floor(difMs / 1000);

// }
// console.log(getSecondsToTomorrow());