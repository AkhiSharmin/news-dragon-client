import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram  } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-secondary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-success"> <FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF></FaFacebookF> FaceBook
                    </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter>
                        Twitter
                    </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram>
                        Instagram 
                    </ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;