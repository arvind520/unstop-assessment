import React from "react";
import DashboardIcon from "./icons/Dashboard.svg";
import NoteIcon from "./icons/Note.svg";
import QuizIcon from "./icons/Quiz.svg";
import AdminIcon from "./icons/Admin.svg";
import AdminBadgeIcon from "./icons/AdminBadge.svg";
import GridIcon from "./GridIcon";

const LeftContainer = () => {
  return (
    <div className="left-layout">
      <GridIcon text="Dashboard">
        <img src={DashboardIcon} width={20} alt="" />
      </GridIcon>
      <GridIcon text="Assessment" active>
        <img src={NoteIcon} width={20} alt="" />
      </GridIcon>
      <GridIcon text="My Library">
        <img src={QuizIcon} width={20} alt="" />
      </GridIcon>
      <div className="dashLine"></div>
      <GridIcon text="Round Status">
        <img src={AdminBadgeIcon} alt="" />
        <img className="mt-3" src={AdminIcon} width={20} alt="" />
      </GridIcon>
    </div>
  );
};

export default LeftContainer;
