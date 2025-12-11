import { useEffect, useState } from "react";
import MovieList from "../components/movieList";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies")
      .then(res => setMovies(res.data));
  }, []);

  return <MovieList movies={movies} />;
}
