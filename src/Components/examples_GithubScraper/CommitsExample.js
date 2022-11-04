import React from 'react'
import GithubScraper, { Commits } from 'react-github-scraper'
import useColors from '../customHooks/useColors'

const CommitsExample = () => {
    // Remove the line below
    const colors = useColors()

    const Commit = ({ c }) => {
        return (<div style={{backgroundColor: colors.backgroundColor, padding: '10px', marginBottom: '5px', borderRadius: '15px'}}>
            {c.commit.message.slice(0, 50) + "..."}
        </div>)
    }

    return (
        <GithubScraper username='Facebook' repository='react' branch='main'>
            <Commits 
                label={'Fetching "Facebook/react" languages'} 
                maxDisplayed={4} // 0 for all
                commitCallback={(commit, index, commits) => <Commit key={index} c={commit} />}
            />
        </GithubScraper>
    )
}

export default CommitsExample