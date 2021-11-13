import { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Error from "./components/Error";

// getMovieReviews("268").then((data) => console.log(data));

function App() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/movies">
        <MoviesPage setStatus={setStatus} setError={setError} />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetailsPage setStatus={setStatus} setError={setError} />
      </Route>

      {status === "error" && <Error />}

      {error && <h2>{error.massage}</h2>}
    </div>
  );
}

export default App;
