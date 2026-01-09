import React, { useState } from 'react'
import TableBind from './TableBind'

export default function Form() {
	let [UserData, setUserData] = useState([])//arary of Object
	function SaveData() {
		let UserName = document.getElementById("Name").value
		let UserAddress = document.getElementById("Address").value
		let UserPhone = document.getElementById("Phone").value

		let Obj = {
			Name: UserName,
			Phone: UserPhone,
			Address: UserAddress
		}
		// console.log(Obj)
		setUserData([...UserData, Obj])

	}
	// [
	// 	{
	// 			Name: "UserName",
	// 			Phone: "UserPhone",
	// 			Address: "UserAddress"
	// 		}
	// ]
	return (
		<div>
			<input type="text" name="" placeholder='Name' id="Name" />
			<input type="text" name="" placeholder='Address' id="Address" />
			<input type="number" name="" placeholder='Phone' id="Phone" />
			<button onClick={SaveData}>Save</button>
			<TableBind Data={UserData} />
		</div>
	)
}

// API
// Fatch|| Axios
// UseEffect