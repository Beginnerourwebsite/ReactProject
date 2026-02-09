import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EventViewList() {
	let redirect = useNavigate();


	let { id } = useParams()//return obj
	// let obj = useParams()
	// console.log(obj.id)

	useEffect(function () {
		console.log(id)
		
	}, [])

	function logout() {
		redirect('/AdminLogin');
	}
	function CreateEvent() {
		redirect('/Upload/Event');
	}
	return (
		<div>
			<div id="eventsPage" className="container wide-container">
				<div className="navbar">
					<div className="user-profile">
						<div className="user-avatar" />
						<div className="user-info">
							<h3>John Doe</h3>
							<p>john@example.com</p>
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
