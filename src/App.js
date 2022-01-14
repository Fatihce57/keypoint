import React, { useEffect, useState } from 'react';
import './_App.scss';
// import { Routes, Route, Link } from "react-router-dom";
import MovieList from './components/movieList/MovieList';
import SearchBar from './components/searchBar/SearchBar';
import LoginPage from './components/loginPage/LoginPage';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb610eb829d30acfac99f7dbaa1c937c&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fb610eb829d30acfac99f7dbaa1c937c&query="'

  useEffect(() => {
    getAllMovies()
  }, []);

  const getAllMovies = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    try {
      setMovies((prev) => data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchMovie)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      })

  }

  const handleOnChange = (e) => {
    setSearchMovie(e.target.value);
  }

  const addToDescription = (e) => {

  }


  return (
    <div className="App">
      <LoginPage/>
      <SearchBar
      handleOnSubmit={handleOnSubmit} 
      searchMovie={searchMovie} 
      handleOnChange={handleOnChange} 
      addToDescription={addToDescription} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
