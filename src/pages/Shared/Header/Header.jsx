import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

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
        </Container>
    );
};

export default Header;