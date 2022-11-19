import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useLanguage, { useTexts } from '../customHooks/language/useLanguage'
import ProjectExample from './ProjectExample'

const ProjectExamples = ({ project }) => {
  let { '*': page } = useParams()
  const { hash } = useLocation()
  const decodedHash = decodeURI(hash)

  const language = useLanguage()
  const texts = useTexts()

  const supportedLanguages = ['en']

  return (
    <div className='project-examples'>
        { !supportedLanguages.includes(language.code) && <div className='unavailable_page_language_text'>{texts.get("PAGE_UNAVAILABLE_IN_LANGUAGE")}</div> }
      	{ 
			project.examples && project.examples.map((example, index) => <React.Fragment key={index}>
				<ProjectExample page={page} open={example.name === decodedHash.substring(1)} example={example} file={example.file} />
			</React.Fragment>
		)}
    </div>
  )
}

export default ProjectExamples