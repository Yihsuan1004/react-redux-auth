import React from 'react';
import { ProjectSummary } from './ProjectSummary'
import { Card } from 'react-bootstrap';
import  { ReactComponent as Loading } from '../../assets/img/loading.svg'

export const ProjectList = ({projects}) => {

    return (
        <div className="project-list-container">
            <Card>
                <Card.Header as="h4">Posts</Card.Header>
                <Card.Body>
                   {!projects ? <Loading />
                   :projects.map(project =>{
                       return(
                           <ProjectSummary project={project} key={project.id}/>
                       )
                   })}
                </Card.Body>
            </Card>
        </div>
    )
}