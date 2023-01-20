class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.")
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            })

            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        let book = this.books.find(p => p.bookName === bookName)
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let book = this.books.find(p => p.bookName === bookName)
        if (!book) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.filter((book) => book.bookName !== bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let buff = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.sort((a, b) => a['bookName'].localeCompare(b['bookName']))
                .map(book => { buff += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.\n` });

            return buff.trim();
        } else {
            if (!this.books.find(book => book.bookAuthor === bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            let buff = "";
            this.books.filter(book => book.bookAuthor === bookAuthor)
                .map(book => { buff += `${book[`bookName`]} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.\n` })

            return buff.trim();
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




