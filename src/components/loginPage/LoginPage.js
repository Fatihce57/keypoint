import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import {Button,Form} from "react-bootstrap";
import "./_LoginPage.scss";
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.includes("@") && email.length > 5 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();    
  }
  
  return (
    <div className="Login d-flex justify-content-center mt-5" >
      <Form style={{width: '20vw' }} onSubmit={handleSubmit} link to={`/search`}>
        <Form.Group size="lg" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" size="md mt-2" type="submit" disabled={!validateForm()} onclick={handleSubmit}>          
          <Link to={`/search`} className=" text-light">Login</Link>
        </Button>
      </Form>
    </div>
  );
}
export default LoginPage