import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Movies(props) {

// const {movies}=props;
   const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'
    return (
        <div>
            {props.movies.map((movie,index) =>(
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" alt={movie.title} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    )
}

export default Movies
