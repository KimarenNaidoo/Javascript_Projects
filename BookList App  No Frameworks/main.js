// Book Class: Represent a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains("delete")){
            // el.parentElement is the <td>
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        // Insert the alert div before the form

        setTimeout(() => document.querySelector(".alert").remove(), 3000);
    }

    static clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks); // this will call the display
// as soon as the page is loaded

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Validation
    if(title === "" || author === "" || isbn === ""){
        UI.showAlert("Please fill in all fields", "danger");
    }else{
        const book = new Book(title, author, isbn);

        // Add book to list
        UI.addBookToList(book);

        // Add Book to Storage
        Store.addBooks(book);

        UI.showAlert("Book Added", "success");

        // Clear all fields
        UI.clearFields();
    }

});

// Event: Remove/Delete a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);

    // Remove from storage - the parentelement is the td and the sibling is the isbn
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert("Booked Removed", "success");
});

// Store Class: Handles storage
class Store {
    // Local storage contains strings
    // In order to make the data (Object) persistant we need to convert it to a string

    static getBooks(){
        let books;
        if(localStorage.getItem("books") === null){ // if there is no item of books in localstorage
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));// converts the strings to objects
        }
        
        return books;
    }

    static addBooks(book){
        const books = Store.getBooks();

        books.push(book);

        // Convert the Object back to string
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1); // will remove the book from the array
            }
        });

        localStorage.setItem("books", JSON.stringify(books));

    }
}