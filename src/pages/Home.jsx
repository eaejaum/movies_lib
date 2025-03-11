import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fecthTopMovies = async (apiUrl) => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setTopMovies(data.results);
    };
    fecthTopMovies(`${moviesURL}top_rated?${apiKey}`);
  }, []);

  return (
    <div className="container">
      <h2>Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
};

export default Home;
