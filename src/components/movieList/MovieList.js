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
                <Card className="m-2" key={movie.id} style={{ width: '18rem', height: '40rem'}} >
                    <Card.Img variant="top" src={`${IMG_PATH}`+ movie.poster_path}  alt={movie.title} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text style={{ height: '10rem', fontSize: '12px' }}>
                            {movie.overview}
                        </Card.Text>                        
                    </Card.Body>
                    <Card.Body>
                    <Button variant="success" style={{ width: '3.1rem', float:'left',fontSize: '14px' }}>{movie.vote_average}</Button>
                    {/* <Button
                  className="desc-button"
                  onClick={() => addToDescription(movie)}
                >
                  <Link to={`/description/${movie.id}`} className="desc-button">Descripton</Link>
                </Button> */}
                <Button variant="warning text-dark" style={{ width: '7rem', float:'right',fontSize: '14px' }}>Description</Button>
                </Card.Body>
                </Card>
            ))}
        </Row>
    )
}

export default MovieList
