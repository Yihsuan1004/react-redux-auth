import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userImg from './user.png'
export const Navigation  = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand as={Link} to="/">OurPlan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Item href="/"><Nav.Link as={Link} to="/createProject">Create Project</Nav.Link></Nav.Item>
                    <Nav.Item href="/"><Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link></Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item href="/"><Nav.Link as={Link} to="/signIn">LogIn</Nav.Link></Nav.Item>
                    <Image src={userImg} roundedCircle />
                    <Nav.Item href="/"><Nav.Link as={Link} to="/signIn">Log Out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}