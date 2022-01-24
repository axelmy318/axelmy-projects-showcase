import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark as hlStyleHLJS } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ComponentShowcase = ({children, code}) => {
  return (
    <div className='component-showcase'>
        <div className='component-showcase-code'>
            <SyntaxHighlighter
                showLineNumbers={true}
                language="javascript"
                style={hlStyleHLJS}
                customStyle={{
                    minHeight: window.innerHeight,
                    margin: '0px',
                    borderRadius: '0px'
                }}
            >
                {code}
            </SyntaxHighlighter>    
        </div>
        <div className='component-showcase-result'>
            {children}
        </div>
    </div>
  );
};

export default ComponentShowcase;
