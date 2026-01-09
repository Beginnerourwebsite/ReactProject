import React, { useState } from 'react'

export default function Index02Jan2025() {
	let [Arrays, insertArrays] = useState([])
	let a = '123456789'
	function InsertValues() {
		let SetName = document.getElementById("Name").value

		insertArrays([...Arrays, SetName])
	}
	function JsLoop() {
		Arrays.map(function (value, index) {
			// let tr = document.createElement("tr")
			// let td = document.createElement("td")
			// tr.append(td)
			// document.getElementById("myDataTable").append(tr)
			let tags=`<tr>
			<td>${value}</td>
			</tr>`
			document.getElementById("myDataTable").innerHTML=tags

		})
	}
	//js
	return (
		//html
		<div>
			<input type='text' id='Name' placeholder='Enter Name......' />
			<button onClick={InsertValues}>save</button>
			<button onClick={JsLoop}>show</button>
			<table id='myDataTable'>
				{/* <tr>
					<td>Name</td>
				</tr>
				<tr>
					<td>Name2</td>
				</tr>
				<tr>
					<td>Name3</td>
				</tr> */}

				{
					Arrays.map(function (value, index) {
						console.log(value)
						//tag
						return <tr>
							<td>{value}</td>
						</tr>
					})
				}
			</table>
		</div>
	)
}
//...{},[]
// useState("")
//array useState()

// array of array
// normal array


// above return js
// inside return React js