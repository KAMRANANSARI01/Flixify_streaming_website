import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import ContentWrapper from "../../components/contenWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
const linkdinUrl = "https://www.linkedin.com/in/kamranansari01/"
const gtihubUrl = "https://github.com/KAMRANANSARI01"
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Say goodbye to buffering and interruptions. Flixify offers
          lightning-fast, high-quality streaming, ensuring you enjoy your
          favorite content in crystal-clear resolution. Our user-friendly
          interface lets you navigate effortlessly, making it a breeze to find
          what you want to watch.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaGithub  onClick={()=>{
              window.open(gtihubUrl,'_blank')
            }} />
          </span>
          <span className="icon">
            <FaLinkedin onClick={()=>{
              window.open(linkdinUrl,'_blank')
            }} />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
