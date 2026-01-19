import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Items from './Pages/Items'
import Contact from './Pages/Contact'
import Nav from './helper/Nav'

export default function App() {
	return (
		<div>
			
			<BrowserRouter>
					<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Items" element={<Items />} />
					<Route path="/Contact" element={<Contact />} />

				</Routes>
			</BrowserRouter>

		</div>
	)
}
