import React from 'react'

export default function Login() {
	return (
		<div> <div id="loginPage" className="container" style={{width:"40%"}}>
  <div className="header">
    <h1>🎉 Welcome Back</h1>
    <p>Login to explore amazing events</p>
  </div>
  <div className="form-group">
    <label className="form-label">Email Address</label>
    <input type="email" className="form-input" placeholder="Enter your email" />
  </div>
  <div className="form-group">
    <label className="form-label">Password</label>
    <input type="password" className="form-input" placeholder="Enter your password" />
  </div>
  <button className="btn btn-primary">Login to Account</button>
  <div className="link-text">Don't have an account? Register here</div>
</div>
</div>
	)
}
