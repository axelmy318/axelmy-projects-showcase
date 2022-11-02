import React, { useState } from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentProject } from '../redux/Projects/ProjectsAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { TbExternalLink as LogoUrl } from 'react-icons/tb'


const ProjectPage = ({ path, undefinedProject }) => {
    const project = useCurrentProject()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState("README")
    const navigate = useNavigate();

    console.log(project)

    if(!undefinedProject && (project === null || project === undefined || project.path !== path)) {
        console.log("Refreshing project")
        console.log(pathname)
        dispatch(setCurrentProject(path))
        return (<></>)
    }

    const getTabs = () => {
        if(project.type === 'package') {
            return [
                { label: 'README', 'href' : '/' },
                { label: 'Examples', 'href' : '/' }
            ]
        }
        else if(project.type === 'website') {
            return [
                { label: 'README', 'href' : '/' },
            ]
        }
        else if(project.type === 'application') {
            return [
                { label: 'README', 'href' : '/' },
            ]
        }
        else if(project.type === 'miscellaneous') {
            return [
                { label: 'README', 'href' : '/' },
            ]
        }

        return [];
    }


    return (
        <div className='main-content'>
           <div className='inline-flex mb-4 mt-4 ml-10'>
                {getTabs().map((tab, index) => <>
                    <div key={index} style={{marginRight: index === getTabs().length-1 ? '50px': '10px'}}>
                        <Button variant={tab.label === activeTab ? 'contained' : 'outlined'} size={'large'}>
                            {tab.label}
                        </Button>
                    </div>
                </>)}

                {project.npmjs && <div style={{marginRight: '10px'}}>
                    <Button variant={'outlined'} size={'large'}>
                        <LogoUrl />&nbsp;&nbsp;npmjs
                    </Button>
                </div>}
                {project.github && <div style={{marginRight: '10px'}}>
                    <Button variant={'outlined'} size={'large'}>
                        <LogoUrl />&nbsp;&nbsp;GitHub
                    </Button>
                </div>}
                {project.website && <div style={{marginRight: '10px'}}>
                    <Button variant={'outlined'} size={'large'}>
                        <LogoUrl />&nbsp;&nbsp;Website
                    </Button>
                </div>}
                {project.releases && <div style={{marginRight: '10px'}}>
                    <Button variant={'outlined'} size={'large'}>
                        <LogoUrl />&nbsp;&nbsp;Releases
                    </Button>
                </div>}
                {project.customLinks && project.customLinks.map((link, index) => <div key={index} style={{marginRight: '10px'}}>
                    <Button variant={'outlined'}>
                        <LogoUrl />&nbsp;&nbsp;{link.label}
                    </Button>
                </div>)}
            </div>
            <Row>
                {!undefinedProject 
                ? 
                <div>
                <Col md={12} className='no-padding readme-col'>
                    {activeTab === "README" && <MarkdownPrinter username={project.github.username} repository={project.github.repository} branch={project.github.mainBranch} />}
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
