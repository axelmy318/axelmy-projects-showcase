import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer'
import { useSelector } from 'react-redux'

const ComponentExample = () => {
    // Remove the line below
    const customizer = useSelector(state => state.Customizer)

    return (
        <MarkdownPrinter
            username='axelmy318'
            repository='react-readme-printer'
            branch='master'
            // Remove the line below
            mode={customizer.activeMode}
        />
    )
    
}

export default ComponentExample