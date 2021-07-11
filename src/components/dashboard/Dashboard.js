import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ProjectList } from '../projects/ProjectList';
import { Notification } from '../dashboard/Notification';
import { useSelector } from 'react-redux';
import { useFirestoreConnect  } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
export const Dashboard = () => {
    useFirestoreConnect([{  collection:'projects' } ]);
    const projects = useSelector((state) => {
        return state.firestore.ordered.projects
    })
    const userInfo = useSelector(state => state.firebase.profile);
    const auth = useSelector(state => state.firebase.auth);
    if(!auth.uid) return <Redirect from="/dashboard" to="/signIn"/>
    return (
        <div className="dashboard-container">
            <Container>
                <Row>
                    <Col>
                        <h1 className="dashboard-title"
                        >Welcome! <span className="text-info">{userInfo.firstName}{userInfo.lastName}</span></h1>
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

