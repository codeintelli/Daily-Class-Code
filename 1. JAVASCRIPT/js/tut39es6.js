console.log("this is es6 version");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  add(book) {
    console.log("Adding To UI");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;

    tableBody.innerHTML += uiString;
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
