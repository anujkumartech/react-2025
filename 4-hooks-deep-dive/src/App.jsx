import { useState, useEffect } from 'react'; // Hooks
import ReviewForm from './components/ReviewFrom.jsx';
import ReviewList from './components/ReviewList';
import './App.css';

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => { // side effect
    console.log('I ran');
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }

    const totalStars = reviews.reduce((acc, review) => acc + review.rating, 0);
    const avg = totalStars / reviews.length;
    // api to get reviews database
    // one time activity in your react application
    // useRef - bonus work
    //  condition ? runthicode : ranthatcode
    // &&
    setAverageRating(avg.toFixed(1));
  }, [reviews]);

  const addReview = (reviewData) => {
    const newReview = {
      ...reviewData
    };

    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h1>Product Reviews</h1>

      <div>
        {
          averageRating > 0  ? <h2>Average Rating: {averageRating} ⭐</h2> : <h3>Rating Pending</h3>
        }
        {/* {
          averageRating > 0  ?  <p>Total Reviews: {reviews.length}</p> : ''
        } */}
        {
          averageRating > 0 && <p>Total Reviews: {reviews.length}</p>
        }
      </div>

      <ReviewForm onAddReview={addReview} />

      <ReviewList reviews={reviews} />
    </div>
  );
}

/* 
                                      App
              /                                      \
  ReviewList for Display                          New Reviews from User via ReviewForm

*/