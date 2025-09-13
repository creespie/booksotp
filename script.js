const myLibrary = [];

function Book(title, author, pages, read){

    if (!new.target) {
        throw Error('Must use the new operator to call the constructor');
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
       info = title + ", by " + author + ", " + pages + " pages, " + (read ? "already read, " : "not read yet, ") + id;
       return info;
    };
}

function addBook(){
    
}


var theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 0);

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
