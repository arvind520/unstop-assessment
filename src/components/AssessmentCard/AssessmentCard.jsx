import React from "react";
import BusinessIcon from "../icons/Business.svg";
import CalendarIcon from "../icons/Calendar.svg";
import VerticalDotsIcon from "../icons/VerticalDots.svg";
import ShareIcon from "../icons/Share.svg";
import OneUserIcon from "../icons/OneUser.svg";
import MultipleUserIcon from "../icons/MultipleUser.svg";
import "./styles.css";

const AssessmentCard = ({noOfUsers}) => {
  return (
    <div className="myassessment">
      <div className="assessment-head">
        <div>
          <img src={BusinessIcon} alt="" />
          <div className="mt-2">Math Assessment</div>
          <div className="d-flex align-items-center gap-2 mt-1">
            <span className="border-end" style={{ paddingRight: "10px" }}>
              Job
            </span>
            <span
              className="text-secondary fw-normal d-flex align-items-center gap-1"
              style={{ fontSize: "14px" }}
            >
              <img src={CalendarIcon} height={14} width={14} alt="" />
              20 Apr 2023
            </span>
          </div>
        </div>
        <div>
          <img src={VerticalDotsIcon} alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2 py-2" style={{fontSize: "14px"}}>
          <span>
            <div>00</div>
            <div>Duration</div>
          </span>
          <span>
            <div>00</div>
            <div>Questions</div>
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={ShareIcon} alt="" style={{cursor:"pointer"}}/>
          {!noOfUsers ? <img src={OneUserIcon} alt="" /> : <><img src={MultipleUserIcon} alt="" /> <span style={{fontSize:"small"}}>+{noOfUsers}</span></>}
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
