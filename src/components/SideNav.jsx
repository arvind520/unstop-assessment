import React from "react";
import CrossIcon from "./icons/Cross.svg";
import DashboardIcon from "./icons/Dashboard.svg";
import NoteIcon from "./icons/Note.svg";
import QuizIcon from "./icons/Quiz.svg";
import AdminIcon from "./icons/Admin.svg";
import AdminBadgeIcon from "./icons/AdminBadge.svg";

const SideNav = ({ modal, toggle, mobileView }) => {
  return (
    <div className="sidenav">
      <div style={{ width: "80%", backgroundColor: "#E5F1FC", minWidth:"300px" }}>
        <div className="heading d-flex py-4 px-3 justify-content-between">
          <h6>Menu</h6>
          <img src={CrossIcon} alt="" onClick={() => toggle()} style={{cursor:"pointer"}}/>
        </div>
        <div className="grid-icon__text p-3 d-flex gap-2 dashboard">
          <img src={DashboardIcon} width={20} alt="" />
          Dashboard
        </div>
        <div className="grid-icon__text p-3 d-flex gap-2 assessment activeGrid">
          <img src={NoteIcon} width={20} alt="" />
          Assessment
        </div>
        <div className="grid-icon__text p-3 d-flex gap-2 library">
          <img src={QuizIcon} width={20} alt="" />
          My Library
        </div>
        <div className="grid-icon__text p-3 d-flex roundStatus justify-content-between">
          <div className="d-flex gap-2">
            <img src={AdminIcon} width={20} alt="" />
            Round Status
          </div>
          <img src={AdminBadgeIcon} width={50} alt="" />
        </div>
      </div>
      <div style={{ width: "100%", backdropFilter: "brightness(0.5)" }}>
        <span>&nbsp;</span>
      </div>
    </div>
  );
};

export default SideNav;
