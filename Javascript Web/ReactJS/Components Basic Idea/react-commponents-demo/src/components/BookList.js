import Book from "./Book.js";

export default function BookList(props) {
    return (
        <div>
            <h1>Book List</h1>
            <Book
                title={props.books[0].title}
                author={props.books[0].author}
                price={props.books[0].price}
            />

            <Book
                title={props.books[1].title}
                author={props.books[1].author}
                price={props.books[1].price}
            />

            <Book
                title={props.books[2].title}
                author={props.books[2].author}
                price={props.books[2].price}
            />
        </div>
    );
};