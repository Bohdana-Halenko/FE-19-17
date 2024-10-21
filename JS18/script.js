// const title = document.createElement('h1');
// console.log(title);

// title.textContent = 'Hello!';
// console.log(title);

// const image = document.createElement('img');
// image.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2024%2F02%2F29%2Fscience%2Fcats-animal-behavior-meow.html&psig=AOvVaw1VNQ7E3JRm6_00nWkOlqIA&ust=1729611377545000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKik58_mn4kDFQAAAAAdAAAAABAE'
// image.alt = 'Cat';
// console.log(image);

// const text = document.createElement('p');
// text.textContent = 'GoITeens'

// document.body.appendChild(title);
// document.body.appendChild(image);
// // document.body.append(text);
// // document.body.prepend(text);
// // document.body.before(text);
// image.remove();

// const header = '<h1>Hello!</h1>';
// const image = '<img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg" alt="Cat">';

// const contentDiv = document.getElementById('content');
// contentDiv.innerHTML = header + image;

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);