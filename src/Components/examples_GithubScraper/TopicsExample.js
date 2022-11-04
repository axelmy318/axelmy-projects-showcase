import React from 'react'
import GithubScraper, { Topics } from 'react-github-scraper'

const TopicsExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <Topics label={'Fetching "Facebook/react" topics'} />
            <Topics 
                label={'Fetching custom "Facebook/react" topics'} 
                topicCallback={(topic, index) => <span key={index} style={{border: '1px solid red', marginRight: '10px'}}>
                    {topic}
                </span>}
            />
        </GithubScraper>
    )
}

export default TopicsExample