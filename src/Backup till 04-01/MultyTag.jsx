import React, { useState } from 'react'

export default function MultyTag() {
	let [Name, setName] = useState([])//Default Value[]
	function insertName() {
		let NameVar = document.getElementById("Name").value

		setName([...Name, NameVar])// as a array 
	}
	return (
		<div>

			<input type="text" name="" id="Name" placeholder='Enter Name...' />
			<button onClick={insertName}>Submit</button>
			{/* html+>js {} */}
			{/* html */}
			{

				Name.map(function (value, index) {
					console.log(value)
				})
				//js 

			}



		</div>
	)


}


//1st input =>Name
//btn=>save=>data save state=>as Array
//Array loop=>return <div>{Name}</div>

//loop run in js=>
//loop in html=>use