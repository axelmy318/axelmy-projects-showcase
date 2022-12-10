import React from 'react'
import GithubScraper, { Languages } from 'react-github-scraper'

const LanguagesExample = () => {
    return (
        <GithubScraper username='tauri-apps' repository='tauri' branch='main'>
            <div className='md:flex text-center md:justify-center'>
                <Languages 
                    label={'Default values'}
                />

                <span style={{width: "100px"}}></span>
                
                <Languages 
                    label={'Customized version'} 
                    maxDisplayed={8}
                    translucid={false}
                    gradientColors={['#7352ff', '#03c9d7']} // An array of how many colors you want
                />
            </div>
        </GithubScraper>
    )
}

export default LanguagesExample