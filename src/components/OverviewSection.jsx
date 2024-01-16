import React from "react";
import TotalAssessmentIcon from "./icons/TotalAssessment.svg";
import CandidatesIcon from "./icons/Candidates.svg";
import GlobeIcon from "./icons/Globe.svg";
import ClipIcon from "./icons/Clip.svg";

function OverviewSection({ showOverview }) {
  return (
    <div className="overviewSection card mx-3 my-3" style={{display: showOverview ? "block": "none"}}>
      {showOverview ? (
        <div className="card-body p-0 m-0">
          <div className="d-flex border-bottom">
          <div className="overview-block p-3 border-end flex-grow-1">
            <span>Total Assessment</span>
            <div>
              <img src={TotalAssessmentIcon} alt="" />
              <h4>34</h4>
            </div>
          </div>
          <div className="overview-block p-3 flex-grow-1">
            <span>Total Purpose</span>
            <div>
              <img src={ClipIcon} alt="" />
              <h4>11</h4>
            </div>
          </div>
          </div>
          <div className="overview-block p-3 flex-grow-2 border-bottom">
            <span>Candidates</span>
            <div>
              <img src={CandidatesIcon} alt="" />
              <div className="count-group">
                <div className="countsection">
                  <h4>
                    11,145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Total Candidate</div>
                </div>
                <div className="countsection">
                  <h4>
                    1,145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Who Attempted</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-block p-3 flex-grow-3">
            <span>Candidate Source</span>
            <div>
              <img src={GlobeIcon} alt="" />
              <div className="count-group">
                <div className="countsection">
                  <h4>
                    11,000
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Email</div>
                </div>
                <div className="countsection">
                  <h4>
                    145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Social Share</div>
                </div>
                <div className="countsection">
                  <h4>
                    145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Unique Link</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="card-body d-flex p-0 m-0">
          <div className="overview-block p-3  border-end flex-grow-1">
            <span>Total Assessment</span>
            <div>
              <img src={TotalAssessmentIcon} alt="" />
              <h4>34</h4>
            </div>
          </div>
          <div className="overview-block p-3 border-end flex-grow-2 ">
            <span>Candidates</span>
            <div>
              <img src={CandidatesIcon} alt="" />
              <div className="count-group">
                <div className="countsection">
                  <h4>
                    11,145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Total Candidate</div>
                </div>
                <div className="countsection">
                  <h4>
                    1,145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Who Attempted</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-block border-end p-3 flex-grow-3">
            <span>Candidate Source</span>
            <div>
              <img src={GlobeIcon} alt="" />
              <div className="count-group">
                <div className="countsection">
                  <h4>
                    11,000
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Email</div>
                </div>
                <div className="countsection">
                  <h4>
                    145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Social Share</div>
                </div>
                <div className="countsection">
                  <h4>
                    145
                    <span style={{ fontSize: "12px", color: "#05C165" }}>
                      +89
                    </span>
                  </h4>
                  <div>Unique Link</div>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-block p-3 flex-grow-1">
            <span>Total Purpose</span>
            <div>
              <img src={ClipIcon} alt="" />
              <h4>11</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewSection;
