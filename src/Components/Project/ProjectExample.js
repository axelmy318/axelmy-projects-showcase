import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LoadGithubFile } from '../../loadGithubFile';
import { useSelector } from 'react-redux'
import { TbChevronRight as LogoChevron } from 'react-icons/tb'
import { IconContext } from 'react-icons/lib';
import useColors from '../customHooks/useColors';
import { VscLink as LogoCopy } from 'react-icons/vsc'
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';


const ProjectExample = ({ page, example, open, setOpen }) => {
    const navigate = useNavigate()
    const [currentCode, setCurrentCode] = useState(null);
    const [copied, setCopied] = useState(false)
    const customizer = useSelector(state => state.Customizer)
    const colors = useColors()
    const timerRef = React.useRef(null);
    const biggerThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));
    console.log("page", page)
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

    const copyProjectLink = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setCopied(true)
        navigator.clipboard.writeText(encodeURI(`${window.location.href.replace(/#.*$/, "")}#${example.name}`))

        if(timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
        return () => {
            if(timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    const handleTitleClick = () => {
        if(open)
            navigate(page)
        else   
            navigate(`${page}#${encodeURI(example.name)}`)
    }

    return (<>
        <div className={`project-example ${open ? 'opened' : ''}`}>
            <Box 
                component={'h2'} 
                className='underline font-bold' 
                style={{display: 'inline-flex', textDecoration: 'none', paddingBottom: '10px', width: '100%'}} 
                onClick={() => handleTitleClick()}
                id={example.name}
            >
                <span className='example-open-status' style={{marginTop: '5px'}}>
                    <IconContext.Provider value={{color: colors.palette.primary.main}}><LogoChevron /></IconContext.Provider>
                </span>
                <Box component={"span"} sx={[
                    open && {
                        textDecoration: 'underline',
                        textDecorationColor: colors.palette.secondary.main
                    }
                ]}>
                    {example.name}
                </Box>
                {open && biggerThanMd && <>
                    <Box component={"span"}
                        onClick={copyProjectLink} 
                        className='example-copy-button' 
                        style={{marginTop: '9px', marginLeft: '15px', display: 'block'}}
                        sx={{
                            color: colors.activeMode === 'light' ? 'grey' : 'white',
                            transition: 'color',
                            transitionDuration: '120ms',
                            '&:hover' : {
                                color: `${colors.palette.primary.main}!important`
                            }
                        }}
                    >
                        <LogoCopy 
                            size={'25px'}
                        />
                    </Box>
                    {copied && <>
                        <Box component={"span"} sx={{
                            fontSize: '40%',
                            fontWeight: 'normal',
                            marginTop: '12px',
                            marginLeft: '10px',
                        }}>
                            link copied!
                        </Box>
                    </>}
                </>}
            </Box>
            {<div className='project-example-body' style={{overflow: 'hidden'}}>
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
            </div>}
        </div>
    </>);
};

export default ProjectExample;