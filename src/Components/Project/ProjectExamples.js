import React from 'react'
import ProjectExample from './ProjectExample'

const ProjectExamples = ({ project }) => {
  return (
    <div className='project-examples'>
      { project.examples && project.examples.map((example) => <>
        <ProjectExample example={example} file={example.file} />
      </>)}
    </div>
  )
}

export default ProjectExamples