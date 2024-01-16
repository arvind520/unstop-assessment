import React from "react";
import "./mainstyles.css";
import LeftContainer from "./LeftContainer";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <LeftContainer />
      <div className="right-layout">{children}</div>
    </div>
  );
}

export default Layout;
