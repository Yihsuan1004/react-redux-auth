import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SignedInLink } from './SignedInLink';
import { SignedOutLink } from './SignedOutLink'
import { useSelector } from 'react-redux';

export const Navigation  = () => {
    const state = useSelector((state) => state)
    const auth = state.firebase.auth;
    const links = auth.uid ? <SignedInLink /> :  <SignedOutLink />
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand as={Link} to="/">OurPlan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              {links}      
            </Navbar.Collapse>
        </Navbar>
    )
}