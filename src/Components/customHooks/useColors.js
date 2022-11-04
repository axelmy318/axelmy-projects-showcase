import React from 'react'
import { useSelector } from 'react-redux'
import getThemeDetails from '../../functions/getThemeDetails'

const useColors = () => {
    const customizer = useSelector(state => state.Customizer)
    const theme = getThemeDetails(customizer.activeTheme)
    
    return {
        backgroundColor: customizer.activeMode === 'light' ? theme.palette.primary.light : theme.palette.secondary.dark
    }
}

export default useColors