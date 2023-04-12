import { CatalogItem } from "./CatalogItem/CatalogItem.jsx";


export function Catalog({pets}) {
    return (
        <section id="dashboard">
            <h2 className="dashboard-title">Services for every animal</h2>
            <div className="animals-dashboard">

                {pets.map(pet => <CatalogItem key={pet._id} {...pet} />)}

                {/* <!--If there is no pets in dashboard--> */}
                {pets.length === 0 && (
                    <div>
                        <p className="no-pets">No pets in dashboard</p>
                    </div>
                )}
            </div>
        </section>
    )
}