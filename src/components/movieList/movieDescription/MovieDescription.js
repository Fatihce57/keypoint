import React from 'react'
import { useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

function MovieDescription(props) {
    const { id } = useParams();
    const { movies } = props;

    return (
        <div>
            <Button variant="outline-dark">
                <Link to="/search">Back</Link>
            </Button>
            {movies.filter((item) => item.id === id).map((item, index) => (

                <div>{item.title}</div>

            ))

            }
        </div>
    )
}

export default MovieDescription
