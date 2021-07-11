import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

export const SignedInLink = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.firebase.profile);
    const handleClick = () => {
        dispatch(signOut());
    }
    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Item href="/">
                    <Nav.Link as={Link} to="/createProject">
                        Create Project
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav>
                <Nav.Item href="/">
                    <Nav.Link as={Link} to="/signIn" onClick={handleClick}>
                        Log Out
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item href="/">
                    <Nav.Link as={Link} to="/">
                        <div className="user-profile"><strong><p>{userInfo.initials}</p></strong></div>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse >
    )
}
