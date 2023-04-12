import { Link } from "react-router-dom";

export function CatalogItem({
    _id,
    name,
    breed,
    imageUrl
}) {
    return (
        <div className="animals-board">
            <article className="service-img">
                <img className="animal-image-cover" src={imageUrl} />
            </article>
            <h2 className="name">{name}</h2>
            <h3 className="breed">{breed}</h3>
            <div className="action">
                <Link className="btn" to={`/catalog/${_id}`}>Details</Link>
            </div>
        </div>
    )
}