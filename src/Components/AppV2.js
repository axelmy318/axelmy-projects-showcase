import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ThemeSettings from './ThemeSettings'
import Router from './routes/Router'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadFromLocalStorage } from '../storage/localStorage'
import { setCustomizer } from './redux/Customizer/Action'

const App = () => {
    const routing = useRoutes(Router)
    const theme = ThemeSettings()
    const customizer = useSelector(state => state.Customizer)
    const dispatch = useDispatch()
    
    if(!customizer.isLoaded) 
        dispatch(setCustomizer(loadFromLocalStorage('customizer')))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {routing}
        </ThemeProvider>
    );
};

export default App;
