import "../styles/navbar.css";
import logo from "../img/findtrendLogo.svg";
import logoSmall from "../img/findtrendLogoSmall.svg";

const Navbar = () => {
  const burgerHandler = () => {
    const line1 = document.getElementById("line-1");
    const line2 = document.getElementById("line-2");
    const line3 = document.getElementById("line-3");
    line1.classList.toggle("line-top");
    line2.classList.toggle("line-middle");
    line3.classList.toggle("line-bottom");
    const navbarMobil = document.querySelector(".navbar-mobil");
    const navbarMobilPages = document.querySelector(".navbar-mobil-pages");
    navbarMobil.classList.toggle("navbar-mobil-active");
    navbarMobilPages.classList.toggle("passive");
  };

  return (
    <>
      <div className="navbar">
        <a href="#!">
          <img src={logo} alt="Company Logo" />
        </a>
        <ul className="navbar-pages">
          <li>About</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>Solution</li>
          <li>Features</li>
        </ul>
        <ul className="navbar-sign">
          <li>Login</li>
          <li className="navbar-sign-register">Register</li>
        </ul>
      </div>
      <div className="navbar-mobil">
        <a href="#!">
          <img className="navbar-mobil-logo"src={logo} alt="Company Logo" />
          <img className="navbar-mobil-logoSmall" src={logoSmall} alt="Company Logo" />
        </a>
        <ul className="navbar-mobil-pages passive">
          <li>About</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>Solution</li>
          <li>Features</li>
          <li>Login</li>
          <li className="navbar-mobil-sign-register">Register</li>
        </ul>
        <div className="navbar-mobil-burger" onClick={burgerHandler}>
          <div id="line-1" className="navbar-mobil-burger-lines"></div>
          <div id="line-2" className="navbar-mobil-burger-lines"></div>
          <div id="line-3" className="navbar-mobil-burger-lines"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
