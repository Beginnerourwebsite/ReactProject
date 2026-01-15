import React, { useEffect, useState } from 'react'
import TableBind from './TableBind'
import Form from './Form'

export default function GetApi(props) {

	let [UserData, setUserData] = useState([])
	async function GetMyApi() {
		let Response = await fetch("https://jsonplaceholder.typicode.com/users")
		let Result = await Response.json()
		
		setUserData([...props.MyData, ...Result])
		
	}

	//when u refersh page Useeffect runs automatically
	useEffect(function () {
		GetMyApi()
	}, [props.MyData])//React Hook/Method/function
	return (
		<div>
			{/* <button onClick={GetMyApi} className='btn btn-outline-dark'>Get </button> */}

			<TableBind Data={UserData} />
		</div>
	)
}



// useEffect()