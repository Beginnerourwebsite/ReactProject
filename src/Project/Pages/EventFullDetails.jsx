import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EventFullDetails() {
  let navigater = useNavigate()
  function BackToHome() {
    navigater("/")
  }
  return (
    <div> <div id="eventDetailPage" className="container wide-container">
      <button className="btn-back" onClick={BackToHome}>← Back to All Events</button>
      <div className="event-detail">
        <div className="event-detail-image">🎵</div>
        <div className="event-detail-content">
          <h1 className="event-detail-title">Summer Music Festival 2026</h1>
          <p className="event-detail-description">
            Get ready for the most spectacular music event of the year! Our Summer Music Festival brings together world-renowned artists, emerging talents, and music lovers from all over the globe.
            <br /><br />
            Experience three days of non-stop entertainment featuring multiple stages, diverse music genres, gourmet food vendors, art installations, and unforgettable moments. Whether you're into rock, pop, electronic, or indie music, we have something special for everyone.
            <br /><br />
            Join thousands of fellow music enthusiasts as we celebrate the universal language of music under the summer sky. Early bird tickets are now available with special discounts!
          </p>
          <div className="event-detail-creator">
            <div className="creator-avatar-large" />
            <div className="creator-details">
              <h3>Created by Sarah Johnson</h3>
              <p>sarah@events.com</p>
              <p className="creator-date">Published on February 1, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}
