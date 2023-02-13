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
import GithubScraper, { Languages, StargazersCount, Topics, Contributors, Size, PushedAt, OwnerAvatar, OwnerFollowersCount, PublicReposCount, MemberSince } from 'react-github-scraper';
import useCurrentProject from '../../customHooks/useCurrentProject';
import useColors from '../../customHooks/useColors';
import useLanguage, { useTexts } from '../../customHooks/language/useLanguage';

import 'moment/dist/locale/fr'

const GithubSidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
	const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
	const xlUp = useMediaQuery((theme) => theme.breakpoints.up('xl'))
	const project = useCurrentProject()
	const { pathname } = useLocation()
	const texts = useTexts()
	const colors = useColors()

	const SidebarContent = (
		<Scrollbar style={{ height: 'calc(100vh - 5px)' }}>
			<Box sx={{ p: 2 }}>
					<Box>
						{
						pathname !== "/" 
						?
						project != null && 
						<div className='text-center github-sidebar'>
						<h3 className='text-center'>{texts.get("GITHUB_REPO")}</h3>
						<GithubScraper 
							username={project.github.username} 
							repository={project.github.repository} 
							branch={project.github.mainBranch}
						>
							<Contributors label={texts.get("CONTRIBUTORS")} />
							<div className='separator'></div>
							<div>
								<Languages 
									label={texts.get("LANGUAGES")}
									translucid={true}
									gradientColors={[colors.palette.primary.main, colors.palette.secondary.main]}
								/>
							</div>
							<div className='separator'></div>
							<StargazersCount prefix="⭐&nbsp;" label={texts.get("STARGAZERS_COUNT")} />
							<div className='separator'></div>
							<div style={{
								borderCollapse: "collapse",
								boxSizing: "border-box",
								display: "block",
								lineHeight: "18px",
								overflowWrap: "break-word",
							}}>
								<Topics label={texts.get("TOPICS")} topicCallback={(topic, index) => <Topic topic={topic} key={index} /> } />
							</div>
							<div className='separator'></div>
							<PushedAt label={texts.get("LAST_PUSH")} />
							<div className='separator'></div>
							<Size label={texts.get("SIZE")} />
						</GithubScraper>
						</div>
						:
						<div className='text-center github-sidebar'>
						<h3 className='text-center'>{texts.get("GITHUB_PROFILE")}</h3>
						<GithubScraper
							username={"axelmy318"} 
							repository={"axelmy318"} 
							branch={"main"}
						>
							<OwnerAvatar label={texts.get("AVATAR")} imageSize={'100%'} />
							<div className='separator'></div>
							<OwnerFollowersCount label={texts.get("FOLLOWERS")} />
							<div className='separator'></div>
							<PublicReposCount prefix='📦&nbsp;' label={texts.get("PUBLIC_REPOS")} />
							<div className='separator'></div>
							<MemberSince label={texts.get("JOINED")} />
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
					height: 'calc(100vh - 130px)',
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

const Topic = ({ topic }) => {
	const colors = useColors()

	return(
	<Box component={"span"} sx={{
		backgroundColor: colors.activeMode === 'light' ? colors.palette.primary.light : colors.palette.secondary.main,
		borderRadius: '20px',
		fontSize: '70%',
		margin: "3px",
		display: "inline-block",
		padding: "5px 10px",
		"&:hover": {
			backgroundColor: colors.activeMode === 'light' ? colors.palette.primary.main : colors.palette.secondary.dark,
			color: 'white',
			cursor: 'pointer'
		}
	}}>
		{topic}
	</Box>
	)
}

GithubSidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default GithubSidebar;
