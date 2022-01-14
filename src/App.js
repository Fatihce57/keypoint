import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieList from './components/moviesPage/MovieList';

function App() {

  const [movies, setMovies] = useState([])

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb610eb829d30acfac99f7dbaa1c937c&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fb610eb829d30acfac99f7dbaa1c937c&query="'

  useEffect(() => {
    getAllMovies()
  }, []);

  const getAllMovies = async () => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    try {
      setMovies((prev) => [...prev, data.results])
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
