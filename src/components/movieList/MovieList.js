import React from 'react'
import { Card, Button, Row } from 'react-bootstrap';
import './_MovieList.scss'
import { Link } from 'react-router-dom'

function MovieList(props) {

    const { movies } = props;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    return (
        <div>

            <Row className="movies d-flex justify-content-center">
                {movies.map((movie, index) => (
                    <Card className="m-2" key={movie.id} style={{ width: '18rem', height: '30rem' }} >
                        <Card.Img variant="top" src={`${IMG_PATH}` + movie.poster_path} alt={movie.title} style={{ width: '16rem', height: '20rem' }} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>                            
                        </Card.Body>
                        <Card.Body>
                            <h1 bg="success" style={{ width: '3.1rem', float: 'left', fontSize: '14px' }}>{movie.vote_average}</h1>
                            <Button
                                variant="warning" style={{ width: '7rem', float: 'right', fontSize: '14px' }}
                                className="desc-button"
                                onClick={() => movies(movie)}                            >
                                <Link to={`/description/${movie.id}`} className="text-dark">Descripton</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </div>
    )
}

export default MovieList
