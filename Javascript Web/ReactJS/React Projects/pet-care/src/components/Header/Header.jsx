import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <nav>
                <section className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </section>
                <ul>
                    {/* <!--Users and Guest--> */}
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/catalog"}>Dashboard</Link></li>
                    {/* <!--Only Guest--> */}
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><Link to={"/register"}>Register</Link></li>
                    {/* <!--Only Users--> */}
                    <li><Link to={"/create-pet"}>Create Postcard</Link></li>
                    <li><Link to={"/logout"}>Logout</Link></li >
                </ul >
            </nav >
        </header >
    )

}