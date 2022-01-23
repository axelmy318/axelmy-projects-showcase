import React, { useState } from 'react'
import {Route, useHistory } from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import BasicExample from './examples_WeekdaysInput/BasicExample';
import CustomStyleExample from './examples_WeekdaysInput/CustomStyleExample';
import ForcedStateExample from './examples_WeekdaysInput/ForcedStateExample';
import Example from './Example';

import { getCodeFor } from '../config/examplesCode';
import ShowCharsExample from './examples_WeekdaysInput/ShowCharsExample';
import ExampleSidebar from './ExampleSidebar';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedExample, setSelectedExample] = useState(null)
  const [areCodesLoaded, setAreCodesLoaded] = useState(false)

  
  const [projects, setProject] = useState([
    {
      path: '/react-new-window', 
      systemName: 'reactnewwindow',
      name: 'React New Window', 
      link: '', 
      examples: [
        {
          systemName: 'textexample1',
          name: 'Test example 1',
          description: 'Test',
          component: <div>test 1</div>,
          defaults: []
        }
      ]
    },
    {
      path: '/react-weekdays-input', 
      systemName: 'reactweekdaysinput',
      name: 'React Weekdays Input', 
      repository: 'https://github.com/axelmy318/react-weekdays-input.git',
      npmjs: 'https://www.npmjs.com/package/react-weekdays-input',
      installation: 'npm i react-weekdays-input',
      link: '', 
      examples: [
        {
          systemName: 'basicexample',
          name: 'Basic example',
          description: 'A simple example using the default configuration',
          component: <BasicExample />,
          defaults: [
            {property: 'value', type: 'string/array', value: `"0000000"`},
            {property: 'onChange', type: 'function', value: ``},
          ]
        },
        {
          systemName: 'customstyles',
          name: 'Custom styles',
          description: 'This example covers how to apply custom styling on the component',
          component: <CustomStyleExample />,
          defaults: []
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
      ]
    }
  ])
  
  const history = useHistory()

  const sendToProject = item => {
      history.push(item.path)
      setSelectedProject(item)
      setSelectedExample(item.examples[0])
  }

  const loadCodes = () => {
    setProject(projects.map(project => {
      project.examples.map(example => {
        example.code = getCodeFor(project.systemName, example.systemName)
        return example
      })
      return project
    }))

    setAreCodesLoaded(true)
  }

  if(!areCodesLoaded) loadCodes()

  if(window.location.pathname !== '/' && selectedProject === null) 
    sendToProject(projects.find(project => project.path === window.location.pathname))
  
  return (
    <>
      <Container fluid>
          <Row>
            <Col xs={2} className='no-padding'>
              <Sidebar label={'Projects'} selected={selectedProject}  onSelect={sendToProject} items={projects} />
            </Col>
            { selectedProject !== null && <Col xs={2} className='no-padding'>
              <ExampleSidebar project={selectedProject} selected={selectedExample} onSelect={setSelectedExample} items={selectedProject.examples} />
            </Col>
            }
            <Col>
                {
                  projects.map((project, index) => {
                    return (
                      <Route key={index} path={project.path} exact>
                        {selectedExample && <Example example={selectedExample} />}
                      </Route>
                    )
                  })
                }
                <Route path="/" exact>
                  <Header label={`Axelmy's projects showcase`} variant='large' />
                </Route>
            </Col>
          </Row>
      </Container>
    </>
  )
}

export default App;

function Home() {
  return <h2>Home</h2>;
}