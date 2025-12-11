import MovieCard from "./movieCard";

export default function MovieList({ movies }) {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
