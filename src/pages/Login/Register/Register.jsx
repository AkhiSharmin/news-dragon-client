import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br/>
            <Form.Text className='text-success'>

            </Form.Text>

            <Form.Text className='text-secondary'>
            Already have an Account?<Link to='/login'>Login</Link>
            </Form.Text>

            <Form.Text className='text-success'>

            </Form.Text>

            <Form.Text className='text-danger'>

            </Form.Text>
        </Form>
        </Container>
    );
};

export default Register;