const form  = document.getElementById('add-book');
let firstIteration = 0;


let myLibrary =[];


// constructor function for individual books
function Book(name, author, pageNumber, isRead) {
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead
    this.logInfo = function () {
        console.log(this.name);
        console.log(this.author);
        console.log(this.pageNumber);
    }
}

// After pushing the new book into the myLibrary array, 
let index = 0;
function displayBook(book) {
    console.log("Does this get called?");
    if (book.isDisplayed != 1) {
        const div = document.createElement("div");
        const bookName = document.createElement("h1");
        const bookAuthor = document.createElement("h2");
        const bookPage = document.createElement("p");
        const removeButton = document.createElement("button");
        const readButton = document.createElement("button");
        bookName.innerText = book.name;
        bookAuthor.textContent = book.author;
        bookPage.textContent = book.pageNumber;
        removeButton.classList.add("remove-button");
        readButton.classList.add("read-button");
        div.appendChild(bookName);
        div.appendChild(bookAuthor);
        div.appendChild(bookPage);
        div.appendChild(removeButton);
        div.appendChild(readButton);
        div.classList.add("card");
        div.classList.add(`c${index}`);
        if (book.isRead == 'yes') {
            div.classList.add("read");
        }
        document.querySelector(".display").appendChild(div);
        book.isDisplayed = 1;
        book.libraryIndex = index;


        removeButton.addEventListener('click', () => {
            removeCard(book.libraryIndex);
        });


        readButton.addEventListener('click', () => {
            readBook(book.libraryIndex)
        })



        index += 1;
    }  
}


function addBooktoLibrary(nameInput, authorInput, pageInput, isRead) {
    const newBook = new Book(nameInput, authorInput, pageInput, isRead);
    myLibrary.push(newBook);
    myLibrary.forEach(book => displayBook(book));
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'];
    const author = form.elements['author'];
    const pageNumber = form.elements['page-number'];
    const isRead = form.elements['is-read'];
    console.log(isRead.value);
    if (firstIteration == 0) {
        let placeHolder = document.querySelector(".card");
        document.querySelector(".display").removeChild(placeHolder);
        firstIteration = 1;
    }
    addBooktoLibrary(name.value, author.value, pageNumber.value, isRead.value);
    console.log(myLibrary);
    name.value = "";
    author.value = "";
    pageNumber.value = "";
});


// Arranges the index of books starting from 0 everytime a book is removed.
function removeCard(index) {
    console.log("remove getting called with each click?");
    console.log(index);
    const card = document.querySelector(`.c${index}`);
    console.log(document.querySelector(".display"));
    console.log(card);
    myLibrary.splice(index, 1);
    document.querySelector(".display").removeChild(card);
    let indexPlaceholder = 0;
    myLibrary.forEach(book => () => {
        book.libraryIndex = indexPlaceholder;
        indexPlaceholder += 1;
    });
    index -= 1;
}

function readBook(index) {
    const card = document.querySelector(`.c${index}`);
    card.classList.toggle("read");
}

