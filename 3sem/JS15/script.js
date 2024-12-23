// // reduce
// const numbers = [15, 60, 5, 31, 87];
// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum); //198


// const tweets = [
//     { id: '00', likes: 100, tags: ['js', 'react'] },
//     { id: '01', likes: 25, tags: ['html', 'css'] },
//     { id: '02', likes: 88, tags: ['js', 'react', 'nodejs', 'vue'] },
//     { id: '03', likes: 211, tags: ['sass', 'css'] },
//     { id: '04', likes: 157, tags: ['html', 'css', 'react'] },
// ];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //581


// const sumLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(sumLikes(tweets)); //581

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// console.log(tags); // ['js', 'react', 'html', 'css', 'js', 'react', 'nodejs', 'vue', 'sass', 'css', 'html', 'css', 'react']

// const newTags = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);


// const tweets = [
//     { id: '00', likes: 100, tags: ['js', 'react'] },
//     { id: '01', likes: 25, tags: ['html', 'css'] },
//     { id: '02', likes: 88, tags: ['js', 'react', 'nodejs', 'vue'] },
//     { id: '03', likes: 211, tags: ['sass', 'css'] },
//     { id: '04', likes: 157, tags: ['html', 'css', 'react'] },
// ];
// const newTags = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// const tags = newTags(tweets);
// const getTags = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0
//     }
//     acc[tag] += 1;

//     return acc;
// }

// const countTags = tags => tags.reduce(getTags, {});
// const tagCount = countTags(tags);
// console.log(tagCount);




// sort
// const numbers = [5, 4, 1, 9, 2, 7];
// console.log(numbers.sort()); //[1, 2, 4, 5, 7, 9]
// const letters = ['D', 'r', 'b', 'A', 'o', 'a'];
// console.log(letters.sort()); //['A', 'D', 'a', 'b', 'o', 'r']

// const users = ['Nick', 'Bob', 'Jhon', "Anna"];
// console.log(users.sort()); //['Anna', 'Bob', 'Jhon', 'Nick']


// const users = [
//     { name: 'Bob', daysActive: 14 },
//     { name: 'July', daysActive: 3 },
//     { name: 'Nick', daysActive: 30 },
//     { name: 'Jhon', daysActive: 1 },
// ]
// const sortByDays = (a, b) => b.daysActive - a.daysActive;
// console.log(users.sort(sortByDays));

// const goods = ['orange', 'apple', 'kiwi', 'banana'];
// goods.sort(function (a, b) {
//     return b.localeCompare(a)
// })
// console.log(goods);



// const numbers = [1, 5, 2, 3, 4, 7, 6, 9];
// const even = numbers.filter(x => x % 2 === 0);
// const doubled = even.map(x => x * 2);
// const reversed = doubled.reverse();
// console.log(reversed); // [12, 8, 4]



const numbers = [1, 5, 2, 3, 4, 7, 6, 9];
const result = numbers
    .filter(x => x % 2 === 0)
    .map(y => y * 2)
    .reverse();
console.log(result);

