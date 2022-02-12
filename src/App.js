import './App.css';
import {useEffect,useState} from "react";
import Game from './Game';
import Filter from './Filter';
import {motion,AnimatePresence} from "framer-motion";

function App() {

  const [popular,setPopular]=useState([]);
  const [filtered,setFiltered]=useState([]);
  const [activeGenre,setActiveGenre]=useState(0);

  useEffect(() => {
    fetchPopular();
  },[]);

  const fetchPopular=async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=280a337cbc775d5327216c0501444968&language=en-US&page=1');
    const games=await data.json();
    console.log(games);
    setPopular(games.results);
    setFiltered(games.results);

  }
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map(game => {
            return <Game key={game.id} game={game} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
