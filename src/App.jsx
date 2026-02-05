import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './Pages/Event'
import EventFullDetails from './Pages/EventFullDetails'
import Login from './Pages/Login'
import Reg from './Pages/Reg'
import EventUpload from './Pages/EventUpload'
import EventViewList from './Pages/EventViewList'

export default function App() {
  return (
	<div>
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Event/>}/>
			<Route path='/EventDetails' element={<EventFullDetails/>}/>
			<Route path='/AdminLogin' element={<Login/>}/>
			<Route path='/AdminRegistration' element={<Reg/>}/>
			<Route path='/Upload/Event' element={<EventUpload/>}/>
			<Route path='/Summary/Event' element={<EventViewList/>}/>
		</Routes>
		</BrowserRouter>
	</div>
  )
}
