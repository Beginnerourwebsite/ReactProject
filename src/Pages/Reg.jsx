import React, { useEffect, useRef, useState } from 'react'

export default function Reg() {
  // let AdminImage=useRef()
  let [AdminLogin, setAdminLogin] = useState(JSON.parse(localStorage.getItem("AdminDetails")) || {})
  let [Url, setUrl] = useState("")
  function handleAdminLogin() {
    let AdminName = document.getElementById("AdminName").value
    let AdminEmail = document.getElementById("AdminEmail").value
    let AdminPassword = document.getElementById("AdminPassword").value

    let myObjKeys = Object.keys(AdminLogin).sort(); //array of keys
    let maxIndexNumber = Number(myObjKeys[myObjKeys.length - 1]) + 1; //length check
    let obj = {
      [maxIndexNumber]: { Name: AdminName, Email: AdminEmail, Passoword: AdminPassword, image: Url }
    }
    setAdminLogin({ ...AdminLogin, ...obj })
    //next

  }

  useEffect(() => {
    localStorage.setItem("AdminDetails", JSON.stringify(AdminLogin))

  }, [AdminLogin])

  function FileUpload() {
    document.getElementById("AdminImage").click()
    // AdminImage.current.click()
  }
  // base 64
//rag.complite
  function FileUploadHandling() {
    // self.files
    let UploadedFile = document.getElementById("AdminImage").files[0]
    let Reader = new FileReader()
    Reader.readAsDataURL(UploadedFile)
    Reader.onload = function () {
      // console.log(Reader.result)
      setUrl(Reader.result)
    }
  }
  return (
    <div> {/* ========== REGISTRATION PAGE ========== */}
      <div id="registerPage" className="container">
        <div className="header">
          <h1>✨ Create Account</h1>
          <p>Join us and start creating events</p>
        </div>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" id='AdminName' className="form-input" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" id='AdminEmail' className="form-input" placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" id='AdminPassword' className="form-input" placeholder="Create a strong password" />
        </div>
        <div className="form-group">
          <label className="form-label">Profile Picture</label>
          <div className="file-upload-box" onClick={FileUpload}>
            <div className="upload-icon">📷</div>
            <div className="upload-text">Click to upload your photo</div>
            <div className="upload-subtext">JPG, PNG or GIF (Max 5MB)</div>
          </div>
          {/* <input type="file" id='AdminImage' ref={AdminImage} style={{ display: 'none' }} /> */}
          {/* <input type="file" id='AdminImage' onChange={(e) => { FileUploadHandling(this) }} accept='.jpg' style={{ display: 'none' }} /> */}
          <input type="file" id='AdminImage' onChange={FileUploadHandling} accept='.jpg' style={{ display: 'none' }} />
        </div>
        <button className="btn btn-primary" onClick={handleAdminLogin}>Create Account</button>
        <div className="link-text">Already have an account? Login here</div>
      </div>
    </div>
  )
}
