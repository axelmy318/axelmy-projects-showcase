import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from './Header';

const Example = ({ example }) => {
    return (<>
        <Row>
            <Col>
                <Header label={example.name} variant='normal' customStyle={{textAlign: 'left'}} />
                <p>{example.description}</p>
                <br />
                <h5>Result</h5>
                {example.component}
                {example.defaults && example.defaults.length > 0 && <>
                    <br />
                    <br />
                    <h5>Defaults</h5>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>type</th>
                                <th>default</th>
                            </tr>
                        </thead>
                        <tbody>
                            {example.defaults.map((item, index) => <tr key={index}><td>{item.property}</td><td>{item.type}</td><td>{item.value}</td></tr>)}
                        </tbody>
                    </Table>
                </>}
            </Col>
            <Col className='no-right-padding'>
                <SyntaxHighlighter 
                    style={ dark }
                    showLineNumbers={true}
                    wrapLongLines={true}
                    language={'javascript'}
                    customStyle={{
                        minHeight: window.innerHeight,
                        margin: '0px',
                        borderRadius: '0px'
                    }}
                >
                    {example.code}
                </SyntaxHighlighter>        
            </Col>
        </Row>
    </>);
};

export default Example;
