function bookData(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        if(haveRead)
            return title + " by " + author + "," + pages + ", have read";
        else
            return title + " by " + author + "," + pages + ", not read yet";
    }
}

let myLibrary = [];
let bookCards = [];

myLibrary.push(new bookData("Harry Potter and The Deathly Hallows", "J.K Rowling", 900, true));
myLibrary.push(new bookData("Harry Potter and The Prisoner of Azkaban", "J.K Rowling", 900, true));
myLibrary.push(new bookData("Harry Potter and The Order of the Pheonix", "J.K Rowling", 900, false));
myLibrary.push(new bookData("Harry Potter and The Chamber of Secrets", "J.K Rowling", 900, true));


const booksSection = document.querySelector(".booksSection");
myLibrary.forEach(addBook);


function addBook(bookData) {

    const bookCard = document.createElement("div");
    bookCard.className = "bookCard"
    booksSection.appendChild(bookCard);
    bookCards.push(bookCard);
    
    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const toggle = document.createElement("img");
    toggle.src = "images/toggle.png";
    toggle.className = "toggle";
    buttons.appendChild(toggle);

    const remove = document.createElement("img");
    remove.src = "images/remove.png";
    remove.className = "remove";
    buttons.appendChild(remove);
    
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const haveRead = document.createElement("h3");

    title.innerHTML = bookData.title;
    author.innerHTML = "by " + bookData.author;
    pages.innerHTML = bookData.pages + " pages";
    if(bookData.haveRead) {
        haveRead.innerHTML = "Have read";
        haveRead.style.color = "yellowgreen";
    }else{
        haveRead.innerHTML = "Haven't read";
        haveRead.style.color = "tomato";
    }

    bookCard.appendChild(buttons);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(haveRead);

}






