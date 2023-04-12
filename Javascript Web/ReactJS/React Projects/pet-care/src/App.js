import { Header } from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { CreatePet } from "./components/CreatePet/CreatePet.jsx";
import { useState, useEffect } from "react";
import * as petService from './services/petService.js'
import { useNavigate } from "react-router-dom";
import { PetDetails } from "./components/PetDetails/PetDetails.jsx";

function App() {

  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    petService.getAll()
      .then(result => {
        setPets(result);
      })
  }, [])

  async function createPetOffer(data) {
    const newPet = await petService.create(data);

    setPets(state => ([...state, newPet]))

    navigate('/catalog');
  }


  return (

    <>
      {/* Header */}
      < Header />

      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog pets={pets} />} />
          <Route path="/catalog/:petId" element={<PetDetails />} />
          <Route path="/create-pet" element={<CreatePet createPetOffer={createPetOffer} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
