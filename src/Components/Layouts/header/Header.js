import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import FeatherIcon from 'feather-icons-react';
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Menu,
    Typography,
    Chip,
    Button,
    useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
        <Toolbar>
            {mdUp ? <><h2>APS</h2><div className='ml-36' /></> : ''}
            
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
            {/* ------------ End Menu icon ------------- */}

            <Box
            sx={{
                width: '1px',
                backgroundColor: 'rgba(0,0,0,0.1)',
                height: '25px',
                ml: 1,
                mr: 1,
            }}
            />
            {/* ------------------------------------------- */}
            {/* Profile Dropdown */}
            {/* ------------------------------------------- */}
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
