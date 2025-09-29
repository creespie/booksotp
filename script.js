const myLibrary = [
    { title: "1984", author: "George Orwell", pages: 328, read: true, id: crypto.randomUUID() },
    { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", pages: 1178, read: false, id: crypto.randomUUID()}
];

function Book(title, author, pages, read){
    //check for new
    if (!new.target) {
        throw Error('Must use the new operator to call the constructor');
    }
    //book attributes
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
       info = title + ", by " + author + ", " + pages + " pages, " + (read ? "already read, " : "not read yet, ") + id;
       return info;
    };
    //adds to the array
    myLibrary.push(this)
}

//library container in the html

const library = document.getElementById("library");

function displayBooks(){
    //clear old layout
    let count = document.getElementById("library").children.length;

    while(count > 0){
        const book = document.getElementsByClassName("book")[0];
        library.removeChild(book);
        count--;
    };
    //create space for the book
    for(let item of myLibrary) {
    
    const book = document.createElement("div");
    book.classList.add("book");
    library.appendChild(book);

    const title = document.createElement("div");
    title.classList.add("title");
    book.appendChild(title);
    title.textContent = item.title;

    const author = document.createElement("div");
    author.classList.add("author");
    book.appendChild(author);
    author.textContent = item.author;

    const pages = document.createElement("div");
    pages.classList.add("pages");
    book.appendChild(pages);
    pages.textContent = item.pages;

    const read = document.createElement("div");
    read.classList.add("read");
    book.appendChild(read);
    read.textContent = item.read ? "already read" : "not read yet";

    book.dataset.id = item.id;

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("buttonDelete");
    book.appendChild(buttonDelete);
    buttonDelete.textContent = "remove book";
    buttonDelete.addEventListener("click", () => {
        deleteBook(book.dataset.id);
    })


    const buttonToggle = document.createElement("button");
    buttonToggle.classList.add("buttonToggle");
    book.appendChild(buttonToggle);
    buttonToggle.textContent = "toggle read";
    buttonToggle.addEventListener("click", () => {
        item.read = !item.read;
        read.textContent = item.read ? "already read" : "not read yet";
    })

    }
};

function deleteBook(id){
    for(let item of myLibrary){
        if (item.id === id){
            const index = myLibrary.indexOf(item)
            myLibrary.splice(index, 1)
            displayBooks()
        }
    }
}

//book creator
const button = document.getElementById("submit");
button.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    
    new Book(title, author, pages, read );
    displayBooks();
  });

  displayBooks();



//console.log(theHobbit.info());  "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
