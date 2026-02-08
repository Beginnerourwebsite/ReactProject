import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  let Mail = useRef()
  let Password = useRef()
  let navigate = useNavigate()
  function CheckIdPassword() {
    let MailS = Mail.current.value
    let Passwords = Password.current.value
    // console.log(MailS,Passwords)

    let localData = JSON.parse(localStorage.getItem("AdminDetails"))
    console.log(localData)

    let MyResult = Object.keys(localData).filter(function (values, index) {
      let Obj = localData[values]
      if (Obj.Email == MailS && Obj.Passoword == Passwords) {
        return Obj
      }
    })

    if (MyResult.length > 0) {

      navigate("/Summary/Event")
    }
    else {
      alert("Wrong User login Details")
    }
  }


  return (
    <div> <div id="loginPage" className="container" style={{ width: "40%" }}>
      <div className="header">
        <h1>🎉 Welcome Back</h1>
        <p>Login to explore amazing events</p>
      </div>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" ref={Mail} id='Mail' className="form-input" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input type="password" ref={Password} id='Password' className="form-input" placeholder="Enter your password" />
      </div>
      <button className="btn btn-primary" onClick={CheckIdPassword}> Login to Account</button>
      <div className="link-text"><Link to={"/AdminRegistration"}> Don't have an account? Register here</Link></div>
    </div>
    </div>
  )
}



//useprams()