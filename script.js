const myLibrary = [];
const catalogue = document.querySelector(".catalogue");
const form = document.querySelector("form");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status ? "Read" : "Not read";
  this.id = crypto.randomUUID();
}

function addBook(book) {
  myLibrary.push(book);
  renderBooks();
}

function deleteBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderBooks();
  }
}

function renderBooks() {
  // Keep the header row
  const headers = catalogue.querySelectorAll("h3");
  catalogue.innerHTML = "";
  headers.forEach((header) => catalogue.appendChild(header));

  // Add books
  myLibrary.forEach((book) => {
    const titleElement = document.createElement("p");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = book.pages;

    const statusElement = document.createElement("p");
    statusElement.textContent = book.status;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteBook(book.id));

    catalogue.appendChild(titleElement);
    catalogue.appendChild(authorElement);
    catalogue.appendChild(pagesElement);
    catalogue.appendChild(statusElement);
    catalogue.appendChild(deleteButton);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").checked;

  if (!title || !author || !pages) {
    alert("Please fill in all fields");
    return;
  }

  const newBook = new Book(title, author, pages, status);
  addBook(newBook);
  form.reset();
});

let User = class {
  sayHi() {
    alert("submit");
  }
};

console.log(new User().sayHi());
