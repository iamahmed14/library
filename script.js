const booksSection = document.querySelector(".booksSection");
const addBookButton = document.querySelector(".addBook");
const form = document.querySelector(".form");
const fade = document.querySelector(".fade");
const submit = document.querySelector(".submit");

addBookButton.onclick = showHideForm;
fade.onclick = showHideForm;
submit.onclick = addNewBook;

class bookData {
    constructor(title, author, pages, haveRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }
}

function showHideForm() {
    form.classList.toggle("show");
    fade.classList.toggle("show");
}

function removeFunc(index) {
    myLibrary.splice(index, 1);
    sessionStorage.setItem("sessionLibrary", JSON.stringify(myLibrary));
    booksSection.innerHTML = "";
    myLibrary.forEach(addBook);
}

let numberOfRecords = 0;
function addNewBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const haveRead = document.querySelector(".checkbox").checked;

    if(title && author && pages) {
        let sessionLibrary = [];
        if(sessionStorage.getItem("sessionLibrary"))
            sessionLibrary = JSON.parse(sessionStorage.getItem("sessionLibrary"));
        sessionLibrary.push(new bookData(title, author, pages, haveRead));
        sessionStorage.setItem("sessionLibrary", JSON.stringify(sessionLibrary));
        showHideForm();
    }  
}

let myLibrary = JSON.parse(sessionStorage.getItem("sessionLibrary"));
myLibrary.forEach(addBook);
function addBook(bookData, index) {

    function haveReadFunc() {
        if(bookData.haveRead) {
            haveRead.style.color = "yellowgreen";
            return "Have read";
        }else{
            haveRead.style.color = "tomato";
            return "Haven't read";
        }
    }

    const bookCard = document.createElement("div");
    bookCard.className = "bookCard"
    
    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const toggle = document.createElement("img");
    toggle.className = "toggle";
    toggle.src = "images/toggle.png";
    toggle.onclick = () => {
        bookData.haveRead = !bookData.haveRead;
        sessionStorage.setItem("sessionLibrary", JSON.stringify(myLibrary));
        haveRead.innerHTML = haveReadFunc();
    };

    const remove = document.createElement("img");
    remove.className = "remove";
    remove.src = "images/remove.png";
    remove.onclick = () => removeFunc(index);
    
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const haveRead = document.createElement("h3");

    title.innerHTML = bookData.title;
    author.innerHTML = "by " + bookData.author;
    pages.innerHTML = bookData.pages + " pages";
    haveRead.innerHTML = haveReadFunc();
    
    buttons.appendChild(toggle);
    buttons.appendChild(remove);
    bookCard.appendChild(buttons);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(haveRead);
    booksSection.appendChild(bookCard);
}