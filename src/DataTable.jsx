import React from 'react'

export default function DataTable(props) {

	if (props.Res) {
		return (
			<div>this user name is av.</div>
		)
	}
	else {
		return (
			<div>invalid user</div>
		)
	}
}
