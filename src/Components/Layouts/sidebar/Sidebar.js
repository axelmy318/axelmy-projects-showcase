import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { SidebarWidth } from '../../../assets/global/Theme-variable';
import Scrollbar from '../Scrollbar'
import useProjects from '../../customHooks/useProjects';
import { useTexts } from '../../customHooks/language/useLanguage';

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true)
  const { pathname } = useLocation()
  let pathDirect = pathname
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'))
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
  const texts = useTexts()

  pathDirect = "/"+pathDirect.split("/")[1]

  const handleClick = (index, href) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const projects = useProjects();

  const SidebarContent = (
    <Scrollbar style={{ height: 'calc(100vh - 5px)' }}>
      <Box sx={{ p: 2 }} className='sidebarv2 override-link-color'>
        <Box>
          <List>
            {projects.menuItems.map((item, index) => {
              // {/********SubHeader**********/}
              if (item.subheader) {
                return (
                  <li key={item.subheader}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      fontSize="100%"
                      sx={{ mb: 1, mt: 3, ml: 1, opacity: '0.6' }}
                    >
                      {texts.get(item.subheader)}
                    </Typography>
                  </li>
                );
                // {/********If Sub Menu**********/}
                /* eslint no-else-return: "off" */
              } else if (item.children) {
                return (
                  <React.Fragment key={item.title}>
                    <ListItem
                      button
                      component="li"
                      onClick={() => handleClick(index, item.href)}
                      selected={pathWithoutLastPart === item.href}
                      sx={{
                        mb: 1,
                        ...(pathWithoutLastPart === item.href && {
                          color: 'white',
                          backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
                        }),

                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathWithoutLastPart === item.href && {
                            color: 'white',
                          }),
                        }}
                      >
                        { item.reactIcon ? item.reactIcon : <FeatherIcon icon={item.icon} width="20" height="20" /> }
                      </ListItemIcon>
                      <ListItemText>{item.title}</ListItemText>
                      {index === open || pathWithoutLastPart === item.href ? (
                        <FeatherIcon icon="chevron-down" size="16" />
                      ) : (
                        <FeatherIcon icon="chevron-right" size="16" />
                      )}
                    </ListItem>
                    <Collapse in={index === open} timeout="auto" unmountOnExit>
                      <List component="li" disablePadding>
                        {item.children.map((child) => {
                          return (
                            <ListItem
                              key={child.title}
                              button
                              component={NavLink}
                              to={child.href}
                              onClick={onSidebarClose}
                              selected={pathDirect === child.href}
                              sx={{
                                mb: 1,
                                ...(pathDirect === child.href && {
                                  color: 'white',
                                  backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
                                }),
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  svg: { width: '14px', marginLeft: '3px' },
                                  ...(pathDirect === child.href && {
                                    color: 'primary.main',
                                  }),
                                }}
                              >
                                <FeatherIcon icon={child.icon} width="20" height="20" />
                              </ListItemIcon>
                              <ListItemText>{child.title}</ListItemText>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
                // {/********If Sub No Menu**********/}
              } else {
                return (
                  <List component="li" disablePadding key={item.title ? item.title: item.TEXT_KEY}>
                    <ListItem
                      className='listItem'
                      onClick={() => handleClick(index, item.href)}
                      button
                      component={NavLink}
                      disabled={item.disabled}
                      to={item.href}
                      selected={pathDirect === item.href}
                      sx={{
                        mb: 1,
                        ...(pathDirect === item.href && {
                          color: 'white!important',
                          backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
                        }),
                        '&:hover': {
                          '& > .sidebar-item-text' : {
                            color: (theme) => `${theme.palette.primary.main}`,
                            ...(pathDirect === item.href && {
                              color: 'white'
                            }),
                          }
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathDirect === item.href && { color: 'white' }),
                        }}
                      >
                      { item.reactIcon ? item.reactIcon : <FeatherIcon icon={item.icon} width="20" height="20" /> }
                      </ListItemIcon>
                      <ListItemText className='sidebar-item-text' onClick={onSidebarClose}>{item.TEXT_KEY ? texts.get(item.TEXT_KEY) : item.title}</ListItemText>
                    </ListItem>
                  </List>
                );
              }
            })}
          </List>
        </Box>
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
            sx: {
              width: SidebarWidth,
              top: lgUp ? '100px' : '0px',
              left: lgUp ? '30px' : '',
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
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
