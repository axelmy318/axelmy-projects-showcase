import React from 'react'
import axios from 'axios'
import ReadmePrinter from './ReadmePrinter';

const Homepage = () => {
    return (
        <div className='homepage'>
            <ReadmePrinter username={'axelmy318'} repository={'axelmy318'} branch={'main'} />
        </div>
    );
};

export default Homepage;
