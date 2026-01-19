import React from 'react'
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './Aboutus'
import Nav from './Nav'

export default function App() {
	return (
		<div>

			{/* <Home/>
			<Contact/> */}
			<Nav />
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/ContactUs' element={<Contact />} />
					<Route path='/aboutus' element={<Aboutus />} />

					{/* path like Page*/}

				</Routes>
			</BrowserRouter>
		</div>
	)
}

// package install React-roter-dom
