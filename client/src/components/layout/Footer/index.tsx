import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  const infoLink = [
    { id: 0, name: "Contact Us", to: "/contact" },
    { id: 1, name: "Sell with Us", to: "/sell" },
    { id: 2, name: "Shipping", to: "/shipping" }
  ];

  const bussinessLink = (
    <ul className="support-link">
      <li className="footer-link">
        <Link to="/dashboard"> Account Detail </Link>
      </li>
      <li className="footer-link">
        <Link to="/dashboard/orders">Orders </Link>
      </li>
    </ul>
  );

  const footerLink = infoLink.map(item => (
    <li key={item.id} className="footer-link">
      <Link to={item.to} key={item.id}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Customer Service</h3>
            </div>
            <div className="block-content">
              <ul>{footerLink}</ul>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Links</h3>
            </div>
            <div className="block-content">
              <ul>{footerLink}</ul>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Newsletter</h3>
              {/* New letter component */}
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span> {new Date().getFullYear()} Vent Store</span>
        </div>
        <ul className="footer-social-item">
          <li>
            <a href="/#facebook" rel="noreferrer noopener" target="_blank">
              <span className="facebook-icon"></span>
            </a>
          </li>
          <li>
            <a href="/#instagram" rel="noreferrer noopener" target="_blank">
              <span className="instagram-icon"></span>
            </a>
          </li>
          <li>
            <a href="/#pinterest" rel="noreferrer noopener" target="_blank">
              <span className="pinterest-icon"></span>
            </a>
          </li>
          <li>
            <a href="/#youtube" rel="noreferrer noopener" target="_blank">
              <span className="youtube-icon"></span>
            </a>
          </li>
          <li>
            <a href="/#twitter" rel="noreferrer noopener" target="_blank">
              <span className="twitter-icon"></span>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
