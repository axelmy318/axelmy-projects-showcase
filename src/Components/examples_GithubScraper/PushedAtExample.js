import React from 'react'
import GithubScraper, { PushedAt } from 'react-github-scraper'

const PushedAtExample = () => {
    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <PushedAt 
                label={'Last pushed'}
            />

            <PushedAt 
                label={'Last pushed'}
                showAsDate={true}
            />
        </GithubScraper>
    )
}

export default PushedAtExample