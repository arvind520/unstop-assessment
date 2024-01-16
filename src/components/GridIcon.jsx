import React from 'react'

function GridIcon({children, text, active,mobileView}) {
  return (
    <div className={`grid-icon__container ${active ? "activeGrid":""} ${mobileView ?"flex-row":"flex-column"}`}>
    {children}
    <span className="grid-icon__text">{text}</span>
    </div>
  )
}

export default GridIcon