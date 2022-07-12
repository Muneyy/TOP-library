const form  = document.getElementById('add-book');
let firstIteration = 0;


let myLibrary =[];

function Book(name, author, pageNumber) {
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.logInfo = function () {
        console.log(this.name);
        console.log(this.author);
        console.log(this.pageNumber);
    }
}

function addBooktoLibrary(nameInput, authorInput, pageInput) {
    const newBook = new Book(nameInput, authorInput, pageInput);
    myLibrary.push(newBook);
    console.log(newBook.name);
    const div = document.createElement("div");
    const bookName = document.createElement("h1");
    const bookAuthor = document.createElement("h2");
    const bookPage = document.createElement("p");
    bookName.innerText = newBook.name;
    bookAuthor.textContent = newBook.author;
    bookPage.textContent = newBook.pageNumber;
    div.appendChild(bookName);
    div.appendChild(bookAuthor);
    div.appendChild(bookPage);
    div.classList.add("card");
    document.querySelector(".display").appendChild(div);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'];
    const author = form.elements['author'];
    const pageNumber = form.elements['page-number'];
    if (firstIteration == 0) {
        let placeHolder = document.querySelector(".card");
        document.querySelector(".display").removeChild(placeHolder);
        firstIteration = 1;
    }
    addBooktoLibrary(name.value, author.value, pageNumber.value);
    console.log(myLibrary);
    name.value = "";
    author.value = "";
    pageNumber.value = "";
});