import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import { GetLocalStorageData } from '../Common/FileUploading';
export default function EventViewList() {
	// let UserId = useParams()
	let { id } = useParams()
	let [UserData, setUserData] = useState({})
	let [EventData, setEventData] = useState([])
	// [{}]
	let navigate = useNavigate()
	useEffect(() => {
		let LocalData = JSON.parse(localStorage.getItem("AdminData"))
		let ActualLoginId = Cookies.get("AdminId")
		if (ActualLoginId == id) { }
		else {
			alert("Unauthorized Access")
			Cookies.remove("AdminId")
			navigate("/AdminLogin")
			return
		}
		let UserDaetils = LocalData.filter(function (item, index) {//=1

			if (index == id) {
				return item
			}
		})
		setUserData(UserDaetils[0])
	}, [])
	function Logout() {
		Cookies.remove("AdminId")
		navigate("/AdminLogin")
	}
	useEffect(() => {
		let data = GetLocalStorageData("eventDetails") || []
		setEventData(data)
		// if (data) {
		// }
		// else {
		// 	setEventData([])
		// }
	}, [])//its work one time when page load 
	// {{}}

	function DeleteEvent(id) {
		// console.log(id)
		let data = GetLocalStorageData("eventDetails")
		data.splice(id, 1)
		localStorage.setItem("eventDetails", JSON.stringify(data))
		setEventData(data)
		// data.pop()//last wala delete kare ga
		// data.shift()//first wala delete kare ga
	}
	return (
		<div>
			<div id="eventsPage" className="container wide-container">
				<div className="navbar">
					<div className="user-profile">
						{/* <div className="user-avatar"  /> */}
						<img src={UserData.AdminImage} alt="" className="user-avatar" />
						<div className="user-info">
							<h3 className='text-Capital'>{UserData.AdminNameValues}</h3>
							<p className='text-Capital'>{UserData.AdminEmailValues}</p>
						</div>
					</div>
					<div className="nav-buttons">
						<Link to={'/Upload/Event/' + id}><button className="btn-nav" >+ Create Event</button></Link>
						<button className="btn-nav btn-logout" onClick={Logout}>Logout</button>
					</div>
				</div>
				<table className="EventTable">
					<thead>
						<tr>
							<th>Image</th>
							<th>Event Title</th>
							<th>Event Dis.</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							EventData.map(function (value, index) {//0-9
								// console.log(EventData)
								// console.log(index)
								// console.log(value)
								return <tr>
									<td><img src={value.EventImage} alt="Event 1" className="event-image" /></td>
									<td>{value.title}</td>
									<td>{value.description}</td>
									{/* <td><button className='btn btn-Red' onClick={DeleteEvent}>Delete</button></td> */}
									<td><button className='btn btn-Red' onClick={function (e) { DeleteEvent(index) }}>Delete</button></td>
								</tr>
							})
						}

					</tbody>
				</table>
			</div>

		</div>
	)
}
//todo list
//Qr Code gernate (Ek bar aap ne qr code gernate kr diya to us ko app again gernate na kare kyu ki aap us ko save krwa sakte ho)



// submit (5,6)
// 50%
//contaxt Api//props
//multy input box data submit with in 4 line
//Custom hook

// Redux(Defecult understanding )// working (contaxt Api)(light weaight state management)
// life cycle method


//react aagye

//state//{},[],"",0,true,false
//useeffect//component did mount//component did update//component will unmount
// []
// useEffect(() => {
		//code here
	// }, [])

//[stateVariable]//[stateVariable1,stateVariable2]
// useEffect(() => {
		//code here
	// }, [<stateVariable>,<stateVariable2>])
	

//without dependency array
// useeffect(function(){
// console.log("this is useeffect")
// })
//props
//react router

//form submission (normal)
// prams

// useRef,usenavigate,link
//database (Localstorage,sessionstorage,cookies)
//u can create project