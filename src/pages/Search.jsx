import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieGrid.css";
import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;

    const getSeachedMovies = async (apiUrl) => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setMovies(data.results);
    }
    getSeachedMovies(searchWithQueryURL);
  }, [query])
  
  return (
    <div className="container">
      <h2 className="title">Resultados encontrados para "<span className="query-text">{query}</span>"</h2>
      <div className="movies-container">
        {movies && movies.length === 0 && <p>Carregando...</p>}
        {movies && movies.length > 0 &&
          movies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
};

export default Search;
