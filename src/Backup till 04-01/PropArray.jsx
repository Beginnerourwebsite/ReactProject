import React, { useState } from 'react'
import ChildCom from './ChildCom'

export default function PropArray() {
	//aray
	let [myArray, insertArrays] = useState([])
	function arrayInsert() {
		let MyName = document.getElementById("Name").value
		insertArrays([...myArray, MyName])
	}

	return (
		<div>

			<input type="text" id='Name' placeholder='Enter Name......' />
			<button onClick={arrayInsert}>save</button>
			<br />
			<ChildCom ronak={myArray} />
			{/*  <ChildCom /> is child comp. */}

			{/* PropArray is a parent Comp.*/}
		</div>
	)
}


//data another comp.
//loop in another

// one com.import into another com.

// function fun(a){}

// fun("Name")