import React from 'react'
import './_SearchBar.scss'
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
  const { handleOnSubmit, searchMovie, handleOnChange } = props

  return (
    <Navbar bg="light" expand="lg">
      <Button variant="outline-danger" className="btn-exit">
        <Link to="/" className="exit">Exit</Link>
      </Button>
      <Container fluid className="d-flex justify-content-center m-5" onSubmit={handleOnSubmit}>
        <Form className="d-flex" >
          <FormControl
            type="text"
            placeholder="Search movies..."
            className="me-1"
            aria-label="Search"
            value={searchMovie}
            onChange={handleOnChange}
          />
          <Button variant="outline-success" onClick={handleOnSubmit}>Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default SearchBar
