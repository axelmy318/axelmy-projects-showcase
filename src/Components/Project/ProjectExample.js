import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LoadGithubFile } from '../../loadGithubFile';
import { useSelector } from 'react-redux'


const ProjectExample = ({ example, file }) => {
    const [currentCode, setCurrentCode] = useState(null);
    const customizer = useSelector(state => state.Customizer)

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
        <div className='project-example'>
            <h1 className='underline' style={{textDecoration: 'none', paddingBottom: '10px'}}>{example.name}</h1>
            <div className='project-example-body'>
                <p>{example.description}</p>
                <br />
                <div className='highlighter'>
                    {currentCode && <SyntaxHighlighter 
                        style={ dark }
                        showLineNumbers={true}
                        wrapLongLines={true}
                        language={'jsx'}
                        customStyle={{
                            margin: '0px',
                        }}
                    >
                        {currentCode}
                    </SyntaxHighlighter>  }
                </div>  
                <br />
                <h3 className='underline' style={{textDecoration: 'none'}}>Result</h3>
                {example.component}
                {example.defaults && example.defaults.length > 0 && <>
                    <br />
                    <br />
                    <h3 className='underline' style={{textDecoration: 'none'}}>Defaults</h3>
                    <Table striped bordered variant={customizer.activeMode}>
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
            </div> 
        </div>
    </>);
};

export default ProjectExample;