import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

export const ProjectDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className="project-detail-container">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h4">Card aaa Title - {id}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <blockquote className="blockquote mb-0">
                                    <footer className="blockquote-footer">
                                        Poseted by Mark , <cite title="Source Title">Today at 12:25 PM</cite>
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
