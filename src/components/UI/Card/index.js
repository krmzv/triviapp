import React from 'react'

export const Card = ({q, qID, a = null, ...props}) => (
	<div {...props}>

		<div className='card__header'>
			{ `🤔 Q#${qID + 1}` }
		</div>

		<span
			className='question'
			dangerouslySetInnerHTML={Object.assign({}, { __html: q })}>
		</span>
		
	</div>
)