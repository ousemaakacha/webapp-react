import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then(res => setMovieData(res.data))
      .catch(err => console.error("Errore caricamento:", err));
  }, [id]);


    if (!movieData) {
    return <p>Caricamento in corso...</p>;
  }



  const { movie, reviews } = movieData;

  return (
    <div className="row g-4">
      
      {/* Poster */}
      <div className="col-md-4">
        <img
          src={movie.imageUrl}
          className="img-fluid rounded shadow"
          alt={movie.title}
        />
      </div>

      {/* Info Film */}
      <div className="col-md-8">
        <h1>{movie.title}</h1>
        <p className="text-muted">{movie.genre}</p>
        <p>{movie.description}</p>

        <hr />

        <h4 className="mt-4">Recensioni</h4>

        {reviews.length > 0 ? (
          <ul className="list-group mt-3">
            {reviews.map((rev) => (
              <li className="list-group-item" key={rev.id}>
                <strong>{rev.author}:</strong> {rev.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted mt-2">Nessuna recensione disp</p>
        )}
      </div>
    </div>
  );
}
