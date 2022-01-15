import React from 'react'
import './_MovieDescription.scss'
import { useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

function MovieDescription(props) {
    const { id } = useParams();
    const { movies } = props;
console.log(movies)
    return (
        <div className="movie-description">
            <Button variant="outline-dark m-5">
                <Link className="back" to="/search" >Back</Link>
            </Button>
            {movies.filter((item) => item.id === id).map((item, index) => (

                <div>{item.title}</div>

            ))

            }
        </div>
    )
}

export default MovieDescription
