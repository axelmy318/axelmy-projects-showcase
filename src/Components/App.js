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

import ShowCharsExample from './examples_WeekdaysInput/ShowCharsExample';
import ExampleSidebar from './ExampleSidebar';

import OffsetsAndSizesExample from './examples_NewWindow/OffsetsAndSizesExample';
import Footer from './Footer';

import { CgCornerLeftUp as LogoHome } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import Homepage from './Homepage';
import ShowRepositoryExample from './examples_ReadmePrinter/ShowRepositoryExample';
import FunctionExample from './examples_ReadmePrinter/FunctionExample';
import GithubScraper, { Contributors, Languages, PushedAt, Size, StargazersCount, Topics } from 'react-github-scraper';
import LanguagesExample from './examples_GithubScraper/LanguagesExample';
import TopicsExample from './examples_GithubScraper/TopicsExample';
import ContributorsExample from './examples_GithubScraper/ContributorsExample';
import StargazersCountExample from './examples_GithubScraper/StargazersCountExample';
import WatchersCountExample from './examples_GithubScraper/WatchersCountExample';
import PushedAtExample from './examples_GithubScraper/PushedAtExample';

import WeatherWidgetBasicExample from './examples_WeatherStation/BasicExample'
import WeatherWidgetMoreDetails from './examples_WeatherStation/ShowMoreDetails'
import DashboardExample from './examples_WeatherStation/DashboardExample';

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
          path: '/react-github-scraper', 
          name: 'React Github Scraper', 
          github: {
            username: 'axelmy318',
            repository: 'react-github-scraper',
            mainBranch: 'master'
          },
          npmjs: 'https://www.npmjs.com/package/react-github-scraper',
          installation: 'npm i react-github-scraper',
          examples: [
            {
              name: 'Languages',
              file: 'src/Components/examples_GithubScraper/LanguagesExample.js',
              description: 'A simple example covering how to use the Languages component',
              component: <LanguagesExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`},
                {property: 'maxDisplayed', type: 'number', value: `7`},
              ]
            },
            {
              name: 'Topics',
              file: 'src/Components/examples_GithubScraper/TopicsExample.js',
              description: 'A simple example covering how to use the Topics component',
              component: <TopicsExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`}
              ]
            },
            {
              name: 'Contributors',
              file: 'src/Components/examples_GithubScraper/ContributorsExample.js',
              description: 'A simple example covering how to use the Contributors component',
              component: <ContributorsExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`},
                {property: 'maxDisplayed', type: 'number', value: `7`},
              ]
            },
            {
              name: 'Stargazers count',
              file: 'src/Components/examples_GithubScraper/StargazersCountExample.js',
              description: 'A simple example covering how to use the StargazersCount component',
              component: <StargazersCountExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`},
                {property: 'prefix', type: 'string', value: `null`},
              ]
            },
            {
              name: 'Watchers count',
              file: 'src/Components/examples_GithubScraper/WatchersCountExample.js',
              description: 'A simple example covering how to use the WatchersCount component',
              component: <WatchersCountExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`},
                {property: 'prefix', type: 'string', value: `null`},
              ]
            },
            
            {
              name: 'Pushed at',
              file: 'src/Components/examples_GithubScraper/PushedAtExample.js',
              description: 'A simple example covering how to use the PushedAt component',
              component: <PushedAtExample />,
              defaults: [
                {property: 'label', type: 'string', value: `null`},
                {property: 'showAsDate', type: 'bool', value: `false`},
              ]
            },
          ]
        },
        {
          type: 'package',
          path: '/react-readme-printer', 
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
              name: 'Basic example',
              file: 'src/Components/examples_ReadmePrinter/ComponentExample.js',
              description: 'This example covers how print a readme file from GitHub',
              component: <ReadmeComponentExample />,
              defaults: []
            },
            {
              name: 'Show repository',
              file: 'src/Components/examples_ReadmePrinter/ShowRepositoryExample.js',
              description: 'This example covers how remove the repository tag on top of the readme',
              component: <ShowRepositoryExample />,
              defaults: [
                {property: 'showRepository', type: 'bool', value: 'true'}
              ]
            },
            {
              name: 'How to use the function',
              file: 'src/Components/examples_ReadmePrinter/FunctionExample.js',
              description: 'This example covers how to load a github repo readme using the function to store it somewhere. This function is used in the "MarkdownPrinter" component',
              component: <FunctionExample />,
              defaults: [
                {property: 'username', type: 'string', value: ''},
                {property: 'repository', type: 'string', value: ''},
                {property: 'branch', type: 'string', value: '"main"'},
              ]
            },
          ]
        },
        {
          type: 'package',
          path: '/react-weather-station', 
          name: 'React Weather Station', 
          github: {
            username: 'axelmy318',
            repository: 'react-weather-station',
            mainBranch: 'master'
          },
          npmjs: 'https://www.npmjs.com/package/react-weather-station',
          installation: 'npm i react-weather-station',
          examples: [
            {
              name: 'Basic example',
              file: 'src/Components/examples_WeatherStation/BasicExample.js',
              description: 'A simple example using the default configuration',
              component: <WeatherWidgetBasicExample />,
              defaults: [
                {property: 'location', type: 'string', value: `""`},
                {property: 'theme', type: 'string', value: `main`},
                {property: 'color', type: 'string', value: `secondary`},
                {property: 'moreDetails', type: 'boolean', value: `false`},
              ]
            },
            {
              name: 'Show more details',
              file: 'src/Components/examples_WeatherStation/BasicExample.js',
              description: 'A simple example covering how to show more details',
              component: <WeatherWidgetMoreDetails />,
              defaults: [
                {property: 'moreDetails', type: 'boolean', value: `true`},
              ]
            },
            {
              name: 'Using as a dashboard',
              file: 'src/Components/examples_WeatherStation/DashboardExample.js',
              description: 'This example covers how to use the library as a dashboard',
              component: <DashboardExample />,
              defaults: [
                {property: 'moreDetails', type: 'boolean', value: `true`},
              ]
            },
          ]
        },
        {
          type: 'package',
          path: '/react-weekdays-input', 
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
              name: 'Basic example',
              file: 'src/Components/examples_WeekdaysInput/BasicExample.js',
              description: 'A simple example using the default configuration',
              component: <WeekdaysBasicExample />,
              defaults: [
                {property: 'value', type: 'string/array', value: `"0000000"`},
                {property: 'onChange', type: 'function', value: ``},
              ]
            },
            {
              name: 'Custom styles',
              file: 'src/Components/examples_WeekdaysInput/CustomStyleExample.js',
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
              name: 'Forcing state',
              file: 'src/Components/examples_WeekdaysInput/ForcedStateExample.js',
              description: 'This example covers how to force the state of certain days',
              component: <ForcedStateExample />,
              defaults: [
                {property: 'forcedState', type: 'array', value: ``}
              ]
            },
            {
              name: 'Slicing day names',
              file: 'src/Components/examples_WeekdaysInput/ShowCharsExample.js',
              description: 'This example covers how to slice the day names',
              component: <ShowCharsExample />,
              defaults: [
                {property: 'showChars', type: 'number', value: 'null'}
              ]
            },
            {
              name: 'Custom days',
              file: 'src/Components/examples_WeekdaysInput/CustomDaysExample.js',
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
              name: 'Basic example',
              file: 'src/Components/examples_NewWindow/BasicExample.js',
              description: 'A basic example of react-new-window',
              component: <NewWindowBasicExample />,
              defaults: []
            },
            {
              name: 'Offsets and sizes',
              file: 'src/Components/examples_NewWindow/OffsetsAndSizesExample.js',
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
              name: 'Title',
              file: 'src/Components/examples_NewWindow/TitleExample.js',
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
          path: '/axelmy-projects-showcase',
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
    applications: {
      label: '😎 Applications 😎',
      projects: [
        {
          type: 'application',
          path: '/philips-hue-controller',
          name: 'Philips HUE Controller',
          releases: 'https://github.com/axelmy318/philips-hue-controller/releases',
          github: {
            username: 'axelmy318',
            repository: 'philips-hue-controller',
            mainBranch: 'main'
          },
        },
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
      if(found)
        project = found
      
    })
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

  const sendToFamily = family => {
    if(family.projects.length > 0)
      sendToProject(family.projects[0])
    else
    setSelectedFamily(family)
  }

  const sendToHomepage = () => {
    history.push('/')
    setSelectedFamily(null)
    setSelectedProject(null)
    setSelectedTab({type: '', item: null})
  }

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
                    <h2 onClick={() => sendToFamily(families[family])} className='clickable family-selection-item'>
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
                        {selectedTab.type === 'readme' && <div className='readme-page'>
                          
                        <Row className='no-side-margin' style={{height: '100vh'}}>
                            <Col md={9} className='no-padding readme-col'>
                              <MarkdownPrinter username={selectedTab.item.github.username} repository={selectedTab.item.github.repository} branch={selectedTab.item.github.mainBranch} />
                            </Col>
                            <Col md={3} className='no-padding github-scraper-sidebar'>
                                <GithubScraper username={selectedTab.item.github.username} repository={selectedTab.item.github.repository} branch={selectedTab.item.github.mainBranch} >
                                    <StargazersCount prefix="⭐&nbsp;" label={'Stargazers count'} />
                                    <div className='separator'></div>
                                    <div><Languages label={'Languages'} /></div>
                                    <div className='separator'></div>
                                    <Topics label={'Topics'} />
                                    <div className='separator'></div>
                                    <Contributors label={'Contributors'} />
                                    <div className='separator'></div>
                                    <PushedAt label={'Last push'} />
                                    <div className='separator'></div>
                                    <Size label={'Size'} />
                                </GithubScraper>
                            </Col>
                        </Row>
                          </div>}
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