import "./App.css";
import { useEffect, useState } from "react";
import * as gameService from "./services/gameService.js";

import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Create } from "./components/CreateGame/Create.jsx";
import { Details } from "./components/Details/Details.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll()
      .then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  async function onCreateGameSubmit(data) {
    const newGame = await gameService.create(data);

    setGames((x) => [...x, newGame]);

    navigate("/catalog");
  }

  return (
    <div className="App">
      <div id="box">
        <Header />

        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/create-game"
              element={<Create onCreateGameSubmit={onCreateGameSubmit} />}
            />
            <Route path="/catalog" element={<Catalog games={games} />} />
            {/* Details page */}
            <Route path="/catalog/:gameId" element={<Details />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
