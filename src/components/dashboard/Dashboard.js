import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ProjectList } from '../projects/ProjectList';
import { Notification } from '../dashboard/Notification';
import { useSelector } from 'react-redux';
import { useFirestoreConnect  } from 'react-redux-firebase';

export const Dashboard = () => {
    useFirestoreConnect([{  collection:'projects' } ]);
    const projects = useSelector((state) => {
        console.log(state.firestore.ordered.projects)
        return state.firestore.ordered.projects
    })

    return (
        <div className="dashboard-container">
            <Container>
                <Row>
                    <Col>
                        <h1 className="dashboard-title"
                        >Welcome! <span className="text-primary">Cielo</span></h1>
                   </Col>
                </Row>
               <Row>
                   <Col>
                        <Notification />
                   </Col>
                   <Col>
                        <ProjectList projects={projects}/>
                   </Col>
               </Row>
            </Container>
        </div>
    )
}

