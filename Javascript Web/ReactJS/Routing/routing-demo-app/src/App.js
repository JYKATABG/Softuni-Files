import { Routes, Route } from 'react-router-dom'
import { About } from './components/About.jsx';
import { Home } from './components/Home.jsx';
import React from 'react'
import './App.css'
import { Navigation } from './components/Navigation.jsx';
import { CharacterList } from './components/CharacterList.js';
import { Character } from './components/Character.js';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/characters' element={<CharacterList />} />
                <Route path='/characters/:characterId' element={<Character />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
