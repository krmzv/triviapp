import React from 'react'

export const Button = ({cn, text, ...props}) => (
	<button {...props} className={cn}>
		{ text }
	</button>
)