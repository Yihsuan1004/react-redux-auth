import React, { useState } from 'react'
import { Row, Col, Container, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import loginBg from '../../assets/img/computer-bg.jpg'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

export const SignIn = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth);
    const authError = useSelector(state => state.auth.authError)

    const [account, setAccount] = useState(
        {
            email: '',
            password: '',
        }
    )

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onChange = (e) => {
        setAccount((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
  
    const onSubmit = (values,{resetForm}) => {
        dispatch(signIn(account));
        resetForm();
    }

    if (auth.uid) return <Redirect to="/" />
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
                        <Formik
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            initialValues={account}
                        >
                            {({
                                handleSubmit,
                                handleBlur,
                                handleChange,
                                values,
                                touched,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            placeholder="Enter email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onKeyUp={onChange}
                                            isInvalid={touched.email && errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onKeyUp={onChange}
                                            isInvalid={touched.password && errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className="large-btn" variant="info" type="submit">
                                        Login
                                    </Button>
                                    <div className="text-danger h6">
                                        {authError ? authError : null}
                                    </div>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Creat an account!</Tooltip>}>
                                            <span className="d-inline-block">
                                                <Link to="./signup">Don't you have account?</Link>
                                            </span>
                                        </OverlayTrigger>
                                    </Form.Group>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
