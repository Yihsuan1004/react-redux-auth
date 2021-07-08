import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProjectSummary = ({project}) => {
    console.log(project)
    const date = new Date(project.createdAt.seconds * 1000).toString().substr(0,21);
    return (
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.subTitle}</Card.Text>
                    <Card.Link as={Link} to={{
                        pathname:`/project/${project.id}`,
                        state: {project}
                    }}>See more</Card.Link>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">
                            Poseted by {project.authorFirstName} {project.authorLastName} , <cite title="Source Title">{date}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
    )
}