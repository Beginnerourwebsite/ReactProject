import React from 'react'

export default function ChildCom(props) {
	// loop
	// { key: [] }
	console.log(props)
	return (
		<div>
			{props.ronak.map(function (value, index) {
				console.log(value)
				return <tr>
					<td>{value}</td>
				</tr>
			})}
		</div>
	)
}
