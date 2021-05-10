console.log("library management by itvmh");
/* 
todos
1. store all the data to the local storage
2. give another column as an option to delete the book
3. add a scroll bar to the view
*/
// constructor of a book
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constructor
function Display() {}

// add method to display prototype
Display.prototype.add = function (book) {
  console.log("Adding To UI");
  let tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;

  tableBody.innerHTML += uiString;
};

Display.prototype.clear = function () {
  let libraryForms = document.getElementById("libraryForm");
  libraryForms.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong>${displayMessage}.
  <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
};

// adding submit evenet listeners
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submite the library form");

  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  //   code by rinkal
  let type = document.querySelector("input[name = type]:checked").value;

  //   let fiction = document.getElementById("fiction");
  //   let cooking = document.getElementById("cooking");
  //   let programming = document.getElementById("programming");

  //   if (fiction.checked) {
  //     type = fiction.value;
  //   } else if (cooking.checked) {
  //     type = cooking.value;
  //   } else if (programming.checked) {
  //     type = programming.value;
  //   }
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
