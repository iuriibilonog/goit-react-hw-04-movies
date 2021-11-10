import { Link, useRouteMatch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api'

const HomePage = () => {

  // const {url} = useRouteMatch();
  
  const [trendingMovies, setTrendingMovies] = useState(null)

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies)
  }, [])

  console.log(trendingMovies)
  

  return (
    <>
      <h1>Trending today!</h1>
      <ul>
        {trendingMovies && trendingMovies.results.map(movie =>
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>)}
      </ul>
    </>
  )
}

export default HomePage;

