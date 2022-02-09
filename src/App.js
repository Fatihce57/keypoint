import React, { useState } from 'react';
import './_App.scss';
import { Routes, Route } from "react-router-dom";
import MovieList from './components/movieList/MovieList';
import SearchBar from './components/searchBar/SearchBar';
import LoginPage from './components/loginPage/LoginPage';
import Description from './components/description/Description';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fb610eb829d30acfac99f7dbaa1c937c&query='

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await fetch(SEARCH_API + searchMovie)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  const handleOnChange = (e) => {
    setSearchMovie(e.target.value);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchBar
          handleOnSubmit={handleOnSubmit}
          searchMovie={searchMovie}
          handleOnChange={handleOnChange}
        />} />
        <Route path="/description/:id" element={<Description movies={movies} />} />
      </Routes>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
