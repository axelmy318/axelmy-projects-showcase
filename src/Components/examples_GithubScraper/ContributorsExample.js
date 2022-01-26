import React from 'react'
import GithubScraper, { Contributors } from 'react-github-scraper'

const ContributorsExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <Contributors 
                label={'Fetching "Facebook/react" contributors'} 
                maxDisplayed={13} 
            />
        </GithubScraper>
    )
}

export default ContributorsExample