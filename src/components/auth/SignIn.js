import React, { useState } from 'react'
import { Row, Col, Container, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import loginBg from '../../assets/img/computer-bg.jpg'
import { Link } from 'react-router-dom';
export const SignIn = () => {

    const[account , setAccount] = useState(
        {
            email: '',
            password: '',
        }
    )

    const handleChange = (e)=>{
        setAccount((prev) =>({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="signin-container">
            <Container className="container-md">
                <Row className="justify-content-md-center g-2">
                    <Col md lg="5">
                        <h2 className="text-secondary text-center">Welcom to <span className="text-info">OurPlan</span></h2>
                        <div><img src={loginBg} alt="login-bg" /></div>
                    </Col>
                    <Col md lg="4">
                        <h4>Sign In</h4>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChange} />
                            </Form.Group>
                            <Button className="large-btn" variant="info" type="submit" onClick={handleSubmit}>
                                Login
                            </Button>
                            <Form.Group controlId="formBasicCheckbox">
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Creat an account!</Tooltip>}>
                                    <span className="d-inline-block">
                                    <Link to="./signup">Don't you have account?</Link>
                                    </span>
                                </OverlayTrigger>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
