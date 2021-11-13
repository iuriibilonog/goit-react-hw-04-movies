import s from '../Cast/Cast.module.css';
import defaultImg from '../../img/imgdef.jpg';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieCredits } from '../../services/api';

const Cast = ({setError}) => {

  const { movieId } = useParams();
  

  
  
  const [credits, setCredits] = useState({});

  useEffect(() => {
    setCredits({});
    getMovieCredits(movieId).then((data) =>
      !data ? setCredits('No credits') : setCredits(data))
      .catch((err) => setError(err))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <ul className={s.creditsList}>
      {credits.cast && credits.cast.map((actor) => <li className={s.creditsListItem} key={actor.id}>
        <img className={s.img} src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `${defaultImg}`} alt={actor.profile_path} />
        <p className={s.name}>{actor.name}</p>
        <p className={s.name}>character: {actor.character}</p>
      </li>)}
      </ul>
  )
}

export default Cast;