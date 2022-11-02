import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import { GithubSidebarWidth } from '../../../assets/global/Theme-variable';
import Scrollbar from '../Scrollbar'
import { useSelector } from 'react-redux';
import GithubScraper, { Languages, StargazersCount, Topics, Contributors, Size, PushedAt, OwnerAvatar, OwnerFollowersCount, PublicReposCount, MemberSince } from 'react-github-scraper';

const GithubSidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
	const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
	const xlUp = useMediaQuery((theme) => theme.breakpoints.up('xl'))
	const project = useCurrentProject()
	const { pathname } = useLocation()

	
	const SidebarContent = (
		<Scrollbar style={{ height: 'calc(100vh - 5px)' }}>
			<Box sx={{ p: 2 }}>
					<Box>
						{
						pathname !== "/" 
						?
						project != null && 
						<div className='text-center'>
						<h2 className='text-center'>GitHub Repo</h2>
						<GithubScraper 
							username={project.github.username} 
							repository={project.github.repository} 
							branch={project.github.mainBranch}
						>
							<StargazersCount prefix="⭐&nbsp;" label={'Stargazers count'} />
							<div className='separator'></div>
							<div><Languages label={'Languages'} /></div>
							<div className='separator'></div>
							<Topics label={'Topics'} />
							<div className='separator'></div>
							<Contributors label={'Contributors'} />
							<div className='separator'></div>
							<PushedAt label={'Last push'} />
							<div className='separator'></div>
							<Size label={'Size'} />
						</GithubScraper>
						</div>
						:
						<div className='text-center'>
						<h2 className='text-center'>GitHub Profile</h2>
						<GithubScraper
							username={"axelmy318"} 
							repository={"axelmy318"} 
							branch={"main"}
						>
							<OwnerAvatar label='Avatar' imageSize={'100%'} />
							<OwnerFollowersCount label='Followers' />
							<PublicReposCount prefix='📦&nbsp;' label='Public repos' />
							<MemberSince label='Joined' />
						</GithubScraper>
						</div> 
						}
					</Box>
			</Box>
		</Scrollbar>
	);
	if (xlUp) {
		return (
			<Drawer
				anchor="right"
				open={isSidebarOpen}
				variant="persistent"
				PaperProps={{
					sx: {
					width: GithubSidebarWidth,
					top: lgUp ? '100px' : '0px',
					right: lgUp ? '30px' : '',
					borderRadius: lgUp ? '9px' : '0',
					border: '0',
					height: 'calc(100vh - 200px)',
					boxShadow:'0px 7px 30px 0px rgb(90 114 123 / 11%)'
					},
				}}
			>
				{SidebarContent}
			</Drawer>
		);
	}
	return (
		<Drawer
		anchor="right"
		open={isMobileSidebarOpen}
		onClose={onSidebarClose}
		PaperProps={{
			sx: {
			width: GithubSidebarWidth,
			border: '0 !important',
			},
		}}
		variant="temporary"
		>
			{SidebarContent}
		</Drawer>
	);
};

GithubSidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

const useCurrentProject = () => {
    const projects = useSelector(state => state.Projects)

    return projects.currentProject
}

export default GithubSidebar;
