import React, { useEffect, useState } from 'react'

export default function DataUseEffect() {

	let [count, setCount] = useState(0)//database/storage
	let [count2, setCount2] = useState(0)//database/storage

	function Counting() {
		setCount(count + 1)
	}
	function Counting2() {
		setCount2(count2 + 1)
	}

	useEffect(function () {
		if (count == 10) {
			alert('Count is 10')
		}
		else {
			console.log('without Dep', count)
		}

	})//erevry time run

	useEffect(function () {
		if (count == 10) {
			alert('Count is 10')
		}
		else {
			console.log("With Dep", count)
		}

	}, [count])//track =>state
	//it runs every time when Count (state) will be changed/updated


	// useEffect(function () {
	// 	if (count == 10) {
	// 		alert('Count is 10')
	// 	}
	// 	else {
	// 		console.log(count)
	// 	}

	// }, [])//it runs only one time when u load/refresh that component/Page


	return (
		<div>
			<button onClick={Counting}>Count</button>
			<button onClick={Counting2}>Count2</button>
			<br /> count 1 {count}
			<br />count 2 {count2}
		</div>
	)
}
