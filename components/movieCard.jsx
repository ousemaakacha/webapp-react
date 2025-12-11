import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={movie.imageUrl}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text text-muted">{movie.genre}</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
