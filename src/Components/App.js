import React, { useState } from 'react'
import {Route, useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import WeekdaysBasicExample from './examples_WeekdaysInput/BasicExample';
import CustomStyleExample from './examples_WeekdaysInput/CustomStyleExample';
import ForcedStateExample from './examples_WeekdaysInput/ForcedStateExample';
import CustomDaysExample from './examples_WeekdaysInput/CustomDaysExample';
import NewWindowBasicExample from './examples_NewWindow/BasicExample';
import TitleExample from './examples_NewWindow/TitleExample';
import ReadmeComponentExample from './examples_ReadmePrinter/ComponentExample'
import Example from './Example';
import { MarkdownPrinter } from 'react-readme-printer';

import { getCodeFor } from '../config/examplesCode';
import ShowCharsExample from './examples_WeekdaysInput/ShowCharsExample';
import ExampleSidebar from './ExampleSidebar';

import OffsetsAndSizesExample from './examples_NewWindow/OffsetsAndSizesExample';
import Footer from './Footer';

import { CgCornerLeftUp as LogoHome } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import Homepage from './Homepage';
import ShowRepositoryExample from './examples_ReadmePrinter/ShowRepositoryExample';

const App = () => {
  const [selectedFamily, setSelectedFamily] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedTab, setSelectedTab] = useState({type: '', item: null})
  const [areCodesLoaded, setAreCodesLoaded] = useState(false)
  
  const [families, setFamilies] = useState({
    packages: {
      label: '👏 Packages 👏',
      projects: [
        {
          type: 'package',
          path: '/react-readme-printer', 
          systemName: 'reactreadmeprinter',
          name: 'React Readme Printer', 
          github: {
            username: 'axelmy318',
            repository: 'react-readme-printer',
            mainBranch: 'master'
          },
          npmjs: 'https://www.npmjs.com/package/react-readme-printer',
          installation: 'npm i react-readme-printer',
          examples: [
            {
              systemName: 'componentexample',
              name: 'Basic example',
              description: 'This example covers how print a readme file from GitHub',
              component: <ReadmeComponentExample />,
              defaults: []
            },
            {
              systemName: 'showrepository',
              name: 'Show repository',
              description: 'This example covers how remove the repository tag on top of the readme',
              component: <ShowRepositoryExample />,
              defaults: [
                {property: 'showRepository', type: 'bool', value: 'true'}
              ]
            },
          ]
        },
        {
          type: 'package',
          path: '/react-weekdays-input', 
          systemName: 'reactweekdaysinput',
          name: 'React Weekdays Input', 
          github: {
            username: 'axelmy318',
            repository: 'react-weekdays-input',
            mainBranch: 'master'
          },
          npmjs: 'https://www.npmjs.com/package/react-weekdays-input',
          installation: 'npm i react-weekdays-input',
          examples: [
            {
              systemName: 'basicexample',
              name: 'Basic example',
              description: 'A simple example using the default configuration',
              component: <WeekdaysBasicExample />,
              defaults: [
                {property: 'value', type: 'string/array', value: `"0000000"`},
                {property: 'onChange', type: 'function', value: ``},
              ]
            },
            {
              type: 'package',
              systemName: 'customstyles',
              name: 'Custom styles',
              description: 'This example covers how to apply custom styling on the component',
              component: <CustomStyleExample />,
              defaults: [
                {property: 'activeDayStyle', type: 'object', value: ``},
                {property: 'inactiveDayStyle', type: 'object', value: ``},
                {property: 'dayStyle', type: 'object', value: ``},
                {property: 'inputStyle', type: 'object', value: ``},
              ]
            },
            {
              systemName: 'forcedstate',
              name: 'Forcing state',
              description: 'This example covers how to force the state of certain days',
              component: <ForcedStateExample />,
              defaults: [
                {property: 'forcedState', type: 'array', value: ``}
              ]
            },
            {
              systemName: 'showchars',
              name: 'Slicing day names',
              description: 'This example covers how to slice the day names',
              component: <ShowCharsExample />,
              defaults: [
                {property: 'showChars', type: 'number', value: 'null'}
              ]
            },
            {
              systemName: 'customdays',
              name: 'Custom days',
              description: 'This example covers how to set custom days',
              component: <CustomDaysExample />,
              defaults: [
                {property: 'days', type: 'arary', value: `['monday', 'tuesday', 'wednesday', ...]`},
                {property: 'textCase', type: 'string', value: `null, Available: 'firstToUpper', 'toUpper', 'toLower'`},
              ]
            },
          ]
        },
        {
          path: '/react-window-open', 
          systemName: 'reactwindowopen',
          name: 'React Window Open',
          github: {
            username: 'axelmy318',
            repository: 'react-window-open',
            mainBranch: 'master'
          },
          npmjs: 'https://www.npmjs.com/package/react-window-open',
          installation: 'npm i react-window-open',
          examples: [
            {
              systemName: 'basicexample',
              name: 'Basic example',
              description: 'A basic example of react-new-window',
              component: <NewWindowBasicExample />,
              defaults: []
            },
            {
              systemName: 'offestsandsizes',
              name: 'Offsets and sizes',
              description: 'This example covers offsets ans sizes',
              component: <OffsetsAndSizesExample />,
              defaults: [
                {property: 'width', type: 'number', value: 1920},
                {property: 'height', type: 'number', value: 1080},
                {property: 'top', type: 'number', value: 0},
                {property: 'left', type: 'number', value: 0},
                {property: 'right', type: 'number', value: 0},
                {property: 'bottom', type: 'number', value: 0},
              ]
            },
            {
              systemName: 'title',
              name: 'Title',
              description: 'This example covers how to set a custom title for the window',
              component: <TitleExample />,
              defaults: [
                {property: 'title', type: "string", value: 'New window'},
              ]
            },
          ]
        }
      ]
    },
    websites: {
      label: '🐍 Websites 🐍',
      projects: [
        {
          type: 'website',
          path: '/axelmy-project-showcase',
          name: 'Axelmy\'s Projects Showcase',
          website: 'https://axelmy-projects-showcase.firebaseapp.com/',
          github: {
            username: 'axelmy318',
            repository: 'axelmy-projects-showcase',
            mainBranch: 'master'
          },
        },
        {
          type: 'website',
          path: '/spotify-companion',
          name: 'Spotify Companion',
          website: 'https://spotify-companion-ff520.web.app/',
          github: {
            username: 'axelmy318',
            repository: 'spotify-companion',
            mainBranch: 'master'
          },
        }
      ],
    },
    miscellanious: {
      label: '👻 Miscellaneous 👻',
      projects: [
        {
          type: 'miscellaneous',
          path: '/discord-weather-bot',
          name: 'Discord Weather Bot',
          customLinks: [
            {
              label: 'Invite the bot',
              url: "https://discord.com/oauth2/authorize?client_id=832684912356098058&scope=bot&permissions=52288",
            },
          ],
          github: {
            username: 'axelmy318',
            repository: 'discord-weather-bot',
            mainBranch: 'master'
          },
        }
      ],
    }
  })
  
  const history = useHistory()

  
  const findProjectByPath = (path) => {
    let project = null

    Object.keys(families).forEach(family => {
      let found = families[family].projects.find(project => project.path === window.location.pathname)
      console.log(found)
      if(found){
        project = found
      }
    })
    console.log(project)
    return project
  }

  const sendToProject = item => {
      Object.keys(families).forEach(family => {
        let found = families[family].projects.find(project => project.path === item.path)
        if(found)
          setSelectedFamily(families[family])
        
      })

      history.push(item.path)
      setSelectedProject(item)
      if(item.github !== undefined)
        setSelectedTab({type: 'readme', item})
      else if(item.examples !== undefined && item.examples !== null && item.examples.length > 0)
        setSelectedTab({type: 'example', item: item.examples[0]})
  }

  const sendToHomepage = () => {
    history.push('/')
    setSelectedFamily(null)
    setSelectedProject(null)
    setSelectedTab({type: '', item: null})
  }

  const loadCodes = () => {
    let newFamilies = {}
    Object.keys(families).map((family) => {
      newFamilies[family] = {
        ...families[family], 
        projects: families[family].projects.map(project => {
          if(project.examples !== undefined){ 
            project.examples.map(example => {
              example.code = getCodeFor(project.systemName, example.systemName)
              return example
            })
          }
          return project
        })
      }
      return family
    })
    setFamilies(newFamilies)

    setAreCodesLoaded(true)
  }

  if(!areCodesLoaded) loadCodes()
  console.log(selectedTab)
  /*if(window.location.pathname === '/')
    sendToProject(projects[0])*/
  if(window.location.pathname !== '/' && selectedFamily === null && selectedProject === null){
    sendToProject(findProjectByPath(window.location.pathname))
  }
  
  return (
    <>
      <Container fluid>
          <Row>
            {selectedFamily === null && <Col xs={4} className='left-col'>
              <div className='family-selection'>
                {Object.keys(families).map((family, index) => {
                  return <React.Fragment key={family}>
                    <h2 onClick={() => setSelectedFamily(families[family])} className='clickable family-selection-item'>
                      {families[family].label}
                    </h2>
                    {index+1 !== Object.keys(families).length && <div className='separator'></div>}
                    </React.Fragment>
                })}
              </div>
            </Col>}
            {selectedFamily && <Col xs={4}>
              <Row className='header-row'>
                <Col className='header-col clickable' onClick={sendToHomepage} xs={12}>
                  <span style={{position: 'absolute', top: '10px'}} className='clickable' onClick={sendToHomepage}><IconContext.Provider value={{size: '30px'}}><LogoHome /></IconContext.Provider></span>
                  <h1>{selectedFamily.label}</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={6} className='no-padding'>
                  <Sidebar label={'Projects'} selected={selectedProject}  onSelect={sendToProject} items={selectedFamily.projects} />
                </Col>
                <Col xs={6} className='no-padding'>
                  <ExampleSidebar project={selectedProject} selected={selectedTab} onSelect={setSelectedTab} />
                </Col>
              </Row>
              <Row className='header-row'>
                <Col className='header-col' xs={12}>
                  <Footer />
                </Col>
              </Row>
            </Col>}
            <Col className={selectedTab.type === 'readme' || selectedTab.type === '' ? 'right-col no-padding' : 'right-col'}>
                {
                  selectedFamily && selectedFamily.projects.map((project, index) => {
                    return (
                      <Route key={index} path={project.path} exact>
                        {selectedTab.type === 'example' && <Example example={selectedTab.item} />}
                        {selectedTab.type === 'readme' && <div className='readme-page'><MarkdownPrinter username={selectedTab.item.github.username} repository={selectedTab.item.github.repository} branch={selectedTab.item.github.mainBranch} /></div>}
                      </Route>
                    )
                  })
                }
                <Route path="/" exact>
                  <div className='readme-page'><Homepage /></div>
                </Route>
            </Col>
          </Row>
      </Container>
    </>
  )
}

export default App;