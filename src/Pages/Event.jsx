import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Event() {
	let navigater = useNavigate()
	function SendToDetails() {
		//redirect to event details page
		navigater("/EventDetails")
	}
	return (
		<div>
			<div id="eventsPage" className="container wide-container">

				<div className="header">
					<h1>🎉 Discover Events</h1>
					<p>Browse through amazing events from our community</p>
				</div>
				<div className="events-grid">
					{/* Event Card 1 */}
					<div  onClick={SendToDetails}  className="event-card">
						<div className="event-image">🎵</div>
						<div className="event-content">
							<h2 className="event-title">Summer Music Festival</h2>
							<p className="event-description">Join us for an unforgettable evening of live music, food, and entertainment under the stars!</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">Sarah Johnson</div>
									<div className="creator-email">sarah@events.com</div>
								</div>
							</div>
						</div>
					</div>
					{/* Event Card 2 */}
					<div  onClick={SendToDetails}  className="event-card">
						<div className="event-image">💻</div>
						<div className="event-content">
							<h2 className="event-title">Tech Startup Conference</h2>
							<p className="event-description">Network with industry leaders and discover the latest innovations in technology and entrepreneurship.</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">Mike Chen</div>
									<div className="creator-email">mike@techconf.com</div>
								</div>
							</div>
						</div>
					</div>
					{/* Event Card 3 */}
					<div onClick={SendToDetails}  className="event-card">
						<div className="event-image">🎨</div>
						<div className="event-content">
							<h2 className="event-title">Art Exhibition 2026</h2>
							<p className="event-description">Explore contemporary art from emerging artists from around the world in this exclusive gallery showcase.</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">Emily Davis</div>
									<div className="creator-email">emily@artgallery.com</div>
								</div>
							</div>
						</div>
					</div>
					{/* Event Card 4 */}
					<div onClick={SendToDetails}  className="event-card">
						<div className="event-image">🏃</div>
						<div className="event-content">
							<h2 className="event-title">City Marathon 2026</h2>
							<p className="event-description">Challenge yourself in this annual marathon through the heart of the city. All fitness levels welcome!</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">David Wilson</div>
									<div className="creator-email">david@marathon.org</div>
								</div>
							</div>
						</div>
					</div>
					{/* Event Card 5 */}
					<div onClick={SendToDetails}  className="event-card">
						<div className="event-image">🍕</div>
						<div className="event-content">
							<h2 className="event-title">Food &amp; Wine Festival</h2>
							<p className="event-description">Taste delicious cuisine from top chefs and sample fine wines from around the world.</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">Lisa Anderson</div>
									<div className="creator-email">lisa@foodfest.com</div>
								</div>
							</div>
						</div>
					</div>
					{/* Event Card 6 */}
					<div onClick={SendToDetails}  className="event-card">
						<div className="event-image">📚</div>
						<div className="event-content">
							<h2 className="event-title">Book Lovers Meetup</h2>
							<p className="event-description">Connect with fellow readers, discuss your favorite books, and discover new authors in a cozy atmosphere.</p>
							<div className="event-creator">
								<div className="creator-avatar" />
								<div className="creator-info">
									<div className="creator-name">Robert Taylor</div>
									<div className="creator-email">robert@bookclub.com</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
