export default function Book(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <ul>
                <li>Author: {props.author}</li>
                <li>Price: {props.price}$</li>
            </ul>
        </article>
    )
}