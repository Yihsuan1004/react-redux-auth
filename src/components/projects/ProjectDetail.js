import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { ReactComponent as Loading } from '../../assets/img/loading.svg'

export const ProjectDetail = (props) => {
    const projectId = props.match.params.id
    useFirestoreConnect([{ collection: 'projects' }]);
    const projects = useSelector((state) => {
        return state.firestore.ordered.projects
    })
    const auth = useSelector(state => state.firebase.auth);
    if (!auth.uid) return <Redirect to="/signIn" />
    if (!projects) {
        return (
            <div className="project-detail-container">
                <Loading />
            </div>
        )
    }
    else {
        const project = projects.find(item => item.id === projectId);
        console.log(projects)
        const date = new Date(project.createdAt.seconds * 1000).toString().substr(0, 21);
        return (
            <div className="project-detail-container">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                            <Card.Header as="h4">{project.title}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>{project.subTitle}</Card.Subtitle>
                                <Card.Text>{project.content}</Card.Text>
                                <blockquote className="blockquote mb-0">
                                    <footer className="blockquote-footer">
                                        Poseted by {project.authorFirstName} {project.authorLastName}, <cite title="Source Title">{date}</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
