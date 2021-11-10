import { Route } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

// getMovieReviews("268").then((data) => console.log(data));

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/movies">
        <MoviesPage />
      </Route>
    </div>
  );
}

export default App;
