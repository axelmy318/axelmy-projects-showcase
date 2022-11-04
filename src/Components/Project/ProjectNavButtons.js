import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TbExternalLink as LogoUrl } from 'react-icons/tb'
import getThemeDetails from '../../functions/getThemeDetails';

import { CgReadme as LogoReadme } from 'react-icons/cg'
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

const ProjectNavButtons = ({ project, active, isMobile }) => {
    const navigate = useNavigate()
    const navigateTo = link => navigate(link) 
    const customizer = useSelector((state) => state.Customizer);
    const theme = getThemeDetails(customizer.activeTheme)

    const buttons = {
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
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;npmjs</>,
            url: project.npmjs,
            reactIcon: <IconContext.Provider value={{size: '50px'}}><LogoNpm /></IconContext.Provider>
        },
        github: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;GitHub</>,
            url: `https://github.com/${project.github.username}/${project.github.repository}.git`,
            reactIcon: <IconContext.Provider value={{size: '33px'}}><LogoGithub /></IconContext.Provider>
        },
        releases: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;Releases</>,
            url: project.releases,
            reactIcon: <IconContext.Provider value={{size: '30px'}}><LogoReleases /></IconContext.Provider>
        },
        website: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;Website</>,
            url: project.website,
            reactIcon: <IconContext.Provider value={{size: '27px'}}><LogoWebsite /></IconContext.Provider>
        }
    }

    let mainButtons = [];
    let secondaryButtons = []

    
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
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;{customLink.label}</>,
            url: customLink.url,
        }))
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
            <div style={{marginRight: '100px', minWidth: isMobile ? '92%' : '200px'}}>
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
                        justifyContent: 'center'
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
                                    {button.path && <span>{button.text}</span>}
                                    {!button.path && <>{button.text}</>}
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
            {renderButtons(mainButtons, true, isMobile)}
            {renderButtons(secondaryButtons, false, isMobile)}
        </>
    )
}

export default ProjectNavButtons;