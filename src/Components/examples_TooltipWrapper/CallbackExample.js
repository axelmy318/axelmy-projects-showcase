import React, { useState } from 'react'
import { TooltipWrapper } from 'react-tooltip-wrapper'

const BasicExample = () => {
	const [text, setText] = useState("I'm waiting...")

	return (<>
		<TooltipWrapper 
		placement={'right'}
		onShow={() => setText('Hello!')}
		onHide={() => setText('Okay bye!')}
		tooltip={<>Hi, I'm a tooltip 🙂</>}
		>
			<div className='text-lg inline'>
				Hover me
			</div>
		</TooltipWrapper>
		<br />
		<span className='mt-5'>{ text }</span>
	</>)
}

export default BasicExample