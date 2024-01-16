import React from 'react'

const MobileLayout = ({children}) => {
  return (
    <div style={{width: "375px", height: "100%", color:"#1C4980", backgroundColor:"white"}}>
    {children}
    </div>
  )
}

export default MobileLayout