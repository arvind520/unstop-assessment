import React from "react";
import MobileIcon from "./icons/Mobile.svg";

const Header = ({mobileView, toggleView}) => {
  return (
    <div className="header">
      <div className="tabs py-3 px-3">
        <div className="tab-heading ">Assessment</div>
        <div className="tab">My Assessment</div>
      </div>
      <div className="switch-view">
        <img
          src={MobileIcon}
          alt=""
          className="p-2"
          style={{ cursor: "pointer" }}
          onClick={() => toggleView(!mobileView)}
        />
      </div>
    </div>
  );
};

export default Header;
