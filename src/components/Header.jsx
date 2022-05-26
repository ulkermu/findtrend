import Navbar from "./Navbar";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div>
        <h2>Minimize your tabs.</h2>
        <h2>Find the trends.</h2>
        <p>
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <a href="#!">Get Started 🔥</a>
      </div>
    </div>
  );
};

export default Header;
