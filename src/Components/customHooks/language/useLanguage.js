import { useSelector } from 'react-redux'
import useCurrentProject from '../useCurrentProject'
import { fr, en } from './languages'

const useLanguage = () => {
    const languages = useSelector(state => state.Customizer.languages)

    if(languages.available)
        return languages.available[languages.selected]
    else 
        return {
            code: 'en',
            flag: 'gb',
            text: 'english'
        }
}

export const useAvailableLanguages = () => useSelector(state => state.Customizer.languages.available)

export const useText = () => {
    const language = useLanguage()

    class Texts {
        constructor(texts) {
            this.texts = texts
        }

        get(key, capFirstLetter) {
            let text = this.texts[key]

            if(capFirstLetter) 
                text = text.charAt(0).toUpperCase() + text.slice(1)

            return text
        }
    }

    switch(language.code) {
        case "en":
            return new Texts(en)
        case "fr":
            return new Texts(fr)
        default:
            return new Texts(en)
    }
}

export const useReadmeInCurrentLanguageForCurrentProject = () => {
    const currentLanguage = useLanguage()
    const available = useAvailableLanguages()
    const currentProject = useCurrentProject()

    if(!currentProject) 
        return null

    if(
        currentProject.github && 
        currentProject.github.readmeLanguages 
        && currentProject.github.readmeLanguages.hasOwnProperty(currentLanguage.code)
    )
        return currentProject.github.readmeLanguages[currentLanguage.code]
    else
        return "README"
}

export default useLanguage