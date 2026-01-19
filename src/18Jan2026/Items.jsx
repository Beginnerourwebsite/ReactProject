import React, { use, useEffect, useState } from 'react'
import Card from './Card'

export default function Items() {
	let [MyApiData, setMyApiData] = useState([])

	async function fetchData() {
		let res = await fetch("https://dummyjson.com/users")
		let result = await res.json()
		let Data = result.users

		setMyApiData(Data)
	}

	useEffect(function () {
		fetchData()
	}, [])
	//Projact
	//Api use =>card convert
	return (
		<div>
			{/* <button onClick={fetchData}>Call</button> */}
			<Card UserData={MyApiData} />
		</div>
	)
}
