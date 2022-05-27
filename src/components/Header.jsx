import "../styles/header.css";
import imgHero from "../img/imgHero.svg";
import twitterLogo from "../img/socmed/twitter.svg"
import pinterestLogo from "../img/socmed/pinterest.svg"
import facebookLogo from "../img/socmed/facebook.svg"
import elonballLogo from "../img/socmed/elonball.svg"

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
          <div>
            <a href="#!">Get Started 🔥</a>
            <img src={imgHero} alt="Start Here" />
          </div>
        </div>
      </div>
      <div className="header-socmed">
        <div id="header-socmed-link-1" className="header-socmed-link">
          <img src={twitterLogo} alt="Twitter Logo" />
          <div>Cryptopunk - Search</div>
        </div>
        <div id="header-socmed-link-2" className="header-socmed-link">
          <img src={pinterestLogo} alt="Pinterest Logo" />
          <div>Popular Design - Search</div>
        </div>
        <div id="header-socmed-link-3" className="header-socmed-link">
          <img src={facebookLogo} alt="Facebook Logo" />
          <div>Product Design - Search</div>
        </div>
        <div id="header-socmed-link-4" className="header-socmed-link">
          <img src={elonballLogo} alt="Elon Musk Logo" />
          <div>Elon Musk - Search</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
