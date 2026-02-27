import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
export default function Login() {
  let Mail = useRef()
  let Password = useRef()
  let navigate = useNavigate()
  function CheckIdPassword() {
    let MailValues = Mail.current.value
    let PasswordValues = Password.current.value
    if (MailValues == '' || PasswordValues == '') {
      alert("Kindly Fill All Details")
      return
      //console.log("ram")//nerve ever reached here because of return statement
    }


    let AdminData = JSON.parse(localStorage.getItem("AdminData"))
    // console.log(AdminData)
    let IndexNo = -1
    let MatchOrnot = AdminData.filter(function (a, index) {//0
      if (a.AdminEmailValues == MailValues && a.AdminPasswordValues == PasswordValues) {
        IndexNo = index
        debugger
        return a
      }
    })

    //findindex()
    console.log(MatchOrnot)
    if (MatchOrnot.length == 0) {
      alert("invalid id or password")
    }
    else {
      Cookies.set("AdminId", IndexNo)
      navigate("/Summary/Event/" + IndexNo)
    }

    // console.log(MatchOrnot)

    //unique id//storage//1 kb 2 kb 3 kb 4 kb 5 kb 6 kb 7 kb 8 kb 9 kb 10 kb (Fast Code)
    // all data save krwadu (Mostly use) but its take much Storage//1mb 200mb 300mb 400mb 500mb 600mb 700mb 800mb 900mb 1gb
    //map/forEach
    // foreach =return undefined
    //map =[1,2,3,4,64,8,48,8,18,2] return new array [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
    // filter =[1,2,3,4,64,8,48,8,18,2] return new array [64,8,48,8,18] (condition true)

  }
  return (
    <div> <div id="loginPage" className="container" style={{ width: "40%" }}>
      <div className="header">
        <h1>🎉 Welcome Back</h1>
        <p>Login to explore amazing events</p>
      </div>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" id='Mail' ref={Mail} className="form-input" placeholder="Enter your email" />
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


//static
//id=? Password=?=>superadmin

//Database (localstorage/sessionstorage/indexedDB/Server)

//qr code generator (Api Unlimited))
//Todo list