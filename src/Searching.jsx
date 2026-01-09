import React, { useState } from 'react'
import DataTable from './DataTable'

export default function Searching(props) {
	// console.log(props.Data, props.pankaj)

	// let [UserData, setUserData] = useState([...props.Data, props.Pankaj])
	let [Userresult, setUserresult] = useState(false)




	function SearchingData() {
		let MyDatas = props.userNames//array

		let Names = document.getElementById("NameSearch").value
		//array includes()
		let result = MyDatas.includes(Names)//true/false
		setUserresult(result)
	}
	return (
		<div>
			<div style={{ margin: '40px' }}></div>
			<input type="text" placeholder='Search Name....' id='NameSearch' />
			<button onClick={SearchingData}>Searching</button>


			<DataTable Res={Userresult}/>
		</div>
	)
}
