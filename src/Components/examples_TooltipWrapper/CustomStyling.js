import React from 'react'
import { TooltipWrapper } from 'react-tooltip-wrapper'

const BasicExample = () => {
  return (
    <TooltipWrapper 
    placement={'right'}
    tooltip={<>Hi, I'm a tooltip 🙂</>}
    tooltipStyle={{
      borderRadius: "0px",
      border: '1px solid grey'
    }}
    >
        <div className='text-lg inline'>
            Tooltip with custom styling
        </div>
    </TooltipWrapper>
  )
}

export default BasicExample