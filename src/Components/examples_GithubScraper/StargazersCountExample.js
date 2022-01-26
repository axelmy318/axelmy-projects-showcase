import React from 'react'
import GithubScraper, { StargazersCount } from 'react-github-scraper'

const StargazersCountExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <StargazersCount 
                label={'Fetching "Facebook/react" stargazers count'} 
                prefix={'⭐'} 
            />
        </GithubScraper>
    )
}

export default StargazersCountExample