import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getMovieByQuery } from '../../services/api';
import s from '../MoviesPage/MoviesPage.module.css';


const MoviesPage = ({ setStatus, setError}) => {

  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  

  const { url } = useRouteMatch();
  
  useEffect(() => {
    if (query === '') return;

    setStatus(null);
    setMovies([]);
    setInput('');

    getMovieByQuery(input).then((data) =>
      data.results.length === 0 ? setStatus('error') : setMovies(data.results))
    .catch((err) => setError(err))
  }, [query])
  

  const handlerOnChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    setQuery(input)
    
  }

  return (
    <>
      <div className={s.formWrapper}>
      <form className={s.searchForm} onSubmit={handlerOnSubmit}>
      <input className={s.searchInput} type="text" name="input" value={input} title="Введите название фильма" onChange={handlerOnChange}/>
      <button className={s.searchBtn} type="submit">Search</button>
        </form>
        </div>
    <ul className={s.moviesList}>
        {movies.map((movie) => <li className={s.moviesListItem} key={movie.id}>
          <Link to={`${url}/${movie.id}`}>
            <img className={s.img} src={movie.backdrop_path &&`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
            <p className={s.name}>{movie.original_title}</p>
            </Link>
        </li>)}
      </ul>
    </>  
  )
}

export default MoviesPage;