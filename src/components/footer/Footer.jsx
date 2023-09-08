import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/popflix.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">Socials</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <p>
              <a href="https://dericknguyen.netlify.app/">Website</a>
            </p>
          </div>
          <div className="footer__content__menu">
            <p>
              <a href="https://github.com/noxlumomagna">Github</a>
            </p>
          </div>
          <div className="footer__content__menu">
            <p>
              <a href="https://www.linkedin.com/in/1derick-nguyen">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
