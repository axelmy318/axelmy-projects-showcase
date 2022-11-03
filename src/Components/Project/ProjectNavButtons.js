import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TbExternalLink as LogoUrl } from 'react-icons/tb'
import getThemeDetails from '../../functions/getThemeDetails';

export const Tabs = {
    README: '/',
    EXAMPLES: '/examples',
    COMMITS: '/commits'
}

const ProjectNavButtons = ({ project, active, displayFewerNav }) => {
    const fewerNavAmount = 2
    const navigate = useNavigate()
    const navigateTo = link => navigate(link) 
    const customizer = useSelector((state) => state.Customizer);
    const theme = getThemeDetails(customizer.activeTheme)

    const buttons = {
        readme: {
            id: Tabs.README,
            text: 'README',
            path: '/',
        },
        examples: {
            id: Tabs.EXAMPLES,
            text: 'Examples',
            path: '/examples',
        },
        commits: {
            id: Tabs.COMMITS,
            text: 'Commits',
            path: '/commits',
        },
        npmjs: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;npmjs</>,
            url: project.npmjs
        },
        github: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;GitHub</>,
            url: `https://github.com/${project.github.username}/${project.github.repository}.git`
        },
        releases: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;Releases</>,
            url: project.releases
        },
        website: {
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;Website</>,
            url: project.website
        }
    }

    let mainButtons = [];
    let secondaryButtons = []

    
    mainButtons.push(buttons.readme)
    if(project.examples && (!displayFewerNav || (displayFewerNav && mainButtons.length < fewerNavAmount)))
        mainButtons.push(buttons.examples)
    if(project.github && (!displayFewerNav || (displayFewerNav && mainButtons.length < fewerNavAmount)))
        mainButtons.push(buttons.commits)
    if(project.npmjs && (!displayFewerNav || (displayFewerNav && secondaryButtons.length < fewerNavAmount)))
        secondaryButtons.push(buttons.npmjs)
    if(project.github && (!displayFewerNav || (displayFewerNav && secondaryButtons.length < fewerNavAmount)))
        secondaryButtons.push(buttons.github)
    if(project.releases && (!displayFewerNav || (displayFewerNav && secondaryButtons.length < fewerNavAmount)))
        secondaryButtons.push(buttons.releases)
    if(project.website && (!displayFewerNav || (displayFewerNav && secondaryButtons.length < fewerNavAmount)))
        secondaryButtons.push(buttons.website)

    if(project.customLinks) {
        project.customLinks.forEach(customLink => secondaryButtons.push({
            text: <><LogoUrl style={{marginTop: '5px'}} />&nbsp;{customLink.label}</>,
            url: customLink.url
        }))
    }


    const handleButtonClick = button => {
        if(button.path) {
            navigateTo(project.path + button.path)
        } else if (button.url)
            window.open(button.url, '_blank');
    }

    const renderButtons = (buttons, usePrimaryColor = true) => {
        const getBackgroundColor = (button) => {
            if(button.path && button.path === active) {
                return customizer.activeMode === 'light' ? usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.light : usePrimaryColor ? theme.palette.primary.light : theme.palette.secondary.dark
            }
            return ""
        }  

        return (
            <div style={{marginRight: '100px', minWidth: displayFewerNav ? '96%' : '200px'}}>
            <Card
                sx={{
                p: 0,
                height: '60px',
                display: 'inline-flex',
                width:"100%",
                }}
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
                                {button.path && <span>{button.text}</span>}
                                {!button.path && <>{button.text}</>}
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
            {renderButtons(mainButtons)}
            {renderButtons(secondaryButtons, false)}
        </>
    )
}

export default ProjectNavButtons;
