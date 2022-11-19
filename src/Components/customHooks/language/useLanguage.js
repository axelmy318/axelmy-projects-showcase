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

export const useTexts = () => {
    const language = useLanguage()

    class Texts {
        constructor(texts) {
            this.texts = texts
        }

        get(key, capFirstLetter = true) {
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
    const currentProject = useCurrentProject()

    if(!currentProject) 
        return null

    if(
        currentProject.github && 
        currentProject.github.readmeLanguages 
        && currentProject.github.readmeLanguages.hasOwnProperty(currentLanguage.code)
    )
        return {found: true, file: currentProject.github.readmeLanguages[currentLanguage.code]}
    else
        return {found: false, file: "README"}
}

export default useLanguage