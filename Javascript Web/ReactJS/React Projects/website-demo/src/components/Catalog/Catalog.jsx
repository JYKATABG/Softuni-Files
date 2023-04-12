import { CatalogItem } from "./CatalogItem/CatalogItem.jsx";

export function Catalog({ games }) {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(x => <CatalogItem key={x._id} {...x} />)}


            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
            {/* <!-- Display paragraph: If there is no games  --> */}
        </section>
    )
}