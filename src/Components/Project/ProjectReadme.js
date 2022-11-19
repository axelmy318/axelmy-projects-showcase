import { Grid, useMediaQuery } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { MarkdownPrinter } from 'react-readme-printer';
import useCustomizer from '../customHooks/useCustomizer';
import ShieldImage from '../ShieldImage';
import { useReadmeInCurrentLanguageForCurrentProject } from '../customHooks/language/useLanguage';

const ProjectReadme = ({ project }) => {
    const customizer = useCustomizer()
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const Item = styled(Paper)(({ theme }) => ({
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.25)',
        minWidth: '90px',
    }));
      
    return (
        <div>
            <Grid container spacing={2} rowSpacing={1} sx={{
                ml: lgUp ? 3 : 0
            }}>
                {project.type === 'package' && <Grid item xs={"auto"}>
                    <Item sx={{borderRadius: '9px'}}>
                        <ShieldImage label={'DOWNLOADS'} endpoint={'npm/dt'} path={project.path.substring(1)} />
                    </Item>
                </Grid>}
                {project.github && <Grid item xs={"auto"}>
                    <Item sx={{borderRadius: '9px'}}>
                        <ShieldImage label={'VERSION'} endpoint={'github/package-json/v'} repository={project.github.repository} username={project.github.username} />
                    </Item>
                </Grid>}
                {project.releases && project.github && <Grid item xs={"auto"}>
                    <Item sx={{borderRadius: '9px'}}>
                        <ShieldImage label={'RELEASE'} endpoint={'github/v/release'} repository={project.github.repository} username={project.github.username} />
                    </Item>
                </Grid>}
                {project.type === 'package' && <Grid item xs={"auto"}>
                    <Item sx={{borderRadius: '9px'}}>
                        <ShieldImage label={'LICENSE'} endpoint={'npm/l'} path={project.path.substring(1)} />
                    </Item>
                </Grid>}
                {project.type === 'website' && <Grid item xs={"auto"}>
                    <Item sx={{borderRadius: '9px'}}>
                        <ShieldImage label={'WEBSITE'} endpoint={'website'} url={project.website} />
                    </Item>
                </Grid>}
            </Grid>
            <MarkdownPrinter 
                username={project.github.username}
                repository={project.github.repository}
                branch={project.github.mainBranch}
                file={useReadmeInCurrentLanguageForCurrentProject()}
                mode={customizer.activeMode}
                onLoaded={() => window.scrollTo(0, 0)}
            />
        </div>
    )
}

export default ProjectReadme