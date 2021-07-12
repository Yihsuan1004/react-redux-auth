import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Loading } from '../../assets/img/loading.svg'

export const ProjectSummary = ({ projects }) => {
    // const date = new Date(projects.createdAt.seconds * 1000).toString().substr(0,21);
    if (!projects) {
        return <Loading />
    }
    return (
        <div>
            {projects.map(project => (
                <Card className="card-container" key={project.id}>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.subTitle}</Card.Text>
                        <Card.Link as={Link} to={{
                            pathname: `/projects/${project.id}`,
                            state: { project }
                        }}>See more</Card.Link>
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Poseted by {project.authorFirstName} {project.authorLastName} , <cite title="Source Title">{new Date(project.createdAt.seconds * 1000).toString().substr(0,21)}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}