import React from 'react';
import { ProjectSummary } from './ProjectSummary'
import { Card } from 'react-bootstrap';

export const ProjectList = () => {
    return (
        <div className="project-list-container">
            <Card>
                <Card.Header as="h4">Posts</Card.Header>
                <Card.Body>
                    <ProjectSummary />
                    <ProjectSummary />
                    <ProjectSummary />
                </Card.Body>
            </Card>
        </div>
    )
}