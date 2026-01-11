import React, { useState } from 'react'
import TableBind from './TableBind'
import GetApi from './GetApi'

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

			<div className='border p-3 m-auto my-3 rounded d-flex flex-column' style={{ width: "30rem" }}>
				<input className='form-control mb-2' type="text" name="" placeholder='Name' id="Name" />
				<input className='form-control mb-2' type="text" name="" placeholder='Address' id="Address" />
				<input className='form-control mb-2' type="number" name="" placeholder='Phone' id="Phone" />
				<button className='btn btn-success' onClick={SaveData}>Save</button>
			</div>
			<GetApi MyData={UserData} />
			{/* <TableBind Data={UserData} /> */}
		</div>
	)
}
// 3 css (html)
// internal
//external
//inline



// 2 css(react)
// external
// inline


// API
// Fatch|| Axios
// UseEffect