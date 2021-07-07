import React from 'react';
import { Card } from 'react-bootstrap';

export const ProjectSummary = () => {
    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                        Poseted by Mark , <cite title="Source Title">Today at 12:25 PM</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}