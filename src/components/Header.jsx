import "../styles/header.css";
import imgHero from "../img/imgHero.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <h1>Minimize your tabs.</h1>
        <h1>Find the trends!</h1>
        <p>
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <div className="header-wrapper-getStarted">
          <a href="#!">
            <div>Get Started 🔥</div>
            <img src={imgHero} alt="Start Here" />
          </a>
        </div>
      </div>
      <div className="header-socmed">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
