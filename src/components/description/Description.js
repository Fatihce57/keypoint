import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";

function Description(props) {

    const { id } = useParams();
    const { movies } = props;

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    return (
        <div className="descriptionn">
            <Button variant="outline-dark m-5">
                <Link className="back" to="/search" >Back</Link>
            </Button>
            {movies.filter((item) => item.id === parseInt(id)).map((item, index) => (
                <div className="description d-flex justify-content-center m-1">
                    <Card key={item.id} className="m-5 d-flex justify-content-center" style={{ width: '28rem', height: '50rem' }}>
                        <Card.Img variant="top" src={`${IMG_PATH}` + item.poster_path} alt={item.title} style={{ width: '28rem', height: '29rem' }} />
                        <Card.Body>
                            <Card.Title className="text-danger">{item.title}</Card.Title>
                            <Card.Text>
                                {item.overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}

export default Description
