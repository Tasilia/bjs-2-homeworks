class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    set state(currentState) {
        if (currentState > 100) {
            this._state = 100;
        } else if (currentState < 0) {
            this._state = 0;
        } else {
            this._state = currentState;
        }
    }
    get state() {
        return this._state;
    }
    fix() {
        if (this._state != 100 && this._state != 0) {
            this.state = this._state * 1.5;
        }
    }
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for(let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
            return book;
        }
        return  null;
    }
}