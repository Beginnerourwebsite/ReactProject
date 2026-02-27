import React from 'react'
import SideNavbar from './SubCom/SideNavbar'
import Content from './SubCom/Content'
export default function MainContent(props) {
  // console.log(props.NavbarManusName)

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <SideNavbar NavbarManusName={props.NavbarManusName} />
      <Content />
      {/* //child component nhi ha ye sibling component ha SideNavbar ka */}
    </div>
  )
}

//storage
//usecontext hook se hum is problem ko solve kr skte ha
//context api
//es problem ko hum khe te ha "prop drilling" yani props ko bar bar child component me pass krna padta ha