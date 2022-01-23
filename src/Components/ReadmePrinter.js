import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';

const ReadmePrinter = ({ url }) => {
    const [markdown, setMarkdown] = useState(null);

    if(markdown === null)
    axios.get(url)
        .then((response) =>  {
            setMarkdown(response.data)
            return response.data
        })


    return (<div className='markdown-container'>
        <div className='markdown'>
            <ReactMarkdown 
                className='markdown-body' 
                children={markdown} 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeHighlight]}
            />
        </div>
    </div>);
};

export const renderers = {
    code: ({language, value}) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
}

export default ReadmePrinter;