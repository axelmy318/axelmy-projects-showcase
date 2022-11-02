import React, { useState } from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import GithubScraper, { OwnerAvatar, OwnerFollowersCount, MemberSince, PublicReposCount } from 'react-github-scraper';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentProject } from '../redux/Projects/ProjectsAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const ProjectPage = ({ path, undefinedProject }) => {
    const project = useCurrentProject()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState("readme")
    const navigate = useNavigate();

    console.log(project)

    if(!undefinedProject && (project === null || project === undefined || project.path !== path)) {
        console.log("Refreshing project")
        console.log(pathname)
        dispatch(setCurrentProject(path))
        return (<></>)
    }


    return (
        <div className='main-content'>
            <Row>
                {!undefinedProject 
                ? 
                <div>
                <Col md={12} className='no-padding readme-col'>
                    {activeTab === "readme" && <MarkdownPrinter username={project.github.username} repository={project.github.repository} branch={project.github.mainBranch} />}
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
                {/*<Col md={3} className='no-padding github-scraper-sidebar'>
                    <GithubScraper username={'axelmy318'} repository={'axelmy318'} branch={'main'}>
                        <OwnerAvatar label='Avatar' imageSize={'100%'} />
                        <OwnerFollowersCount label='Followers' />
                        <PublicReposCount prefix='📦&nbsp;' label='Public repos' />
                        <MemberSince label='Member since' />
                    </GithubScraper>
                </Col>*/}
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
