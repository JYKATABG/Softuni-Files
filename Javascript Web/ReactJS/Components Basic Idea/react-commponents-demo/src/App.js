import MovieList from './components/MovieList.js';
import BookList from './components/BookList.js';

function App() {
  const movies = [
    { title: 'Fast And Furious 6', year: 2018, cast: ['Vin Diesel', 'Paul Walker', 'Keiti Cash'] },
    { title: 'Transporter 2', year: 2010, cast: ['Frank Martin', 'Lola'] },
    { title: 'Yuri Boyka', year: 2005, cast: ['Scott Adkins', 'Julian Vergov'] },
  ];

  const books = [
    { title: 'Don Quixote', author: 'Miguel de Cervantes', price: 15 },
    { title: 'Lord of the Rings', author: 'J.R.R. Tolkien', price: 23 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: 40 },
  ]

  return (
    <div className="App">
      <MovieList movies={movies} />
      <BookList books={books} />
    </div>
  );
}

export default App;
