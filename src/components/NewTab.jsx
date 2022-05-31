import "../styles/newTab.css";
import rightArrow from "../img/newTab/rightArrow.png";
import findtrendLogo from "../img/newTab/findTrendLogo.svg";
import leftArrow from "../img/newTab/leftArrow.png";
import x from "../img/socmed/x.svg";
import rightArrowMobil from "../img/newTab/rightArrowMobil.png";
import leftArrowMobil from "../img/newTab/leftArrowMobil.png";

const NewTab = () => {
  return (
    <div className="newTab">
      <h1>Open new tabs is sh*t</h1>
      <div className="newTab-panel-container">
        <img className="newTab-panel-container-rightArrow" src={rightArrow} alt="Solution Right Arrow" />
        <img className="newTab-panel-container-rightArrowMobil" src={rightArrowMobil} alt="Solution Right Arrow" />
        <div className="newTab-panel">
          <div className="newTab-panel-link">
            <img className="newTab-panel-link-logo" src={findtrendLogo} alt="Company Logo" />
            <h4>Findtrend - Elon Musk</h4>
            <div className="newTab-panel-link-closeBtn-overlay"></div>
            <img className="newTab-panel-link-closeBtn" src={x} alt="Close Button" />
          </div>
        </div>
        <img className="newTab-panel-container-leftArrow" src={leftArrow} alt="Needless One Tab Left Arrow" />
        <img className="newTab-panel-container-leftArrowMobil" src={leftArrowMobil} alt="Needless One Tab Left Arrow" />
      </div>
      <p className="newTab-text">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  );
};

export default NewTab;
