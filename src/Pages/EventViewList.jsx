import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EventViewList() {
	let redirect = useNavigate();
	let [UserDetails, setUserDetails] = useState({})

	let { id } = useParams()

	useEffect(function () {
		// console.log(id)

		let localDatas = localStorage.getItem("AdminDetails")
		let Datas = JSON.parse(localDatas)
		console.log(Datas[id])
		setUserDetails({ Name: Datas[id].Name, Email: Datas[id].Email, Image: Datas[id].image })


	}, [])

	function logout() {
		redirect('/AdminLogin');
	}
	function CreateEvent() {
		redirect('/Upload/Event/'+id);
	}

	//low=>=>=>=>=>=>
	return (
		<div>
			<div id="eventsPage" className="container wide-container">
				<div className="navbar">
					<div className="user-profile">
						{/* <div className="user-avatar"  /> */}
						<img src={UserDetails.Image} alt="" className="user-avatar" />
						<div className="user-info">
							<h3 className='text-Capital'>{UserDetails.Name}</h3>
							<p className='text-Capital'>{UserDetails.Email}</p>
						</div>
					</div>
					<div className="nav-buttons">
						<button className="btn-nav" onClick={CreateEvent}>+ Create Event</button>
						<button className="btn-nav btn-logout" onClick={logout}>Logout</button>
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
