import React from 'react'

export const Card = ({q, a = null, ...props}) => (
	<div {...props}>
		<span className='question' dangerouslySetInnerHTML={Object.assign({}, { __html: q })}>
		</span>
	</div>
)