import React, { useState } from 'react'
import Searching from './Searching'

export default function Form() {
	let [Name, setName] = useState([])//database
	// let [Name2, setName2] = useState("Shriji")
	function saveData() {
		let userName = document.getElementById("Name").value
		setName([...Name, userName])
	}
	return (
		<div>

			<input type="text" placeholder='Name' name="" id="Name" />
			<button onClick={saveData}>Save</button>
			<Searching userNames={Name} />
			{/* <Searching pankaj={Name} Data={Name2} /> */}
		</div>
	)
}
