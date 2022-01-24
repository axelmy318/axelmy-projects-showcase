import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer';

const Homepage = () => {
    return (
        <div className='homepage'>
            <MarkdownPrinter username={'axelmy318'} repository={'axelmy318'} branch={'main'} />
        </div>
    );
};

export default Homepage;
