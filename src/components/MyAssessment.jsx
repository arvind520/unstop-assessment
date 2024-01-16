import React, { useState } from "react";
import AddIcon from "./icons/Add.svg";
import AssessmentCard from "./AssessmentCard/AssessmentCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import MultiSelcted from "./MultiSelcted";

function MyAssessment({mobileView}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className={`myassessment-section d-flex gap-3 p-4 ${mobileView ? "flex-column":"flex-row"}`}>
      <div className="myassessment-card new rounded">
        <div className="new-assessment">
          <img
            src={AddIcon}
            alt=""
            height={70}
            width={70}
            style={{ cursor: "pointer" }}
            onClick={toggle}
          />
          <span style={{ fontWeight: "500", marginTop: "5px" }}>
            New Assessment
          </span>
          <span className="text-center" style={{ fontSize: "small" }}>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </span>
        </div>
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard />
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={324} />
      </div>
      {mobileView && <>

      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={324} />
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={324} />
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={324} />
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={324} />
      </div>
      <div className="myassessment-card rounded">
        <AssessmentCard noOfUsers={"32,4090"} />
      </div>

      </>}

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="modal-header" toggle={toggle}>
          Create a new Assessment
        </ModalHeader>
        <ModalBody>
          <form className="newForm">
            <div className="mb-3">
              <label for="assessmentName" className="form-label">
                Name of assessment
              </label>
              <input
                type="email"
                className="form-control"
                id="assessmentName"
                aria-describedby="emailHelp"
                placeholder="Type Here"
              />
            </div>
            <div className="mb-3">
              <label for="assessmentName" className="form-label">
                Purpose of the test is
              </label>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: "100%", textAlign: "left", color: "#1C4980" }}
                >
                  Select
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-3">
              <label for="assessmentName" className="form-label">
                Description
              </label>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: "100%", textAlign: "left", color: "#1C4980" }}
                >
                  Select
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-3">
              <label for="assessmentName" className="form-label">
                Skills
              </label>
              {/*------------ MUltiselect -----------*/}
              <MultiSelcted selectedItems={["UI/UX and Design", "No of Question", "Web Development", "UI/UX and Design", "Web Development"]}/>
            </div>
            <div className="mb-3">
              <label for="assessmentName" className="form-label">
                Duration of assessment
              </label>
              <input
                type="email"
                className="form-control"
                id="assessmentName"
                aria-describedby="emailHelp"
                placeholder="HH:MM:SS"
              />
            </div>
            <Button color="primary" onClick={toggle} style={{ width: "100%" }}>
              Save
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default MyAssessment;
