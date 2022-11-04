import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectExample from './ProjectExample'

const ProjectExamples = ({ project }) => {
  const { hash } = useLocation()
  const decodedHash = decodeURI(hash)
  const [open, setOpen] = useState(decodedHash !== "" && decodedHash !== "#" ? decodedHash.substring(1) : null)

  return (
    <div className='project-examples'>
      { project.examples && project.examples.map((example, index) => <React.Fragment key={index}>
        <ProjectExample open={example.name === open} setOpen={setOpen} example={example} file={example.file} />
      </React.Fragment>)}
    </div>
  )
}

export default ProjectExamples