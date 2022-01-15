import React from 'react'
import { Card, Button, Row } from 'react-bootstrap';
import './_MovieList.scss'
import { Link } from 'react-router-dom'

function MovieList(props) {

    const { movies } = props;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    console.log(movies)
    return (
        <div>
            
            <Row className="movies d-flex justify-content-center">



                {movies.map((movie, index) => (
                    <Card className="m-2" key={movie.id} style={{ width: '18rem', height: '40rem' }} >
                        <Card.Img variant="top" src={`${IMG_PATH}` + movie.poster_path} alt={movie.title} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text style={{ height: '10rem', fontSize: '12px' }}>
                                {movie.overview}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="success" style={{ width: '3.1rem', float: 'left', fontSize: '14px' }}>{movie.vote_average}</Button>
                            <Button
                                variant="warning text-dark" style={{ width: '7rem', float: 'right', fontSize: '14px' }}
                                className="desc-button"
                                onClick={() => movies(movie)}
                            >
                                <Link to={`/description/${movie.id}`} className="desc-button">Descripton</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </div>
    )
}

export default MovieList
