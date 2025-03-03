// localStorage.setItem('theme', 'light');

// const setting = {
//     theme: 'dark',
//     isAuthentication: true,
//     options: [1, 2, 3, 4],
// }

// localStorage.setItem("setting", JSON.stringify(setting));
// const theme = localStorage.getItem('theme');
// const parsed = JSON.parse(theme);
// console.log(parsed);

// localStorage.removeItem('theme');

// localStorage.clear();

//
// let users = JSON.parse(localStorage.getItem("users")) || [];
// let editingIndex = null;

// function updateTable() {
//   const tableBody = document.getElementById("user-table");
//   tableBody.innerHTML = "";
//   users.forEach((user, index) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${user.firstName}</td>
//         <td>${user.lastName}</td>
//         <td>${user.email}</td>
//         <td>${user.phone}</td>
//         <td>
//             <button class="edit" data-index="${index}">Edit</button>
//             <button class="delete" data-index="${index}">Delete</button>
//         </td>`;
//     tableBody.appendChild(row);
//   });
// }

// document.getElementById("add-user").addEventListener("click", () => {
//   const firstName = document.getElementById("first-name").value;
//   const lastName = document.getElementById("last-name").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;

//   if (firstName && lastName && email && phone) {
//     if (editingIndex !== null) {
//       users[editingIndex] = { firstName, lastName, email, phone };
//       editingIndex = null;
//       document.getElementById("add-user").textContent = "Add!";
//     } else {
//       users.push({ firstName, lastName, email, phone });
//     }

//     localStorage.setItem("users", JSON.stringify(users));
//     updateTable();

//     document.getElementById("first-name").value = "";
//     document.getElementById("last-name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//   } else {
//     alert("Будь ласка, заповніть всі поля");
//   }
// });

// document.getElementById("user-table").addEventListener("click", (event) => {
//   const target = event.target;
//   const index = target.dataset.index;

//   if (target.classList.contains("edit")) {
//     const user = users[index];
//     document.getElementById("first-name").value = user.firstName;
//     document.getElementById("last-name").value = user.lastName;
//     document.getElementById("email").value = user.email;
//     document.getElementById("phone").value = user.phone;

//     editingIndex = index;
//     document.getElementById("add-user").textContent = "Edit";
//   }

//   if (target.classList.contains("delete")) {
//     users.splice(index, 1);
//     localStorage.setItem("users", JSON.stringify(users));
//     updateTable();
//   }
// });

// updateTable();

// HW
document.addEventListener("DOMContentLoaded", () => {
  const bookmarkInput = document.getElementById("bookmarkInput");
  const addBookmarkBtn = document.getElementById("addBookmarkBtn");
  const bookmarkList = document.getElementById("bookmarkList");

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  function renderBookmarks() {
    bookmarkList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
            <button class="edit" data-index = "${index}">✎</button>
            <button class="delete" data-index="${index}">X</button>
            `;
        bookmarkList.appendChild(li);
    });
    }
    
    addBookmarkBtn.addEventListener('click', () => {
        const url = bookmarkInput.value.trim();
        if (url) {
            bookmarks.push({ url });
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            bookmarkInput.value = '';
            renderBookmarks();
        }
    });

    bookmarkList.addEventListener('click', (event) => {
        const index = event.target.dataset.index;
        if (event.target.classList.contains('delete')) {
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            renderBookmarks();
        }
        if (event.target.classList.contains('edit')) {
            const newUrl = prompt('Введіть новий URL', bookmarks[index].url);
            if (newUrl) {
                bookmarks[index].url = newUrl;
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                renderBookmarks();
            }
        }
    });
    
    renderBookmarks();
});
