import React, { useEffect, useRef, useState } from 'react'
// import { Myfun2, a } from '../Common/FileUploading'
import FileToBase64, { GetLocalStorageData } from '../Common/FileUploading'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
export default function EventUpload() {
  let [EventImage, setEventImage] = useState("")
  let [EventDetails, setEventDetails] = useState(GetLocalStorageData("eventDetails") || [])
  let Titles = useRef()
  let Descriptions = useRef()
  let UploadEvents = useRef()
  let FileName = useRef()
  let { id } = useParams()

  function UploadImage() {
    UploadEvents.current.click()
  }
  async function ImagetoBase64() {
    let file = UploadEvents.current.files[0]

    FileName.current.innerHTML = file.name
    let data = await FileToBase64(file)
    setEventImage(data)

  }
  function Submit() {
    let title = Titles.current.value
    let description = Descriptions.current.value
    let obj = { title, description, EventImage }
    setEventDetails([...EventDetails, obj])
    toast("Event created successfully!")
    Reset()

  }

  function Reset() {
    Titles.current.value = ""
    Descriptions.current.value = ""
    FileName.current.innerHTML = ""
    setEventImage("")
  }
  useEffect(() => {
    localStorage.setItem("eventDetails", JSON.stringify(EventDetails))
  }, [EventDetails])
  return (
    <div><div id="createEventPage" className="container">
      <Link to={"/Summary/Event/" + id}><button className="btn-back">← Back to Events</button></Link>
      <div className="header">
        <h1>🎪 Create New Event</h1>
        <p>Share your event with the world</p>
      </div>
      <div className="form-group">
        <label className="form-label">Event Title</label>
        <input type="text" ref={Titles} className="form-input" placeholder="Amazing Tech Conference 2026" />
      </div>
      <div className="form-group">
        <label className="form-label">Event Description</label>
        <textarea className="form-textarea" ref={Descriptions} placeholder="Describe your event in detail..." defaultValue={""} />
      </div>
      <div className="form-group">
        <label className="form-label">Event Cover Image</label>
        <div className="file-upload-box" onClick={UploadImage}>
          <div className="upload-icon">🖼️</div>
          <div className="upload-text">Upload event banner</div>
          <div className="upload-subtext" ref={FileName}></div>
          <input type="file" onChange={ImagetoBase64} accept='.jpg' style={{ display: "none" }} ref={UploadEvents} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={Submit}>Publish Event</button>
      <button className="btn btn-secondary" onClick={Reset}>Reset</button>
    </div>

      <ToastContainer />
    </div>

  )
}
