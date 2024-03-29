import React from 'react'
import { TooltipWrapper } from 'react-tooltip-wrapper'

const BasicExample = () => {
  return (
    <TooltipWrapper tooltip={<>Hi, I'm a tooltip 🙂</>}>
        <div className='text-lg inline'>
            Get your mouse over me to see who I am
        </div>
    </TooltipWrapper>
  )
}

export default BasicExample