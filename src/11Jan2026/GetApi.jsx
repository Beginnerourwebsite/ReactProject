import React, { useState } from 'react'
import TableBind from './TableBind'
import Form from './Form'

export default function GetApi(props) {
	// props.Mydata [{}]
	let [UserData, setUserData] = useState([])
	async function GetMyApi() {
		let Response = await fetch("https://jsonplaceholder.typicode.com/users")
		let Result = await Response.json()
		// console.log(Result)

		// let arr = []
		// Result.forEach(element => {
		// 	let obj = {
		// 		Name: element.name,
		// 		Phone: element.phone,
		// 		Address: element.address.city
		// 	}

		// 	arr.push(obj)
		// 	console.log(element)
		// });
		// setUserData(Result)
		setUserData([...props.MyData, ...Result])
		//Axois
		// .then().catch()
	}
	return (
		<div>
			<button onClick={GetMyApi} className='btn btn-outline-dark'>Get </button>

			<TableBind Data={UserData} />
		</div>
	)
}



// useEffect()