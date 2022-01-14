import React from 'react'
import { Card, Button,Row } from 'react-bootstrap';
import './_MovieList.scss'
import { Link } from 'react-router-dom'

function MovieList(props) {

    const { movies,addToDescription } = props;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    return (
        <Row className="movies d-flex justify-content-center">
            {movies.map((movie, index) => (
                <Card className="m-2" key={movie.id} style={{ width: '18rem', height: '35rem' }} >
                    <Card.Img variant="top" src={`${IMG_PATH}`+ movie.poster_path}  alt={movie.title} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text >
                            {movie.overview}
                        </Card.Text>                        
                    </Card.Body>
                    <Button variant="primary" style={{ width: '3rem', float:'right' }}>{movie.vote_average}</Button>
                    {/* <Button
                  className="desc-button"
                  onClick={() => addToDescription(movie)}
                >
                  <Link to={`/description/${movie.id}`} className="desc-button">Descripton</Link>
                </Button> */}
                </Card>
            ))}
        </Row>
    )
}

export default MovieList
