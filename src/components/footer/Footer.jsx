import React from "react";
import Reaveal from "../utils/Reaveal";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Reaveal axis="y" axisValue="75" AnimDelay="0.15">
        <h1 className="footer__title">

        <a href="#" className="nav__logo">
          Shahid<span className="logo_dot">.</span>
        </a>
        </h1>
        </Reaveal>
        <Reaveal axis="y" axisValue="75" AnimDelay="0.20">

        <ul className="footer__list">
          <li>

            <a href="#about" className="footer__link">
              About
            </a>

          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>


          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>
        </Reaveal>
        <Reaveal axis="y" axisValue="75" AnimDelay="0.25">

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sayed-shahid-5819632b4" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Shahidclt93" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        </Reaveal>
        <Reaveal axis="y" axisValue="75" AnimDelay="0.30">

        <span className="footer__copy">&#169; Sayed Shahid  . All rights reserved</span>
        </Reaveal>
      </div>
    </footer>
  );
};

export default Footer;
