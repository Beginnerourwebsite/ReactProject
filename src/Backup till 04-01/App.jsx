import React, { useState } from 'react'

export default function App() {
	// console.log(useState("Mukesh"))
	// let [Get, setInsert] = useState('Mukesh')//dest. way
	// let [GetObj, setInsertObj] = useState()//dest. way

	// let a = { name: 'pankaj' }
	//a.name Str.
	//let { name } = a//destr.
	// let a = ['mukes',
	// 	function () { }
	// ]


	//function predefine
	// like varaible
	//let a=[]
	//let a={}
	//let a=""
	//let a=0
	//let a=document.getElementById()
	// let a=document.createElement("div")
	// function fun1() {
	// 	return 'ram'
	// }
	// function Data() {
	// 	console.log(setInsert("Rajesh"))
	// 	setInsertObj()
	// }
	// console.log(fun1())

	// let a={}
	// let b='Parkash'
	// let c=a+b
	// console.log(c)
	// let [GetName, InsertName] = useState('')
	// let [GetClass, InsertClass] = useState('')
	// let [GetPhone, InsertPhone] = useState(0)
	// let [GetAddress, InsertAddress] = useState('')
	// let [AddAllDetails, InsertAddAllDetails] = useState(<></>)
	// function InsertData() {
	// 	let SetName = document.getElementById("Name").value
	// 	let SetClass = document.getElementById("Class").value
	// 	let SetPhone = document.getElementById("Phone").value
	// 	let SetAddress = document.getElementById("Address").value

	// 	// InsertName(SetName)
	// 	// InsertClass(SetClass)
	// 	// InsertPhone(SetPhone)
	// 	// InsertAddress(SetAddress)

	// 	let Tags =
	// 		<div>
	// 			Name:<span>{SetName}</span> ||
	// 			class:<span>{SetClass}</span> ||
	// 			Address:<span>{SetPhone}</span> ||
	// 			Phone<span>{SetAddress}</span>
	// 		</div>

	// 	//contcat
	// 	// InsertAddAllDetails(AddAllDetails + Tags)
	// 	InsertAddAllDetails(<div>{AddAllDetails}{Tags}</div>)
	// 	// document.getElementById("box").innerHTML(AddAllDetails)
	// 	// console.log(Tags)

	// }


	//...[],{}
	//...undefine
	let [getArr, InsertArr] = useState([])
	function InsertData() {
		let myName = document.getElementById("Name").value//string
		InsertArr([...getArr, myName])
	}
	// let [getArr1, InsertArr1] = useState()
	// function InsertData() {
	// 	let myName = document.getElementById("Name").value//string
	// 	InsertArr(myName)
	// }
	
	//js
	return (

		//html
		<div>
			<input type="text" placeholder='Name' name="Name" id="Name" /><br /><br />
			{/* <input placeholder='Class' type="text" name="Class" id="Class" /><br /><br />
			<input placeholder='Phone' type="text" name="Phone" id="Phone" /><br /><br />
			<input placeholder='Address' type="text" name="Address" id="Address" /><br /><br /> */}
			{/* <button onClick={}>save</button> */}
			<button onClick={InsertData}>save</button>
			{/* <div><span>Name:</span>{GetName}</div>
			<div><span>Class:</span>{GetClass}</div>
			<div><span>Phone:</span>{GetPhone}</div>
			<div><span>Address:</span>{GetAddress}</div> */}

			{/* {AddAllDetails} */}
			<div id='box'>{getArr}</div>
{/* //html */}

			{/* override stop */}
			{/* list */}
		</div>
	)
}



//