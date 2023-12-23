
import './App.css';
import MoviesList from './komponen/circle-card/movies/MoviesList';



function App() {

    return (
    <div className="App">
      <div className='header'>
        <div className='header-left'>
          <img src="/logos/cil_animal.svg" alt="logo"></img>
        <h2 className='header-title'> List CAT BREED</h2>
        </div>
        <span className='header-view-all'>cart Cart</span>
      </div>
      <MoviesList/>
  
    </div>
  );
}

export default App;
