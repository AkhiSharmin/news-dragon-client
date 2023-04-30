import React from "react";
import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/category/0";

  const handelSingIn = (event) => {
    event.preventDefault();
    const myFrom = event.target;
    const email = myFrom.email.value;
    const password = myFrom.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handelSingIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-success"></Form.Text>

        <Form.Text className="text-secondary">
          Don't have an Account?<Link to="/register">Register</Link>
        </Form.Text>

        <Form.Text className="text-success"></Form.Text>

        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
