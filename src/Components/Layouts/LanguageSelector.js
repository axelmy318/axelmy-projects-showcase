import React, { useState } from 'react'
import useColors from '../customHooks/useColors';
import useLanguage, { useAvailableLanguages } from '../customHooks/language/useLanguage';
import useMediaQueryHook from '../customHooks/useMediaQueryHook';
import { useDispatch } from 'react-redux';
import {
    MenuItem,
    Menu,
    Tooltip,
    Fab,
    Box
} from '@mui/material'
import { setLanguage } from '../redux/Customizer/Action';

const LanguageSelector = () => {
    const biggerThanMd = useMediaQueryHook("md")
    const [languageAnchor, setLanguageAnchor] = useState(null)
    const colors = useColors()
    const language = useLanguage();
    const languages = useAvailableLanguages();
    const dispatch = useDispatch()

    const handleLanguageOpen = (event) => setLanguageAnchor(event.currentTarget)
    
    const handleLanguageClose = () => setLanguageAnchor(null)

    return (
        <div>
            <Tooltip title="Languages">
            {<Fab
            size={biggerThanMd ? "medium" : "small"}
            variant={biggerThanMd ? 'extended' : 'normal'}
            aria-label="settings"
            sx={[
                { position: 'fixed', right: '170px', top: '13px', backgroundColor: colors.activeMode === 'light' ? 'white' : '#33373E' },
                /* MOBILE ONLY  --> */ !biggerThanMd && {right: '60px', top: '12px', backgroundColor: 'transparent', boxShadow: 'none' }
            ]}
            onClick={handleLanguageOpen}
            >
                <img
                    src={`https://flagcdn.com/${language.flag}.svg`} 
                    style={{border: '1px solid #afafaf'}} 
                    width="25"
                    alt="South Africa"
                />
            </Fab>
            }
            </Tooltip>
        
            <Menu
                id="languages-menu"
                anchorEl={languageAnchor}
                keepMounted
                open={Boolean(languageAnchor)}
                onClose={handleLanguageClose}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                sx={{
                    '& .MuiMenu-paper': {
                        width: '200px',
                        right: 0,
                        top: '70px !important',
                        padding: '5px'
                    },
                }}
            >
                <Box
                    sx={{
                    ml: 2,
                    }}
                >
                    { languages && Object.keys(languages).map((key) => (
                        <Box 
                            key={key}>
                            <Box
                                className='transition-all duration-150 rounded'
                                sx={{
                                    pt: 2,
                                    pb: 2,
                                    mr: 2,
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: colors.backgroundColor,
                                        cursor: 'pointer'
                                    }
                                }}
                                onClick={() => {handleLanguageClose(); dispatch(setLanguage(parseInt(key)))}}
                            >
                                <Box display="flex" alignItems="center">
                                    <img
                                        src={`https://flagcdn.com/${languages[key].flag}.svg`} 
                                        style={{border: '1px solid #afafaf', marginRight: '10px', marginLeft: '15px'}} 
                                        width="25"
                                        alt="South Africa"
                                    />
                                    {console.log("test", key, languages[key])}
                                    {languages[key].text}
                                </Box>
                            </Box>
                        </Box>
                    )) }
                </Box>
            </Menu>
        </div>
    )
}

export default LanguageSelector