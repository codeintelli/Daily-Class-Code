console.log("library management task");
/* 
todos
1. store all the data to the local storage
2. give another column as an option to delete the book
3. add a scroll bar to the view
*/

// add scorll bar into the table
let tableBody = document.getElementById("table");
tableBody.style.overflow = "auto";
tableBody.style.height = "350px";

showBooks();
function showBooks() {
  let getBook = localStorage.getItem("books");
  let bookObj;
  if (getBook == null) {
    bookObj = [];
  } else {
    bookObj = JSON.parse(getBook);
  }
  let addRow = "";
  bookObj.forEach(function (e, index) {
    addRow += `<tr>
        <td>${e.name}</td>
        <td>${e.author}</td>
        <td>${e.type}</td>
        <td><button id= "${index}" onClick ="deleteBook(this.id)" class="btn btn-danger">Delete Book</button></td>
        </tr>`;
  });
  let tableBodys = document.getElementById("tableBody");
  if (bookObj.length != 0) {
    tableBodys.innerHTML = addRow;
  } else {
    tableBodys.innerHTML = "";
  }
}

function deleteBook(index) {
  let getBook = localStorage.getItem("books");
  let bookObj;
  if (getBook == null) {
    bookObj = [];
  } else {
    bookObj = JSON.parse(getBook);
  }
  let bookName = bookObj[index].name;
  bookObj.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(bookObj));
  let message = document.getElementById("message");
  let boldText = "Deleted";
  message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${boldText}   </strong>${bookName}.
            <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
  showBooks();
}
// create a book constructor

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    let getBook = localStorage.getItem("books");
    let bookObj;
    if (getBook == null) {
      bookObj = [];
    } else {
      bookObj = JSON.parse(getBook);
    }
    bookObj.push(book);
    localStorage.setItem("books", JSON.stringify(bookObj));
    showBooks();
  }
  clear() {
    let libraryForms = document.getElementById("libraryForm");
    libraryForms.reset();
  }

  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong>${displayMessage}.
  <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 5000);
  }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  //   code by rinkal
  let type = document.querySelector("input[name = type]:checked").value;
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your Book Has been successfully added");
  } else {
    display.show("danger", "Your Book is not added please contact to admin");
  }
}
