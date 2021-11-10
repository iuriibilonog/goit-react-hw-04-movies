import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getMovieByQuery } from '../../services/api';


const MoviesPage = () => {

  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const {url} = useRouteMatch();
  

  const handlerOnChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    getMovieByQuery(input).then((data) =>
      data.results.length === 0 ? setStatus('error') : setMovies(data.results))
    .catch((err) => setError(err))
  }

  return (
    <>
    <form onSubmit={handlerOnSubmit}>
      <input type="text" name="input" value={input} title="Введите название фильма" onChange={handlerOnChange}/>
      <button type="submit">Search</button>
    </form>
    <ul>
        {movies.map((movie) => <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
        </li>)}
      </ul>
    </>  
  )
}

export default MoviesPage;