import EventInfo from './components/EventInfo.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Schedule from './components/Schedule.js';
import Speakers from './components/Speakers.js';
import Tickets from './components/Tickets.js';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="container">
        <EventInfo />
        <Speakers />
      </div>
      <Tickets />
      <Schedule />
      <Footer />
    </div >
  );
}

export default App;
