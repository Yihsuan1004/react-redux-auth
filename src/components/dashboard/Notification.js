import React from 'react';
import { Card } from 'react-bootstrap';

export const Notification = () => {
    return (
        <Card className="card-container">
            <Card.Header as="h4">
                Notification
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Card.Subtitle>
                        <span className="text-danger">Alan</span> Joined the Party
                    </Card.Subtitle>
                    a few seconds ago
                </Card.Text>
                <Card.Text>
                    <Card.Subtitle><span className="text-danger">Bella</span> Joined the Party</Card.Subtitle>
                    a few seconds ago
                </Card.Text>
            </Card.Body>
        </Card>
    )
}