import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './Pages/Event'
import EventFullDetails from './Pages/EventFullDetails'
import Login from './Pages/Login'
import Reg from './Pages/Reg'
import EventUpload from './Pages/EventUpload'
import EventViewList from './Pages/EventViewList'
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
				</Routes>
			</BrowserRouter>
		</div>
	)
}
//varable

//prams hook its depend on Url/Link/Routers