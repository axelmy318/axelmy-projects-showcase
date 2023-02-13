import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer'
import useCustomizer from '../customHooks/useCustomizer'

const ComponentExample = () => {
    // Remove the line below
    const customizer = useCustomizer()

    return (
        <MarkdownPrinter
            username='axelmy318'
            repository='react-readme-printer'
            branch='master'
            // Remove the line below
            mode={customizer.activeMode}
            convertHtmlImgToMarkdown={true}
        />
    )
    
}

export default ComponentExample