import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCurrentProject } from '../redux/Projects/ProjectsAction';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ProjectNavButtons from './ProjectNavButtons';
import { useMediaQuery } from '@mui/material'
import ProjectExamples from './ProjectExamples';
import ProjectCommits from './ProjectCommits';
import useCurrentProject from '../customHooks/useCurrentProject';
import ProjectReadme from './ProjectReadme';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

const ProjectPage = ({ path, undefinedProject }) => {
    const project = useCurrentProject()
    let { '*': page } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const biggerThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    if(page === "") 
        page = '/'
    else
        page = "/" + page
    
    if(!undefinedProject && (project === null || project === undefined || project.path !== path)) {
        dispatch(setCurrentProject(path))
        return (<></>)
    }

    const getPageContent = () => {
        switch(page) {
            default:
            case "/":
                return <ProjectReadme project={project} />
            case "/examples":
                return <ProjectExamples project={project} />
            case "/commits":
                return <ProjectCommits project={project} mode={biggerThanMd ? 'desktop' : 'mobile'} />
        }
    }

    return (
        <div className='main-content'>
           <div className={`${biggerThanMd ? "inline-flex" : ""} mb-4 mt-2 ml-0`}>
                {!undefinedProject && <ProjectNavButtons project={project} active={page} isMobile={!biggerThanMd} />}
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

export default ProjectPage;
