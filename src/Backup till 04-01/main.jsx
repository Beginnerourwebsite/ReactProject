import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import MultyTag from './MultyTag.jsx'
import Index02Jan2025 from './Index02Jan2025.jsx'
import PropArray from './PropArray.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MultyTag /> */}

    {/* <Index02Jan2025 /> */}
    <PropArray />
  </StrictMode>,
)


