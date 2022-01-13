import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb610eb829d30acfac99f7dbaa1c937c&page=1'

  useEffect(() => {
    getAllMovies()
  }, []);
  const getAllMovies = async () => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    try {
      setMovies((prev) => [...prev, data.results])
    } catch (err) {
      console.log(err)
    }
    // console.log(getAllMovies())
  }

  return (
    <div className="App">
      aaa
    </div>
  );
}

export default App;
