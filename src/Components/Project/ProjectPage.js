import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentProject } from '../redux/Projects/ProjectsAction';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ProjectNavButtons from './ProjectNavButtons';
import { useMediaQuery } from '@mui/material'
import ProjectExamples from './ProjectExamples';


const ProjectPage = ({ path, undefinedProject }) => {
    const project = useCurrentProject()
    let { '*': page } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const biggerThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

    if(page === "") 
        page = '/'
    else {
        page = "/" + page
    }

    
    if(!undefinedProject && (project === null || project === undefined || project.path !== path)) {
        dispatch(setCurrentProject(path))
        return (<></>)
    }

    const getPageContent = () => {
        switch(page) {
            default:
            case "/":
                return <MarkdownPrinter username={project.github.username} repository={project.github.repository} branch={project.github.mainBranch} />
            case "/examples":
                return <ProjectExamples project={project} />
        }
    }

    return (
        <div className='main-content'>
           <div className={`${biggerThanMd ? "inline-flex" : ""} mb-4 mt-2 ml-0`}>
                {!undefinedProject && <ProjectNavButtons project={project} active={page} />}
            </div>
            <Row>
                {!undefinedProject 
                ? 
                <div>
                <Col md={12} className='no-padding readme-col'>
                    {getPageContent()}
                </Col>
                </div>
                :
                <Col md={12} style={{textAlign: 'center', marginTop: '30%'}}>
                    <div>
                        <h2>The project you are looking for does not exist</h2>
                        <br />
                        <Button variant="contained" size="large" onClick={() => navigate('/')}>
                            Go to homepage
                        </Button>
                    </div>
                </Col>
                }
            </Row>
        </div>
    );
};

ProjectPage.defaultProps = {
    undefinedProject: false
}

const useCurrentProject = () => {
    const projects = useSelector(state => state.Projects)

    return projects.currentProject
}

export default ProjectPage;
