import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import Customizer from '../Customizer';
import LanguageSelector from '../LanguageSelector';
import LogoWhite from '../../../assets/img/logowhite.png'
import LogoBlack from '../../../assets/img/logoblack.png'
import useColors from '../../customHooks/useColors';

const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
    const colors = useColors()

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
        <Toolbar>
            {/*mdUp ? <><h2 className='mt-2'>axelmry</h2><div className='ml-32' /></> : ''*/}
            { mdUp ? <div className='ml-2 mr-10'><img src={colors.activeMode === 'light' ? LogoWhite : LogoBlack} className="website-logo" style={{height: '50px'}} /></div> : '' }
            
            <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            size="large"
            sx={{
                display: {
                lg: 'flex',
                xs: 'none',
                },
            }}
            >
            <FeatherIcon icon="menu" />
            </IconButton>

            <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
                display: {
                lg: 'none',
                xs: 'flex',
                },
            }}
            >
            <FeatherIcon icon="menu" width="20" height="20" />
            </IconButton>
            
            <Box
            sx={{
                width: '1px',
                backgroundColor: 'rgba(0,0,0,0.1)',
                height: '25px',
                ml: 1,
                mr: 1,
            }}
            />
            {/* ------------ End Menu icon ------------- */}

            <LanguageSelector />
            <Customizer />
        </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
