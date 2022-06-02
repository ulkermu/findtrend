import "../styles/footer.css";
import footerLogo from "../img/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={footerLogo} alt="Company Logo" />
      <div className="footer-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms and Conditions</a>
          <a href="#!">Contact Us</a>
          <a href="#!">Careers</a>
      </div>
    </div>
  );
};

export default Footer;
