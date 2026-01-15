import React, { useRef, useState } from 'react'

export default function Ref() {
	let InputName = useRef()
	let Input2 = useRef()

	let [Names, setNames] = useState("")

	function ShowData() {
		// let UserName = document.getElementById('Name').value
		let UserName = InputName.current.value;
		console.log(Input2.current.value);
		setNames(UserName)
	}

	return (
		<div>

			{/* <input type="text" id='Name' /> */}
			<input type="text" ref={InputName} />
			<input type="text" ref={Input2} />

			<button onClick={ShowData}>Show</button>
			<br />
			{Names}
		</div>
	)
}


//useRef()
