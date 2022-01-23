import React from 'react';
import { FiGithub as LogoGithub } from 'react-icons/fi'

const sendToGithubPage = () => {
    window.open("https://github.com/axelmy318/axelmy-projects-showcase.git", '_blank').focus();
}

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <span className='clickable' onClick={sendToGithubPage}>
                    <LogoGithub /> GitHub
                </span>
            </div>
        </div>
    );
};

export default Footer;
