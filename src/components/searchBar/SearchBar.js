import React from 'react'
import './_SearchBar.scss'
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';

const SearchBar = (props) => {
  const { handleOnSubmit, searchMovie, handleOnChange } = props

  return (
    <Navbar bg="light" expand="lg">
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
