import React, { useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createProject } from '../../store/actions/projectAciotn';
import { useSelector , useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const CreatProject = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.firebase.profile);
    const auth = useSelector(state => state.firebase.auth);
    const [project, setProject] = useState(
        {
            title: '',
            subTitle: '',
            content: '',
        }
    )
    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        subTitle: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
    });

    const onChange = (e)=>{
        setProject((prev) =>({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    const onSubmit = (values,{resetForm}) => {
        dispatch(createProject(project,userInfo,auth));
        resetForm();
        props.history.push('/')
    };

    if(!auth.uid) return <Redirect from="/createProject" to="/signIn"/>
    return (
        <div className="create-project-container">
            <Container className="container-md">
                <Row className="justify-content-md-center">
                    <Col>
                        <h4>Create Project</h4>
                        <Formik
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            initialValues={project}
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
                                    <Form.Group controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Title"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            onKeyUp={onChange}
                                            isInvalid={touched.title && errors.title}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="subTitle">
                                        <Form.Label>SubTitle</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter subtitle"
                                            name="subTitle"
                                            value={values.subTitle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            onKeyUp={onChange}
                                            isInvalid={touched.subTitle && errors.subTitle}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.subTitle}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="content">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control
                                            name="content"
                                            value={values.content}
                                            onChange={handleChange}
                                            onKeyUp={onChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.content && errors.content}
                                            as="textarea"
                                            rows={4}
                                            placeholder="Enter content here."
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.content}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className="large-btn" variant="primary" type="submit">
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
