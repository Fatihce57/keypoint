import React, { useEffect, useState } from 'react';
import './_App.scss';
import MovieList from './components/movieList/MovieList';
import SearchBar from './components/searchBar/SearchBar';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb610eb829d30acfac99f7dbaa1c937c&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fb610eb829d30acfac99f7dbaa1c937c&query="'

  useEffect(() => {
    getAllMovies()
  }, []);

  const getAllMovies = async () => {
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

    fetch(SEARCH_API + searchTerm)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      })

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const addToDescription = (e) => {

  }


  return (
    <div className="App">
      <SearchBar handleOnSubmit={handleOnSubmit} searchTerm={searchTerm} handleOnChange={handleOnChange} addToDescription={addToDescription} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
