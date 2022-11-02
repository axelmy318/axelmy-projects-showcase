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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // 2
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    // 4
    const [anchorEl4, setAnchorEl4] = React.useState(null);

    const handleClick4 = (event) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
    };

    // drawer
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerClose = () => {
        setShowDrawer(false);
    };

    // drawer top
    const [showDrawer2, setShowDrawer2] = useState(false);

    const handleDrawerClose2 = () => {
        setShowDrawer2(false);
    };

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
        <Toolbar>
            {mdUp ? <><div className='ml-36' /></> : ''}
            
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

            <Box flexGrow={1} />
            {/* ------------------------------------------- */}
            {/* Messages Dropdown */}
            {/* ------------------------------------------- */}
            <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            onClick={handleClick2}
            >
            <Badge variant="dot" color="primary">
                <FeatherIcon icon="message-square" width="20" height="20" />
            </Badge>
            </IconButton>
            <Menu
            id="msgs-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            sx={{
                '& .MuiMenu-paper': {
                width: '385px',
                right: 0,
                top: '70px !important',
                },
                '& .MuiList-padding': {
                p: '30px',
                },
            }}
            >
            <Box
                sx={{
                mb: 1,
                }}
            >
                <Box display="flex" alignItems="center">
                <Typography variant="h4" fontWeight="500">
                    Messages
                </Typography>
                <Box
                    sx={{
                    ml: 2,
                    }}
                >
                    <Chip
                    size="small"
                    label="5 new"
                    sx={{
                        borderRadius: '6px',
                        pl: '5px',
                        pr: '5px',
                        backgroundColor: (theme) => theme.palette.secondary.main,
                        color: '#fff',
                    }}
                    />
                </Box>
                </Box>
            </Box>

            <Button
                sx={{
                mt: 2,
                display: 'block',
                width: '100%',
                }}
                variant="contained"
                color="primary"
                onClick={handleClose2}
            >
                <Link
                to="/email"
                style={{
                    color: '#fff',
                    width: '100%',
                    display: 'block',
                    textDecoration: 'none',
                }}
                >
                See all messages
                </Link>
            </Button>
            </Menu>
            {/* ------------------------------------------- */}
            {/* End Messages Dropdown */}
            {/* ------------------------------------------- */}
            {/* ------------------------------------------- */}
            {/* Notifications Dropdown */}
            {/* ------------------------------------------- */}
            <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
            <Badge variant="dot" color="secondary">
                <FeatherIcon icon="bell" width="20" height="20" />
            </Badge>
            </IconButton>
            <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            sx={{
                '& .MuiMenu-paper': {
                width: '385px',
                right: 0,
                top: '70px !important',
                },
                '& .MuiList-padding': {
                p: '30px',
                },
            }}
            >
            <Box
                sx={{
                mb: 1,
                }}
            >
                <Box display="flex" alignItems="center">
                <Typography variant="h4" fontWeight="500">
                    Notifications
                </Typography>
                <Box
                    sx={{
                    ml: 2,
                    }}
                >
                    <Chip
                    size="small"
                    label="5 new"
                    sx={{
                        borderRadius: '6px',
                        pl: '5px',
                        pr: '5px',
                        backgroundColor: (theme) => theme.palette.warning.main,
                        color: '#fff',
                    }}
                    />
                </Box>
                </Box>
            </Box>
            
            <Button
                sx={{
                mt: 2,
                display: 'block',
                width: '100%',
                }}
                variant="contained"
                color="primary"
                onClick={handleClose}
            >
                <Link
                to="/email"
                style={{
                    color: '#fff',
                    width: '100%',
                    display: 'block',
                    textDecoration: 'none',
                }}
                >
                See all notifications
                </Link>
            </Button>
            </Menu>
            {/* ------------------------------------------- */}
            {/* End Notifications Dropdown */}
            {/* ------------------------------------------- */}

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
