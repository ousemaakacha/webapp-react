import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm"
import { useLoader } from "../context/loaderContext";

export default function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { loading, startLoading, stopLoading } = useLoader();

  useEffect(() => {

    startLoading();

    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then(res => {
        setMovieData(res.data)
        setReviews(res.data.reviews);
      })
      .catch(err => console.error("Errore caricamento:", err))
      .finally(() => stopLoading());
  }, [id, startLoading, stopLoading]);


  if (loading) {
    return <div className="loader">Caricamento...</div>;  
  }


    if (!movieData) {
    return <p>Caricamento in corso...</p>;
  }



  const { movie } = movieData;

   const handleNewReview = (newReview) => {
    setReviews([...reviews, newReview]); 
  };

   return (
    <div className="row g-4">
      
      
      <div className="col-md-4">
        <img
          src={movie.imageUrl}
          className="img-fluid rounded shadow"
          alt={movie.title}
        />
      </div>

      
      <div className="col-md-8">
        <h1>{movie.title}</h1>
        <p className="text-muted">{movie.genre}</p>
        <p>{movie.description}</p>

        <hr />

        <h4 className="mt-4">REVIEWS</h4>

        <ReviewForm movieId={movie.id} onReviewAdded={handleNewReview} />

        {reviews.length > 0 ? (
          <ul className="list-group mt-3">
            {reviews.map((rev) => (
              <li className="list-group-item" key={rev.id}>
                <strong>{rev.name}:</strong> {rev.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted mt-2">Nessuna recensione disp</p>
        )}
      </div>
    </div>
  ) ;
}
