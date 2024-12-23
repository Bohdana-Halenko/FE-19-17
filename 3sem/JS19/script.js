// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//     console.log("Подія клік");
// }
// );

// button.removeEventListener("click", () => {
//     console.log('Видалення слухача');
// })


// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//     alert('Click event listener');
// };

// addBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//     btn.removeEventListener("click", handleClick);
// })


// const btn = document.querySelector('#btn');

// const handleClick = event => {
//     console.log("event: ", event);

//     console.log("event type: ", event.type);

//     console.log("this: ", this);

//     console.log("target: ", event.target);
// };

// btn.addEventListener('click', handleClick);

// event.preventDefault();


const form = document.querySelector(".form");
const loginInput = form.querySelector("input[type='text']");
const passwordInput = form.querySelector("input[type='password']");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    if (login === '' || password === '') {
        return alert("Введіть правильні дані");
    }

    form.reset();

    alert(`Дякуємо за реєстрацію!`)
}


// document.activeElement