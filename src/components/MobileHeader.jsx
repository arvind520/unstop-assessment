import React from 'react'
import ComputerIcon from "./icons/Computer.svg"
import BarIcon from "./icons/Bar.svg"

const MobileHeader = ({toggleView, toggleSideNav}) => {
  return (<div className='sticky-top bg-white'>
    <div className='d-flex justify-content-between align-items-center px-2'>
        <div className='d-flex align-items-center gap-2'>
            <img src={BarIcon} alt="" style={{cursor:"pointer"}} onClick={()=>toggleSideNav()}/>
            <h5 className='pt-2'>Assessment</h5>
        </div>
        <img src={ComputerIcon} alt="" 
            style={{cursor:"pointer"}}
            onClick={()=>toggleView()}
        />
    </div>
    <div className="mTabs">
        <h6 className="tabActive">My Assessments</h6>
        <h6>Unstop Assessments</h6>
      </div>
  </div>
  )
}

export default MobileHeader