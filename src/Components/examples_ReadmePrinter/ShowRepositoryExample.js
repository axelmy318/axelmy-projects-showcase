import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer'
import { useSelector } from 'react-redux'

const ShowRepositoryExample = () => {
    const customizer = useSelector(state => state.Customizer)
    // Giving a markdown as a prop will prevent the 
    // component from loading the MD file at the given repository
    const mardown = `### Just a simple markdown text 👻`

    return (<>
        Hiding repository
        <MarkdownPrinter
            username='ghost'
            repository='diary'
            markdown={mardown}
            showRepository={false}
            mode={customizer.activeMode}
        />
        Showing repository
        <MarkdownPrinter
            username='ghost'
            repository='diary'
            markdown={mardown}
            showRepository={true}
            mode={customizer.activeMode}
        />
    </>)
    
}

export default ShowRepositoryExample