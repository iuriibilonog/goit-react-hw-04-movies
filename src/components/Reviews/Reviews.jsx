import s from '../Reviews/Reviews.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieReviews } from '../../services/api';

const Reviews = ({ setError}) => {

  const { movieId } = useParams();
  console.log(movieId)

  
  
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    setReviews({});
    getMovieReviews(movieId).then((data) =>
      !data ? setReviews('No reviews') : setReviews(data.results))
    .catch((err) => setError(err))
    
  }, [])

  console.log(reviews)

  return (
    
    <ul className={s.reviews}>
      {reviews.length > 0 ? reviews.map((reviwe) => <li className={s.reviewsItem} key={reviwe.id}>
        <h2 className={s.reviewsTitle}>{reviwe.author}</h2>
        <p className={s.reviewsDescr}>{reviwe.content}</p>
      </li>) : <p className={s.noneReview}>This movie hadn't any reviwes.</p>}
    </ul>
  )
}

export default Reviews;