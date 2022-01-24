import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer'

const ShowRepositoryExample = () => {
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
        />
        Showing repository
        <MarkdownPrinter
            username='ghost'
            repository='diary'
            markdown={mardown}
            showRepository={true}
        />
    </>)
    
}

export default ShowRepositoryExample