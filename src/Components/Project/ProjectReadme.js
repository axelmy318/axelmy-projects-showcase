import { Grid, useMediaQuery } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { MarkdownPrinter } from 'react-readme-printer';
import useCustomizer from '../customHooks/useCustomizer';
import useColors from '../customHooks/useColors';

const ProjectReadme = ({ project }) => {
    const customizer = useCustomizer()
    const style = 'for-the-badge'
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const colors = useColors()

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.30)',
      }));
      https://img.shields.io/npm/l/react-github-scraper?color=%23fff&style=flat-square
    return (
        <div>
                <Grid container spacing={2} sx={{
                    ml: lgUp ? 3 : 0
                }}>
                    <Grid item xs={"auto"}>
                        <Item>
                            <img src={`https://img.shields.io/npm/dt/${project.path.substring(1)}?label=Downloads&style=${style}&color=%23${(colors.palette.primary.main.substring(1))}`} alt="downloads" style={{borderRadius: '9px'}} />
                        </Item>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <Item>
                            <img src={`https://img.shields.io/npm/l/${project.path.substring(1)}?label=License&style=${style}&color=%23${(colors.palette.primary.main.substring(1))}`} alt="downloads" style={{borderRadius: '9px'}} />
                        </Item>
                    </Grid>
                </Grid>
            <MarkdownPrinter username={project.github.username} repository={project.github.repository} branch={project.github.mainBranch} mode={customizer.activeMode} />
        </div>
    )
}

export default ProjectReadme