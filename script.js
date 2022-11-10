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


myLibrary.push(new bookData("Harry Potter and The Deathly Hallows", "J.K Rowling", 900, true));
myLibrary.push(new bookData("Harry Potter and The Prisoner of Azkaban", "J.K Rowling", 900, true));
myLibrary.push(new bookData("Harry Potter and The Order of the Pheonix", "J.K Rowling", 900, true));
myLibrary.push(new bookData("Harry Potter and The Chamber of Secrets", "J.K Rowling", 900, true));




let bookCards = [];
const booksSection = document.querySelector(".booksSection");
myLibrary.forEach(bookData => {

    const bookCard = document.createElement("div");
    bookCard.className = "bookCard"
    booksSection.appendChild(bookCard);
    bookCards.push(bookCard);
    
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const haveRead = document.createElement("h3");

    title.innerHTML = bookData.title;
    author.innerHTML = bookData.author;
    pages.innerHTML = bookData.pages + " pages";
    if(bookData.haveRead)
        haveRead.innerHTML = "Have read";
    else
    haveRead.innerHTML = "Haven't read";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(haveRead);

});

