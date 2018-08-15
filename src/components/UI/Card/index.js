import React from 'react'

export const Card = ({q, qID, a = null, c, ...props}) => (
	<div {...props}>

		<div className='card__header'>
			{ c }
		</div>

		<span
			className='question'
			dangerouslySetInnerHTML={Object.assign({}, { __html: q })}>
		</span>
		
	</div>
)