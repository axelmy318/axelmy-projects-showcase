import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import GithubScraper, { OwnerAvatar, OwnerFollowersCount, MemberSince, PublicReposCount } from 'react-github-scraper';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Row className='no-side-margin' style={{height: '100vh'}}>
                <Col md={9} className='no-padding readme-col'>
                    <MarkdownPrinter username={'axelmy318'} repository={'axelmy318'} branch={'main'} />
                </Col>
                <Col md={3} className='no-padding github-scraper-sidebar'>
                    <GithubScraper username={'axelmy318'} repository={'axelmy318'} branch={'main'}>
                        <OwnerAvatar label='Avatar' imageSize={'100%'} />
                        <OwnerFollowersCount label='Followers' />
                        <PublicReposCount prefix='📦&nbsp;' label='Public repos' />
                        <MemberSince label='Member since' />
                    </GithubScraper>
                </Col>
            </Row>
        </div>
    );
};

export default Homepage;
