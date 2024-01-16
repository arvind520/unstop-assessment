import React from "react";
import CrossIcon from "./icons/Cross.svg"

function MultiSelcted({selectedItems}) {
  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item selectedItems">
           {selectedItems.map((ele,idx) => (
            <span key={idx} className="selectedItem d-inline-flex">
            <span className="pe-2">
                {ele}
            </span>
            <span><img src={CrossIcon} alt="" height={18}/></span>
          </span>
           ))}
          </li>
          <li className="list-group-item"><input
          type="email"
          className="form-control"
          id="assessmentName"
          aria-describedby="emailHelp"
          placeholder="Type Here"
          style={{outline:"none", border:"none", width:"100%", padding:"0"}}

        /></li>
        </ul>
        
      </div>
    </div>
  );
}

export default MultiSelcted;
