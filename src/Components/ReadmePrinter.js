import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';
import axios from 'axios';

const ReadmePrinter = ({ url }) => {
    const [markdown, setMarkdown] = useState(null);

    //https://raw.githubusercontent.com/axelmy318/react-weekdays-input/master/README.md
    if(markdown === null)
    axios.get(url)
        .then((response) =>  {
            setMarkdown(response.data)
            return response.data
        })

    console.log(markdown)

    return (<div className='markdown-container'>
        <ReactMarkdown children={markdown} remarkPlugins={remarkGfm} rehypePlugins={[rehypeHighlight]}></ReactMarkdown>
    </div>);
};

export default ReadmePrinter;
