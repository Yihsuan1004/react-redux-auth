import React,  { useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import loginBg from '../../assets/img/computer-bg.jpg'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AlertPopUp } from '../../utils/alert'

export const SignUp = () => {
    const [show, setShow] = useState(false);
    const initialValues =  { 
        email: '',
        password: '',
        passwordConfirmation: '',
        firstName: '',
        lastName: '' 
    };
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8,'The password must be at least 8 characters long.').required('Required'),
        passwordConfirmation: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
    });
    
    const onSubmit = (values) => {
        setShow(true)
        console.log(JSON.stringify(values, null, 2));
    };

    return (
        <div className="signin-container">
            <Container className="container-md">
                <Row className="justify-content-md-center g-2">
                    <Col md lg="5">
                        <h2 className="text-secondary text-center">Welcom to <span className="text-info">OurPlan</span></h2>
                        <div><img src={loginBg} alt="login-bg" /></div>
                    </Col>
                    <Col md lg="4">
                        <h4>Sign Up</h4>
                        <Formik
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            initialValues={initialValues}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            isInvalid,
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
                                    isValid={touched.email && !errors.email}
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
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="passwordConfirmation">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control 
                                    name="passwordConfirmation"
                                    type="password" 
                                    placeholder="passwordConfirmation" 
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                                    isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.passwordConfirmation}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="firstName">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control 
                                    name="firstName"
                                    type="text" 
                                    placeholder="FirstName" 
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={touched.firstName && errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control 
                                    name="lastName"
                                    type="text" 
                                    placeholder="LastName" 
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                    isInvalid={ touched.lastName && errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.lastName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button className="large-btn" variant="warning" type="submit">
                                Create an Account
                            </Button>
                        </Form>
                        )}
                    </Formik>
                    </Col>
                </Row>
            </Container>
            {show === true ? <AlertPopUp variantType={'success'} setShow={setShow} /> : null}
        </div>
    )
}
