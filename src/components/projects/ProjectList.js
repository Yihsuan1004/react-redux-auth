import React, {useState} from 'react';
import { ProjectSummary } from './ProjectSummary'
import { Card } from 'react-bootstrap';
import { ReactComponent as Loading } from '../../assets/img/loading.svg'
import { PaginationItem } from '../layout/Pagination'

export const ProjectList = ({ projects }) => {
    const [page, setPage] = useState({
        projectsPerpage: 3,
        currentPage : 1,
    })
    const currentIndexOfLastProject = page.currentPage * page.projectsPerpage;
    const currentIndexOfFirstProject = currentIndexOfLastProject - page.projectsPerpage;
    const paginate = (pageNum) => setPage((prev)=> ({
        ...prev,
        currentPage: pageNum
    }));

    if(!projects){
        return <Loading />
    }
    const totalProjects = projects.length
    const currentProjects = projects.slice(currentIndexOfFirstProject,currentIndexOfLastProject);
    const pageNums = Math.ceil(totalProjects / page.projectsPerpage);
    console.log(pageNums)
    const prevPage = () => {
        if(page.currentPage > 1){
            setPage((prev)=> ({
                ...prev,
                currentPage: prev.currentPage - 1
            }))
        }
    }
    
    const nextPage = () => {
        if(page.currentPage < pageNums){
            setPage((prev)=> ({
                ...prev,
                currentPage: prev.currentPage + 1
            }))
        }
    }

    return (
        <div className="project-list-container">
            <Card>
                <Card.Header as="h4">Posts</Card.Header>
                <Card.Body>
                    <ProjectSummary projects={currentProjects} />
                    <PaginationItem pageNums={pageNums} 
                                    currentPage={page.currentPage}
                                    paginate={paginate}
                                    prevPage={prevPage}
                                    nextPage={nextPage}/>
                </Card.Body>
            </Card>
        </div>
    )
}