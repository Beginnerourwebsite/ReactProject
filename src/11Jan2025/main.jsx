import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form'
import GetApi from './GetApi'



createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <Form/>

    {/* <GetApi/> */}
  </StrictMode>,
)


