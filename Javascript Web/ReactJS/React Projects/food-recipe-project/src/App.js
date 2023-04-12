import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
