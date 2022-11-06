import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProjectExample from './ProjectExample'

const ProjectExamples = ({ project }) => {
  let { '*': page } = useParams()
  const { hash } = useLocation()
  const decodedHash = decodeURI(hash)

  return (
    <div className='project-examples'>
      { project.examples && project.examples.map((example, index) => <React.Fragment key={index}>
        <ProjectExample page={page} open={example.name === decodedHash.substring(1)} example={example} file={example.file} />
      </React.Fragment>)}
    </div>
  )
}

export default ProjectExamples