import React, { useState, useEffect } from 'react';
import { LoadGithubFile } from '../loadGithubFile';

const ExampleCode = ({ username, repository, file }) => {
    const [currentCode, setCurrentCode] = useState(null);

    useEffect(() => {
        if(!currentCode) {
            LoadGithubFile(username, repository, file)
                .then(response => {
                    if(response.success)
                        setCurrentCode(response.data)
                    else
                        setCurrentCode(`\`error loading file\``)
                })
        }
    });
    
    return (<>{currentCode ? currentCode : `code unavailable`}</>)
    ;
};

export default ExampleCode;
