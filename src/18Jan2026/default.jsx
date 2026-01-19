import React, { useEffect, useState } from 'react'

export default function Default() {
	let [ApiData, setApiData] = useState([])
	async function ApiCall() {
		let res = await fetch('https://jsonplaceholder.typicode.com/posts')
		let data = await res.json()
		console.log(data)

		setApiData(data)
	}
	// ApiCall()

	useEffect(function () {
		ApiCall()
	}, [])

	//Api/Database data fetching
	//whenever state will be changed/updated it will re render the component
	

	//infinite loop
	return (
		<div>
			{/* <button onClick={ApiCall}>call</button> */}
		</div>
	)
}
