import React, { useRef, useState } from 'react'
// import { Myfun2, a } from '../Common/FileUploading'
import FileToBase64 from '../Common/FileUploading'
export default function EventUpload() {
  let [EventImage, setEventImage] = useState("")
  let UploadEvents = useRef()
  function UploadImage() {
    UploadEvents.current.click()
  }
  async function ImagetoBase64() {
    let file = UploadEvents.current.files[0]
    // console.log(file)
    let data = await FileToBase64(file)
    console.log(data)

  }
  function Submit() {

  }
  return (
    <div><div id="createEventPage" className="container">
      <button className="btn-back">← Back to Events</button>
      <div className="header">
        <h1>🎪 Create New Event</h1>
        <p>Share your event with the world</p>
      </div>
      <div className="form-group">
        <label className="form-label">Event Title</label>
        <input type="text" className="form-input" placeholder="Amazing Tech Conference 2026" />
      </div>
      <div className="form-group">
        <label className="form-label">Event Description</label>
        <textarea className="form-textarea" placeholder="Describe your event in detail..." defaultValue={""} />
      </div>
      <div className="form-group">
        <label className="form-label">Event Cover Image</label>
        <div className="file-upload-box" onClick={UploadImage}>
          <div className="upload-icon">🖼️</div>
          <div className="upload-text">Upload event banner</div>
          <div className="upload-subtext">Recommended: 1200x600px</div>
          <input type="file" onChange={ImagetoBase64} accept='.jpg' style={{ display: "none" }} ref={UploadEvents} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={Submit}>Publish Event</button>
      <button className="btn btn-secondary">Save as Draft</button>
    </div></div>

  )
}
