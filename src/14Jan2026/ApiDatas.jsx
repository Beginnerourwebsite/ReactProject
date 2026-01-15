import React, { useEffect, useState } from 'react'

export default function ApiDatas() {
	let [count, setcount] = useState(0)
	async function ApiCall() {

		let Response = await fetch("https://jsonplaceholder.typicode.com/users")
		let Result = await Response.json()
		console.log(Result)

		// setcount(count + 1)
	}
ApiCall()
	useEffect(function () {
		console.log("this is my UseEffect")
	}, [])

	// useEffect(function () {
	// 	console.log("this is State UseEffect")
	// }, [count])

	//useEffect => when u referesh page
	return (
		<div>
			<button onClick={ApiCall}>save</button>
		</div>
	)
}
