import s from '../MovieDetailsPage/MovieDetailsPage.module.css';
import { useState, useEffect } from "react";
import { Route, useParams, useRouteMatch, useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Cast from '../../components/Cast';
import Reviews from "../../components/Reviews";
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../services/api';



const MovieDetailsPage = ({ setStatus, setError}) => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  

  const [movie, setMovie] = useState({});
  const [rewievs, setReviews] = useState({});

  // getMovieReviews(movieId).then((data) => console.log(data));
  useEffect(() => {
    setStatus(null);
    setMovie([]);
    getMovieDetails(movieId).then((data) =>
      !data ? setStatus('error') : setMovie(data))
      .catch((err) => setError(err))
    
  
    
    
  }, [])

  const handleGoBack = () => {
    history.push(location.state?.from);
  };
  
  return (
    
    <>
      <button type="button" className={s.goBackBtn} onClick={handleGoBack}>Go Back</button>
      <div className={s.wrapper}>
        <img className={s.movieImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.poster_path} />
      <div className={s.movieDescr}>
        <div className={s.movieDescrAbout}>
        <h1 className={s.title}>{movie.original_title}</h1>
      <p className={s.score}>User Score: {movie.vote_average * 10}%</p>
      <h2 className={s.overviewTitle}>Overview</h2>
      <p className={s.overview}>{movie.overview}</p>
      <h2 className={s.genreTitle}>Genres</h2>
      <p className={s.genre}>{movie.genres && movie.genres.map(genre => <span key={genre.id}>/ {genre.name} /</span>)}</p>
      </div>
      <ul className={s.additionalList}> Additional information:
        <li className={s.additionalItem}> <NavLink to={`${url}/casts`}> Cast </NavLink></li>
        <li className={s.additionalItem}><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
      </ul>
      </div>
        </div>
    <Route path="/movies/:movieId/casts">
        <Cast setError={setError}/>
      </Route>

      <Route path="/movies/:movieId/reviews">
      <Reviews setError={setError}/>
    </Route>
    </>
  )
}

export default MovieDetailsPage;