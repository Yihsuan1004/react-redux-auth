import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const CreatProject = () => {
    const initialValues = {
        title: '',
        content: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
    });

    const onSubmit = (values) => {
        console.log(JSON.stringify(values, null, 2));
    };

    return (
        <div className="create-project-container">
            <Container className="container-md">
                <Row className="justify-content-md-center">
                    <Col>
                        <h4>Create Project</h4>
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
                                    <Form.Group controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Title"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            isInvalid={touched.title && errors.title}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="content">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control
                                            name="content"
                                            value={values.content}
                                            onChange={handleChange}
                                            isInvalid={touched.content && errors.content}
                                            as="textarea"
                                            rows={4}
                                            placeholder="Enter content here."
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.content}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className="large-btn" variant="primary" type="submit" >
                                        Create
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
