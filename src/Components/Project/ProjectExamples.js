import React from 'react'
import ProjectExample from './ProjectExample'

const ProjectExamples = ({ project }) => {
  return (
    <div className='project-examples'>
      { project.examples && project.examples.map((example, index) => <React.Fragment key={index}>
        <ProjectExample example={example} file={example.file} />
      </React.Fragment>)}
    </div>
  )
}

export default ProjectExamples