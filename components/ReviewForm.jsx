import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId, onReviewAdded }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    

    const newReview = { movieId, name, text, vote: 3 };

    axios
      .post("http://localhost:3000/reviews", newReview)
      .then((response) => {
        onReviewAdded(response.data);  
      })
      .catch((error) => console.error("Couldnt add review:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Review</label>
        <textarea
          className="form-control"
          id="text"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary">ADD REVIEW</button>
    </form>
  );
}

export default ReviewForm;
