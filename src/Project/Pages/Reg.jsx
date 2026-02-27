import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Reg() {
  let [AdminDetails, setAdminDetails] = useState(JSON.parse(localStorage.getItem("AdminData")) || [])
  let [AdminImage, setAdminImage] = useState("") // for storing image url in state
  //document.getElementBy.......... (js)
  //useRef()  React
  let AdminName = useRef()
  let AdminEmail = useRef()
  let AdminPassword = useRef()
  let AdminImageUrl = useRef()

  function GetUserdetails() {
    let AdminNameValues = AdminName.current.value
    let AdminEmailValues = AdminEmail.current.value
    let AdminPasswordValues = AdminPassword.current.value
    if (AdminImage == '') {
      alert("Kindly Upload Image")
      return
    }
    let obj = {
      AdminNameValues,
      AdminEmailValues,
      AdminPasswordValues,
      AdminImage
    }
    setAdminDetails([...AdminDetails, obj])

  }
  function GetUrl() {
    let Myfiles = AdminImageUrl.current.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(Myfiles)
    reader.onload = function () {
      setAdminImage(reader.result)
    }

  }
  //array of object (auto gernated Keys) (its very common) delete data from mid (reset ur index number)
// [1,2,4,5]
  //object of object (Manually Created Keys)  (Rear chance for use)//localstorage

  useEffect(function () {
    localStorage.setItem("AdminData", JSON.stringify(AdminDetails))
  }, [AdminDetails])



  return (
    <div> {/* ========== REGISTRATION PAGE ========== */}
      <div id="registerPage" className="container">
        <div className="header">
          <h1>✨ Create Account</h1>
          <p>Join us and start creating events</p>
        </div>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" id='AdminName' ref={AdminName} className="form-input" placeholder="Name Here" />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" id='AdminEmail' ref={AdminEmail} className="form-input" placeholder="Damo@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" id='AdminPassword' ref={AdminPassword} className="form-input" placeholder="Create a strong password" />
        </div>
        <div className="form-group">
          <label className="form-label">Profile Picture</label>
          <div className="file-upload-box" >
            <div className="upload-icon">📷</div>
            <div className="upload-text">Click to upload your photo</div>
            <div className="upload-subtext">JPG, PNG or GIF (Max 5MB)</div>
          </div>
          {/* <input type="file" id='AdminImage' ref={AdminImage} style={{ display: 'none' }} /> */}
          {/* <input type="file" id='AdminImage' onChange={(e) => { FileUploadHandling(this) }} accept='.jpg' style={{ display: 'none' }} /> */}
          <input type="file" onChange={GetUrl} id='AdminImage' ref={AdminImageUrl} accept='.jpg' />
        </div>
        <button className="btn btn-primary" onClick={GetUserdetails} >Create Account</button>
        <div className="link-text"><Link to={"/AdminLogin"}> Already have an account? Login here </Link></div>
      </div>
    </div>
  )
  //component
  //there is not a html as return (that means that is Pure Function)
}
// custom hook
//Custom Function (its depend on your requirement) (reusable) (it start with use)



