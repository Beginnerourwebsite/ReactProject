import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './Project/Pages/Event'
import EventFullDetails from './Project/Pages/EventFullDetails'
import Login from './Project/Pages/Login'
import Reg from './Project/Pages/Reg'
import EventUpload from './Project/Pages/EventUpload'
import EventViewList from './Project/Pages/EventViewList'
import './Assests/Common.css'
import Cookies from 'js-cookie'
export default function App() {
	// Cookies.set("Abc", "this is cookie",{ expires: 7 })
	// console.log(Cookies.get("Abc"))
	// Cookies.remove("Abc")
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Event />} />
					<Route path='/EventDetails' element={<EventFullDetails />} />
					<Route path='/AdminLogin' element={<Login />} />
					<Route path='/AdminRegistration' element={<Reg />} />
					<Route path='/Upload/Event/:id' element={<EventUpload />} />
					<Route path='/Summary/Event/:id' element={<EventViewList />} />
					<Route path='*' element={<div>this page is underworking</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
//varable

//prams hook its depend on Url/Link/Routers