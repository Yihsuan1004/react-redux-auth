import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

export const ProjectDetail = (props) => {
    console.log(props)
    const project = props.location.state.project;
    const date = new Date(project.createdAt.seconds * 1000).toString().substr(0,21);

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
