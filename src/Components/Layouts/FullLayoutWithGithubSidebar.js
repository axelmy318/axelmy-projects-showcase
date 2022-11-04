import React, { useState } from 'react'
import { experimentalStyled, useMediaQuery, Container, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Footer from './footer/Footer'
import Customizer from './Customizer';
import { TopbarHeight, SidebarWidth, GithubSidebarWidth } from '../../assets/global/Theme-variable'
import { useSelector } from 'react-redux'
import GithubSidebar from './sidebar/GithubSidebar'

const MainWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
}));
const PageWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('lg')]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '64px',
  },
}));

const FullLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isGithubSidebarOpen, ] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const xlUp = useMediaQuery((theme) => theme.breakpoints.up('xl'));

    const customizer = useSelector(state => state.Customizer)

    return (
        <>
            <MainWrapper>
            <Header
                sx={{
                paddingLeft: isSidebarOpen && lgUp ? '0' : '',
                backgroundColor: customizer.activeMode === 'dark' ? '#20232a' : '#ffffff',
                boxShadow:'0px 7px 30px 0px rgb(90 114 123 / 11%)'
                }}
                toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                toggleMobileSidebar={() => setMobileSidebarOpen(true)}
            />

            <Sidebar
                isSidebardir={customizer.activeDir === 'ltr' ? 'left' : 'right'}
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
            />

            <PageWrapper>
                <Container
                maxWidth={false}
                sx={{
                    paddingTop: '20px',
                    paddingLeft: isSidebarOpen && lgUp ? `${SidebarWidth+50}px!important` : '',
                    marginLeft: isSidebarOpen && lgUp ? '100px!important' : lgUp ? '125px!important' : '0px!important',
                    marginRight: isGithubSidebarOpen && xlUp ? `${GithubSidebarWidth+50}px!important` : '',
                }}
                className={`transition-all duration-250 ${!xlUp ? 'small-media' : ''}`}
                >
                <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                    <Outlet />
                </Box>
                <Customizer />
                <Footer />
                </Container>
            </PageWrapper>

            {lgUp && <GithubSidebar
                isSidebardir={'left'}
                isSidebarOpen={isGithubSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)} 
            />}
            </MainWrapper>
        </>
    );
};

export default FullLayout;
