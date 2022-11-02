import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import ThemeSettings from './ThemeSettings'
import Router from './routes/Router'
import 'react-perfect-scrollbar/dist/css/styles.css'

const App = () => {
    const dispatch = useDispatch()
    const routing = useRoutes(Router)
    const theme = ThemeSettings()
    const customizer = useSelector((state) => state.CustomizerReducer)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {routing}
        </ThemeProvider>
    );
};

export default App;
