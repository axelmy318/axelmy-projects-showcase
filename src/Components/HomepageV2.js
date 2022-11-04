import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const HomepageV2 = () => {
    const customizer = useSelector(state => state.Customizer)
    
    return (
        <div className='main-content'>
            <Row>
                <Col md={12} className='no-padding readme-col'>
                    <MarkdownPrinter username={'axelmy318'} repository={'axelmy318'} branch={'main'} mode={customizer.activeMode} />
                </Col>
            </Row>
        </div>
    );
};

export default HomepageV2;
