import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
      </main>
      <Footer />
    </>
  );
}

export default App;
