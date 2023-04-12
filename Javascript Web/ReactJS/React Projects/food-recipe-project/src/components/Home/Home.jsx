import "./home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-section">
      <div className="home-text">
        <h1>
          Welcome to <span>Hansa</span>!
        </h1>
        <p>Where you can find and create recipies</p>
        <Link to={"/about"} className="header-btn margin-top">
          View Recipie
        </Link>
      </div>
    </div>
  );
}
