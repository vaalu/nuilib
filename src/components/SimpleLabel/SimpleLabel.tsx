import React from 'react'
export type DefaultLabel = {
	title: string
}
export const SimpleLabel = (labelParams:DefaultLabel) => {
	const {title} = labelParams
	return(<div>
		This is a Simple Label: { title }
	</div>)
}
