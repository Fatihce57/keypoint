import React from 'react'
import './_SearchBar.scss'
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
  const { handleOnSubmit, searchMovie, handleOnChange } = props

  return (
    <Navbar bg="light" expand="lg">
      <Button variant="outline-danger" className="m-2">
        <Link to="/">Exit</Link>
      </Button>
      <Container fluid className="d-flex justify-content-center m-5">
        <Form className="d-flex" onSubmit={handleOnSubmit}>
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
