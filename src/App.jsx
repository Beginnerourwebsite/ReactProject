import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Comp1 from './Comp1'

export default function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* <Route path='/' element={<Event />} /> */}
					<Route path='/' element={<Comp1 />} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}
//varable

//prams hook its depend on Url/Link/Routers