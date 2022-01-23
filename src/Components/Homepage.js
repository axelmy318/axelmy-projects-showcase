import React from 'react';
import { FaReact as LogoReact, FaNodeJs as LogoNode } from 'react-icons/fa'
import { DiJavascript1 as LogoJavascript, DiPhp as LogoPHP } from 'react-icons/di'
import { SiCsharp as LogoCsharp, SiMysql as LogoSql } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'

const logos = {
    react: <LogoReact />,
    javascript: <LogoJavascript />,
    nodejs: <LogoNode />,
    PHP: <LogoPHP />,
    csharp: <LogoCsharp />,
    SQL: <LogoSql />
}

const getLogo = (logo, color = 'grey', size = 60) => {
     return (
        <IconContext.Provider value={{color, size}}>
            {logos[logo]}
        </IconContext.Provider>
     )
}

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1>About me</h1>
            <p>Full stack developper (mainly web) who likes to work on random open source projects</p>
            <br />
            <br />
            <h1>My favourites</h1>
            <div className='tech-list' style={{display: 'inline-flex'}}>
                {getLogo("react")}
                {getLogo("javascript", '#fcd303')}
                {getLogo("nodejs", '#328212')}
                {getLogo("PHP", '#451fb8', 60)}
                {getLogo('csharp', '#8d2ed1')}
                {getLogo('SQL', '#d1932e')}
            </div>

        </div>
    );
};

export default Homepage;
