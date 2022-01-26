import React from 'react'
import GithubScraper, { WatchersCount } from 'react-github-scraper'

const WatchersCountExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <WatchersCount 
                label={'Fetching "Facebook/react" watchers count'} 
                prefix={'👀'} 
            />
        </GithubScraper>
    )
}

export default WatchersCountExample