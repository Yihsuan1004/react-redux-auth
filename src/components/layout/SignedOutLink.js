import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SignedOutLink = () => {

    return (
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Item href="/"><Nav.Link as={Link} to="/signIn">Log In</Nav.Link></Nav.Item>
                <Nav.Item href="/"><Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse >
    )
}
