import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ref from './12Jan2026/Ref'
import ApiDatas from './14Jan2026/ApiDatas'
import Form from './11Jan2026/Form'
import DataUseEffect from './DataUseEffect'
import Default from './default'
// import Form from './Form'
// import GetApi from './GetApi'



createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <Form/> */}
    {/* <DataUseEffect/> */}
    <Default/>
    {/* <ApiDatas /> */}
    {/* <GetApi/> */}
  </StrictMode>,
)


