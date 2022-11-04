import React from 'react'
import GithubScraper, { Commits } from 'react-github-scraper'
import { Typography, Box } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot,
  } from '@mui/lab';
import getThemeDetails from '../../functions/getThemeDetails'
import moment from 'moment'
import useCustomizer from '../customHooks/useCustomizer';

const ProjectCommits = ({ project, mode }) => {
  return (
    <div className={`project-commits w-[${mode === 'desktop' ? "85" : "100"}%]`} >
        <GithubScraper username={project.github.username} repository={project.github.repository} branch={"project.github.mainBranch"}>
			<Timeline position="right" sx={[
				{ 
					color: 'rgba(0, 0, 0, 0.87)', 
				}
				]}>
				<Commits maxDisplayed={0} commitCallback={(c, i) => <Commit commit={c} key={i} mode={mode} />} />
			</Timeline>
		</GithubScraper>
    </div>
  )
}

const Commit = ({ commit, mode }) => {
    const customizer = useCustomizer()
    const theme = getThemeDetails(customizer.activeTheme)

	return (
		<TimelineItem
			sx={{
			mb: {
				xs: '10px',
				sm: '0',
			},
			}}
		>
			{mode === 'desktop' && <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary" minWidth={'170px'} flex={"0!important"}>
			{moment(commit.commit.author.date).format("MMMM Do YYYY")}
			{/*<br />
			{moment(commit.commit.author.date).format("h:MM a")}*/}
			</TimelineOppositeContent>}
			{mode === 'mobile' && <TimelineOppositeContent sx={{ m: 'auto 0'}} variant="body2" color="text.secondary" minWidth={'0px'} width={'0px'} flex={"0!important"} padding={'0!important'}></TimelineOppositeContent>}
			<TimelineSeparator>
				<TimelineConnector />
				{commit.author && <span style={{width:'52px', height: '52px', marginTop: '10px', marginBottom: '10px', borderRadius: '30%', boxShadow: '2px 3px 3px rgb(0 0 0 / 30%)'}}>{commit.author && commit.author.avatar_url && <img alt='Avatar' src={commit.author.avatar_url} width={'100%'} style={{borderRadius: '30%'}} />}</span>}
				{!commit.author && 
					<TimelineDot 
						color="secondary"
						sx={{
							p:'13px',
							color: 'white',
							borderRadius: '30%'
						}}
					>
						<FeatherIcon icon="user" width="22" height="22" />
					</TimelineDot>
					}
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={[
				mode === 'mobile' && {
					m: "0px",
					p: 0,
					pl: 1
				}
			]}>
				<Box sx={{ 
					bgcolor: customizer.activeMode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark, 
					p: 3, 
					borderRadius: 3 
				}}>
					<Typography sx={{color: customizer.activeMode === 'light' ? 'black' : 'white'}}>{commit.commit.message}</Typography>
					{commit.committer && commit.committer.login && <Typography variant="h6" component="p" fontStyle={'italic'} sx={{mt:2, color: customizer.activeMode === 'light' ? 'black' : 'white', ml: 2, textAlign: 'left'}}>
						- {commit.committer.login}
					</Typography>}
				</Box>
			</TimelineContent>
		</TimelineItem>
	)
}

ProjectCommits.defaultProps = {
	mode: 'desktop'
}

export default ProjectCommits