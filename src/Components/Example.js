import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Example = ({ example }) => {
    return (<>
        <Row className='component-examples'>
            <Col md="auto" className='example-result'>
                <h1 className='underline'>{example.name}</h1>
                <p>{example.description}</p>
                <br />
                <h5 className='underline'>Result</h5>
                {example.component}
                {example.defaults && example.defaults.length > 0 && <>
                    <br />
                    <br />
                    <h5 className='underline'>Defaults</h5>
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
                <br />
            </Col>
            <Col className='no-right-padding example-code'>
                <div className='highlighter'>
                    <SyntaxHighlighter 
                        style={ dark }
                        showLineNumbers={true}
                        wrapLongLines={true}
                        language={'jsx'}
                        customStyle={{
                            minHeight: window.innerHeight,
                            margin: '0px',
                            borderRadius: '0px'
                        }}
                    >
                        {example.code}
                    </SyntaxHighlighter>  
                </div>      
            </Col>
        </Row>
    </>);
};

export default Example;
