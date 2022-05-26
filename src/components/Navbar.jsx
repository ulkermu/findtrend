import "../styles/navbar.css";
import logo from "../img/findtrendLogo.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#!"><img src={logo} alt="Company Logo" /></a>
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
    )
}

export default Navbar;