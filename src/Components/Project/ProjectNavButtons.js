import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import getThemeDetails from '../../functions/getThemeDetails';

import { BiBookOpen as LogoReadme } from 'react-icons/bi'
import { FaCodeBranch as LogoCommits } from 'react-icons/fa'
import { VscCode as LogoExamples } from 'react-icons/vsc'
import { AiFillGithub as LogoGithub} from 'react-icons/ai'
import { DiNpm as LogoNpm } from 'react-icons/di'
import { AiOutlineCodeSandbox as LogoReleases} from 'react-icons/ai'
import { TfiWorld as LogoWebsite } from 'react-icons/tfi'
import { IconContext } from 'react-icons'

export const Tabs = {
    README: '/',
    EXAMPLES: '/examples',
    COMMITS: '/commits'
}

const ProjectNavButtons = ({ author, project, active, isMobile }) => {
    const navigate = useNavigate()
    const navigateTo = link => navigate(link) 
    const customizer = useSelector((state) => state.Customizer);
    const theme = getThemeDetails(customizer.activeTheme)

    let buttons = {}, authorButtons = {}
    if(project) {
        buttons = {
            readme: {
                id: Tabs.README,
                text: 'README',
                path: '/',
                reactIcon: <IconContext.Provider value={{size: '33px'}}><LogoReadme /></IconContext.Provider>
            },
            examples: {
                id: Tabs.EXAMPLES,
                text: 'Examples',
                path: '/examples',
                reactIcon: <IconContext.Provider value={{size: '35px'}}><LogoExamples /></IconContext.Provider>
            },
            commits: {
                id: Tabs.COMMITS,
                text: 'Commits',
                path: '/commits',
                reactIcon: <IconContext.Provider value={{size: '27px'}}><LogoCommits /></IconContext.Provider>
            },
            npmjs: {
                text: <>npmjs</>,
                url: project.npmjs,
                reactIcon: <IconContext.Provider value={{size: '50px'}}><LogoNpm /></IconContext.Provider>
            },
            github: {
                text: <>GitHub</>,
                url: `https://github.com/${project.github.username}/${project.github.repository}.git`,
                reactIcon: <IconContext.Provider value={{size: '33px'}}><LogoGithub /></IconContext.Provider>
            },
            releases: {
                text: <>Releases</>,
                url: project.releases,
                reactIcon: <IconContext.Provider value={{size: '30px'}}><LogoReleases /></IconContext.Provider>
            },
            website: {
                text: <>Website</>,
                url: project.website,
                reactIcon: <IconContext.Provider value={{size: '27px'}}><LogoWebsite /></IconContext.Provider>
            }
        }
    } else if (author) {
        authorButtons = {
            npmjs: {
                text: <>npmjs</>,
                url: `https://www.npmjs.com/~${author.npmjs}`,
                reactIcon: <IconContext.Provider value={{size: '50px'}}><LogoNpm /></IconContext.Provider>
            },
            github: {
                text: <>GitHub</>,
                url: `https://github.com/${author.github}`,
                reactIcon: <IconContext.Provider value={{size: '33px'}}><LogoGithub /></IconContext.Provider>
            }
        }
    }

    let mainButtons = [];
    let secondaryButtons = []

    if(project) {
        mainButtons.push(buttons.readme)
        if(project.examples/* && (!isMobile || (isMobile && mainButtons.length < fewerNavAmount))*/)
            mainButtons.push(buttons.examples)
        if(project.github/* && (!isMobile || (isMobile && mainButtons.length < fewerNavAmount))*/)
            mainButtons.push(buttons.commits)
        if(project.github/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(buttons.github)
        if(project.npmjs/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(buttons.npmjs)
        if(project.releases/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(buttons.releases)
        if(project.website/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(buttons.website)
    
        if(project.customLinks) {
            project.customLinks.forEach(customLink => secondaryButtons.push({
                ...customLink,
                text: <>{customLink.label}</>,
                url: customLink.url,
            }))
        }
    } else if (author) {
        if(author.github/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(authorButtons.github)
        if(author.npmjs/* && (!isMobile || (isMobile && secondaryButtons.length < fewerNavAmount))*/)
            secondaryButtons.push(authorButtons.npmjs)
    }


    const handleButtonClick = button => {
        if(button.path) {
            navigateTo(project.path + button.path)
        } else if (button.url)
            window.open(button.url, '_blank');
    }

    const renderButtons = (buttons, usePrimaryColor = true, useIcons=false) => {
        const getBackgroundColor = (button) => {
            if(button.path && button.path === active) {
                return customizer.activeMode === 'light' ? usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.light : usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.dark
            }
            return ""
        }  

        return (
            <div style={{marginRight: '100px', minWidth: isMobile ? '92%' : '400px'}}>
            <Card
                sx={
                [
                    {
                    p: 0,
                    height: '60px',
                    display: 'inline-flex',
                    width:"100%",
                    },
                    isMobile && {
                        mt: 0
                    }
                ]
                }
            >
                {buttons.map((button, index, array) => (
                    <CardContent
                        key={index}
                        sx={{
                        borderRight: {
                            xs: '0',
                            sm: index === array.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.1)',
                        },
                        padding: '10px 20px !important',
                        '& :last-child': {
                            borderRight: '0',
                        },
                        width: `${100/array.length}%`,
                        ":hover": {
                            backgroundColor: customizer.activeMode === 'light' ? usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.light : usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.dark
                        },
                        backgroundColor: getBackgroundColor(button),
                        display: 'flex',
                        justifyContent: 'center',
                        }}
                        className="hover:drop-shadow-xl cursor-pointer lg:hover:scale-[1.04] transition-all duration-100"
                        onClick={() => handleButtonClick(button)}
                    >
                        <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={"center"}
                        textAlign={"center"}
                        width='100%'
                        >
                            <Typography display={'inline-flex'} justifyContent={'center'} width='100%' variant="h3" sx={{color: usePrimaryColor ? theme.palette.primary.main : customizer.activeMode === 'light' ? theme.palette.secondary.dark : theme.palette.secondary.light}}>
                                {useIcons && button.reactIcon && <>{button.reactIcon}</>}
                                {!useIcons && <>
                                    <span className='span-center-container'>
                                        {button.reactIcon && <span style={{paddingRight: '10px'}}>{button.reactIcon}</span>}
                                        {button.path && <span>{button.text}</span>}
                                        {!button.path && <span>{button.text}</span>}
                                    </span>
                                </>}
                            </Typography>
                        </Box>
                        {button.subtext && <Typography color="textSecondary" variant="h6" fontWeight={"400"}>
                        {button.subtext}
                        </Typography>}
                    </CardContent>
                ))}
            </Card>
          </div>
        )
    }

    return (
        <>
            {mainButtons.length > 0 && renderButtons(mainButtons, true, isMobile)}
            {secondaryButtons.length > 0 && renderButtons(secondaryButtons, false, isMobile)}
        </>
    )
}

export default ProjectNavButtons;
