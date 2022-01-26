import React from 'react'
import GithubScraper, { Languages } from 'react-github-scraper'

const LanguagesExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <Languages 
                label={'Fetching "Facebook/react" languages'} 
                maxDisplayed={4} 
            />
        </GithubScraper>
    )
}

export default LanguagesExample