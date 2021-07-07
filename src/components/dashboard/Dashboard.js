import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ProjectList } from '../projects/ProjectList';
import { Notification } from '../dashboard/Notification';

export const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Container>
                <Row>
                    <Col>
                        <h1 className="dashboard-title">Welcome! <span className="text-primary">Cielo</span></h1>
                   </Col>
                </Row>
               <Row>
                   <Col>
                        <Notification />
                   </Col>
                   <Col>
                        <ProjectList />
                   </Col>
               </Row>
            </Container>
        </div>
    )
}