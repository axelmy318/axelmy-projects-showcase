import getThemeDetails from '../../functions/getThemeDetails'
import useCustomizer from './useCustomizer'

const useColors = () => {
    const customizer = useCustomizer()
    const theme = getThemeDetails(customizer.activeTheme)
    
    return {
        backgroundColor: customizer.activeMode === 'light' ? theme.palette.primary.light : theme.palette.secondary.dark,
        primaryBackgroundColor: customizer.activeMode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
        secondaryBackgroundColor: customizer.activeMode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    }
}

export default useColors