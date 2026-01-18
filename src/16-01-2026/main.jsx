import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
createRoot(document.getElementById('root')).render(

	<StrictMode>
		<App />
	</StrictMode>,
)


//how to stop page reload on clicking link in react js
//full project load (time consum,slow,its beahaver like normal html page)