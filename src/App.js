import "./App.css";
import Layout from "./components/Layout";
import OverviewSection from "./components/OverviewSection";
import Header from "./components/Header";
import MyAssessment from "./components/MyAssessment";
import { useEffect, useRef, useState } from "react";
import MobileLayout from "./components/MobileLayout";
import MobileHeader from "./components/MobileHeader";
import SearchIcon from "./components/icons/Search.svg";
import FilterIcon from "./components/icons/Filter.svg";
import BarChartIcon from "./components/icons/BarChart.svg";
import SideNav from "./components/SideNav";

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const outerWidthRef = useRef(window.outerWidth);
  function toggleView() {
    setMobileView(!mobileView);
  }
  function toggleOverview() {
    setShowOverview(!showOverview);
  }
  function toggleSideNav() {
    setSideNav(!sideNav);
  }

  const handleResize = () => {
    const newOuterWidth = window.outerWidth;
    if (newOuterWidth <= 600 && outerWidthRef.current > 600) {
      setMobileView(true);
    } else if (newOuterWidth > 600 && outerWidthRef.current <= 600) {
      setMobileView(false);
    }
    outerWidthRef.current = newOuterWidth;
  };
  
  useEffect(() => {
    if(window.outerWidth < 600){
      setMobileView(true);
    }else{
      setMobileView(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {mobileView ? (
        <MobileLayout>
          <MobileHeader
            mobileView={mobileView}
            toggleView={toggleView}
            toggleSideNav={toggleSideNav}
          />
          <div className="d-flex fw-bold justify-content-between align-items-center px-2 pt-3">
            My Assessment
            <div className="d-flex justify-content-between align-items-center gap-3">
              <img src={SearchIcon} alt="" />
              <img src={FilterIcon} alt="" />
              <img
                src={BarChartIcon}
                alt=""
                onClick={() => toggleOverview()}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <OverviewSection showOverview={showOverview}/>
          <MyAssessment mobileView={mobileView} />
          {sideNav && (
            <SideNav
              modal={sideNav}
              toggle={toggleSideNav}
              mobileView={mobileView}
            />
          )}
        </MobileLayout>
      ) : (
        <Layout>
          <Header mobileView={mobileView} toggleView={toggleView} />
          <div className="main-section">
            <div className="rowHeading px-3 mt-4">Assessments Overview</div>
            <OverviewSection />
            <div className="rowHeading px-3 mt-4">My Assessment</div>
            <MyAssessment />
          </div>
        </Layout>
      )}
    </>
  );
}

export default App;
