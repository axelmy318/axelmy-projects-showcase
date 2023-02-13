import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import useAuthor from './customHooks/useAuthor';
import { useMediaQuery } from '@mui/material';
import ProjectNavButtons from './Project/ProjectNavButtons';
import useLanguage, { useTexts } from './customHooks/language/useLanguage';


const HomepageV2 = () => {
    const customizer = useSelector(state => state.Customizer)
    const author = useAuthor()
    const biggerThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const language = useLanguage()
    const texts = useTexts()

    return (
        <div className='main-content'>
            {biggerThanMd && <div className='m-20'>
                <h1 className='text-center text-[400%]'>{texts.get('PORTFOLIO_AND_CODE_DEMO')}</h1>
                <h1 className='text-center text-[250%] mt-12'>{texts.get('BY_AXEL_MILLIERY')}</h1>
            </div>}
            <div className={`${biggerThanMd ? "inline-flex" : ""} mb-1 mt-2 ml-0`}>
                <ProjectNavButtons author={author} isMobile={!biggerThanMd} />
            </div>
            <Row>
                <Col md={12} className='no-padding readme-col'>
                    <MarkdownPrinter 
                        username={'axelmy318'} 
                        repository={'axelmy318'} 
                        branch={'main'} 
                        file={language.code === 'en' ? 'README' : 'README_fr'}
                        mode={customizer.activeMode}
                        convertHtmlImgToMarkdown={true}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default HomepageV2;
