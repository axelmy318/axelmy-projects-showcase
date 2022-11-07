import { Grid, useMediaQuery } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { MarkdownPrinter } from 'react-readme-printer';
import useCustomizer from '../customHooks/useCustomizer';
import useColors from '../customHooks/useColors';
import ShieldImage from '../ShieldImage';

const ProjectReadme = ({ project }) => {
    const customizer = useCustomizer()
    const style = 'for-the-badge'
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const colors = useColors()

    const Item = styled(Paper)(({ theme }) => ({
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.30)',
      }));
      https://img.shields.io/npm/l/react-github-scraper?color=%23fff&style=flat-square
    return (
        <div>
                <Grid container spacing={2} rowSpacing={1} sx={{
                    ml: lgUp ? 3 : 0
                }}>
                    {project.type === 'package' && <Grid item xs={"auto"}>
                        <Item sx={{borderRadius: '9px'}}>
                            <ShieldImage label={'Downloads'} endpoint={'npm/dt'} path={project.path.substring(1)} />
                        </Item>
                    </Grid>}
                    {project.github && <Grid item xs={"auto"}>
                        <Item sx={{borderRadius: '9px'}}>
                            <ShieldImage label={'Release'} endpoint={'github/package-json/v'} repository={project.github.repository} username={project.github.username} />
                        </Item>
                    </Grid>}
                    {project.releases && project.github && <Grid item xs={"auto"}>
                        <Item sx={{borderRadius: '9px'}}>
                            <ShieldImage label={'Build'} endpoint={'github/v/release'} repository={project.github.repository} username={project.github.username} />
                        </Item>
                    </Grid>}
                    {project.type === 'package' && <Grid item xs={"auto"}>
                        <Item sx={{borderRadius: '9px'}}>
                            <ShieldImage label={'License'} endpoint={'npm/l'} path={project.path.substring(1)} />
                        </Item>
                    </Grid>}
                    {project.type === 'website' && <Grid item xs={"auto"}>
                        <Item sx={{borderRadius: '9px'}}>
                            <ShieldImage label={'Website'} endpoint={'website'} url={project.website} />
                        </Item>
                    </Grid>}
                </Grid>
            <MarkdownPrinter username={project.github.username} repository={project.github.repository} branch={project.github.mainBranch} mode={customizer.activeMode} />
        </div>
    )
}

export default ProjectReadme