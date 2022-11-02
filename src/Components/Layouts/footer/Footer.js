import React from 'react';
import { Box, Typography } from '@mui/material';
import { TbBrandGithub } from 'react-icons/tb'

const Footer = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography>Created by Axel Milliery | <a href={"https://github.com/axelmy318/axelmy-projects-showcase"} target="_blank" >github</a></Typography>
  </Box>
);

export default Footer;
