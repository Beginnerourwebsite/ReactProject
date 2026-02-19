import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
export default function EventViewList() {
	// let UserId = useParams()
	let { id } = useParams()
	let [UserData, setUserData] = useState({})
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
			// console.log(LocalData[UserId.id])
			if (index == id) {
				return item
			}


		})
		setUserData(UserDaetils[0])
	}, [])
	// {{}}
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
						<button className="btn-nav" >+ Create Event</button>
						<button className="btn-nav btn-logout" >Logout</button>
					</div>
				</div>
				<table className="events-table table table-striped table-hover shadow-sm rounded-2">
					<thead>
						<tr>
							<th>Image</th>
							<th>Event Title</th>
							<th>Event Dis.</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" alt="Event 1" className="event-image" /></td>
							<td>Amazing Tech Conference 2026</td>
							<td>An in-depth look at the latest in technology and innovation.</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	)
}
