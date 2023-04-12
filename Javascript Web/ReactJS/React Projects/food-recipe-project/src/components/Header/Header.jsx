import "./header.css";

export function Header() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/create-recipe">Create Recipe</a>
          </li>
          <li>
            <a href="/catalog">All Recipes</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </>
  );
}
