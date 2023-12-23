import CircleCard from'./komponen/circle-card/CircleCard'
import{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import MoviesList from './komponen/circle-card/movies/MoviesList';

const breedData = [
{
  img: "https://placehold.co/400x400/000000/FFF",
  title: "Lion"
},
{
  img: "https://placehold.co/400x400/red/FFF",
  title: "Cat"
},
{
  img: "https://placehold.co/400x400/blue/FFF",
  title: "chiken"
},
{
  img: "https://placehold.co/400x400/green/FFF",
  title: "cow"
},
]

function App() {

  const[cart, setCart] = useState()

    return (
    <div className="App">
      <div className='header'>
        <div className='header-left'>
          <img src="/logos/cil_animal.svg"></img>
        <h2 className='header-title'> List CAT BREED</h2>
        </div>
        <span className='header-view-all'>cart Cart</span>
      </div>
      <MoviesList/>
      <div className="card-box">
        {
          breedData.map((data) => {
            return <CircleCard 
            img={data.img} 
            title={data.title}
            setCart={setCart}
            />
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
