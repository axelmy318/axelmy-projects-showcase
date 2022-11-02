import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';
import { Row, Col } from 'react-bootstrap'

const HomepageV2 = () => {
    return (
        <div className='main-content'>
            <Row>
                <Col md={12} className='no-padding readme-col'>
                    <MarkdownPrinter username={'axelmy318'} repository={'axelmy318'} branch={'main'} />
                </Col>
            </Row>
        </div>
    );
};

export default HomepageV2;
