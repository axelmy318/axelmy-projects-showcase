import React, { useState } from 'react'
import { LoadGithubReadme } from 'react-readme-printer'

const FunctionExample = () => {
    const [markdown, setMarkdown] = useState(null)

    if(markdown === null)
        LoadGithubReadme('axelmy318', 'react-readme-printer', 'master')
            .then(response => {
                if(response.success)   
                    setMarkdown(response.data)                 
                else 
                    setMarkdown("`Error loading the file`")
            })

    return (
        <>
            {markdown && <>{markdown.slice(0, 100)} ...</>}
        </>
    )
    
}

export default FunctionExample