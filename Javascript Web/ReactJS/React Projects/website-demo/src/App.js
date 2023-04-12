import { useNavigate } from 'react-router';
import * as gameService from './services/gameService.js'
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router";
import { Catalog } from './components/Catalog/Catalog.jsx';
import { CreateGame } from './components/CreateGame/CreateGame.jsx';
import { Header } from './components/Header/Header.jsx';
import { Home } from './components/Home/Home.jsx';
import { Login } from './components/Login/Login.jsx';
import { Register } from './components/Register/Register.jsx';
import { GameDetails } from './components/GameDetails/GameDetails.jsx';
import { GameContext } from './contexts/GameContext.js';

function App() {

  const [games, setGame] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        console.log(result);
        setGame(result);
      })
  }, [])

  async function onCreateGameSubmit(data) {

    //Create new game
    const newGame = await gameService.create(data);

    //set new game to state
    setGame(state => [...state, newGame])

    //Navigate to catalog page
    navigate("/catalog");
  }



  return (
    <GameContext.Provider>
      <div id="box">
        <Header />

        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path='/create' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
            <Route path='/catalog/:gameId' element={<GameDetails />}></Route>
          </Routes>
        </main>
      </div>
    </GameContext.Provider>
  );
}

export default App;
