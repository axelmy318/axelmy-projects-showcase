import React, { useState } from 'react'
import { experimentalStyled, useMediaQuery, Container, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Footer from './footer/Footer'
import Customizer from './Customizer';
import { TopbarHeight } from '../../assets/global/Theme-variable'
import useCustomizer from '../customHooks/useCustomizer'

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
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const customizer = useCustomizer()

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
                    paddingLeft: isSidebarOpen && lgUp ? '310px!important' : '',
                }}
                className='transition-all duration-250'
                >
                <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                    <Outlet />
                </Box>
                <Customizer />
                <Footer />
                </Container>
            </PageWrapper>
            </MainWrapper>
        </>
    );
};

export default FullLayout;
