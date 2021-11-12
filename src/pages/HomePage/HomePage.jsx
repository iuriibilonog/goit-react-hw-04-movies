import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import s from '../HomePage/HomePage.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api'

const HomePage = () => {

  // const {url} = useRouteMatch();

  const location = useLocation();
  console.log(location)
  
  const [trendingMovies, setTrendingMovies] = useState(null)

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies)
  }, [])

  console.log(trendingMovies)
  

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.trendList}>
        {trendingMovies && trendingMovies.results.map(movie =>
          <li className={s.trendListItem} key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img className={s.img} src={movie.backdrop_path &&`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
              <p className={s.name}>{movie.original_title}</p>
              </Link>
          </li>)}
      </ul>
    </>
  )
}

export default HomePage;

