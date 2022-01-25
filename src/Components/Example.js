import React, { useState, useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LoadGithubFile } from '../loadGithubFile';

const Example = ({ example, file }) => {
    const [currentCode, setCurrentCode] = useState(null);

    useEffect(() => {
        LoadGithubFile('axelmy318', 'axelmy-projects-showcase', 'master', example.file)
            .then(response => {
                if(response.success){
                    setCurrentCode(response.data)
                }
                else
                    setCurrentCode(`\`error loading file\``)
            })
    }, [example]);

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
                    {currentCode && <SyntaxHighlighter 
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
                        {currentCode}
                    </SyntaxHighlighter>  }
                </div>      
            </Col>
        </Row>
    </>);
};

export default Example;
