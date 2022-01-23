import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { GoPrimitiveDot as LogoDot } from 'react-icons/go'
import rehypeHighlight from 'rehype-highlight';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';
import { IconContext } from 'react-icons/lib';

const ReadmePrinter = ({ username, repository, branch }) => {
    const [markdown, setMarkdown] = useState(null);

    const url = `https://raw.githubusercontent.com/${username}/${repository}/${branch}/README.md`

    if(markdown === null)
    axios.get(url)
        .then((response) =>  {
            setMarkdown(response.data)
            return response.data
        })


        return (<div className='markdown-container'>
        <div className='markdown-content'>
            <span className='readme-file'>
                <span className='repo'>{username} / {repository}</span> 
                <IconContext.Provider value={{color: 'grey'}}><LogoDot /></IconContext.Provider> 
                <span className='file'>README.md</span>
            </span>
            <div className='markdown'>
                <ReactMarkdown 
                    className='markdown-body' 
                    children={markdown} 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeHighlight]}
                />
            </div>
        </div>
    </div>);
};

export const renderers = {
    code: ({language, value}) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
}

export default ReadmePrinter;