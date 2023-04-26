import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Container className='bg-light.bg-gradient'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
                <p><small>{moment().format("h:mm:ss a")}</small></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100} pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...

                I can be a React component, multiple React components, or just some text......
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Career">Career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    <Button variant="secondary">Login</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Container>
    );
};

export default Header;