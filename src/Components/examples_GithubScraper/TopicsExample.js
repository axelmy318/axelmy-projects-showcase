import React from 'react'
import GithubScraper, { Topics } from 'react-github-scraper'

const TopicsExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <Topics 
                label={'Fetching "Facebook/react" topics'}  
            />
        </GithubScraper>
    )
}

export default TopicsExample