import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ThemeSettings from './ThemeSettings'
import getRoutes from './routes/Router'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { useDispatch } from 'react-redux'
import { loadFromLocalStorage } from '../storage/localStorage'
import { setCustomizer } from './redux/Customizer/Action'
import useCustomizer from './customHooks/useCustomizer'
import useProjects from './customHooks/useProjects'

const App = () => {
    const projects = useProjects()
    const routing = useRoutes(getRoutes(projects.projects))
    const theme = ThemeSettings()
    const customizer = useCustomizer()
    const dispatch = useDispatch()
    
    if(!customizer.isLoaded) 
        dispatch(setCustomizer(loadFromLocalStorage('apsv2_customizer')))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {routing}
        </ThemeProvider>
    );
};

export default App;
