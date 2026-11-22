import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/all-images/Final-logo/final-logo-visual.png";
import qrcode from "../../assets/all-images/qrcode.png";
import whatapp from "../../assets/all-images/whatsapp.png";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Vehicle Package",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer px-4 mt-5">
      <Container fluid>
        <Row>
          <Col lg="3" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  {/* <i class="ri-car-line"></i>
                  <span>Hujjaj Transport</span> */}
                  <img src={logo} alt="logo-image" width="50%" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Absolutely, Hujjaj Transport Service appears to prioritize
              convenience and reliability for travelers embarking on Umrah and
              Hajj journeys in Saudi Arabia.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">
                Az Zahir / Nuzha - 21936 - Makkah, Saudi Arabia
              </p>

              <p className="office__info">
                <a href="https://wa.me/+966578189937?text=Hello I want transport services">
                  Phone: +966 57 740 5768 &nbsp; &nbsp; &nbsp;
                  <img src={whatapp} alt="whatapp" width="15%" mt-5 />
                </a>
              </p>

              <p className="office__info">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJGBZdZHbwWkwvWLRckqmTpCHxHWxfrgTnzNmNGfHqNbshJCpcWRBCVSkVGvmrbGLWVtL"></a>
                Email: info@hujjajtransport.com
              </p>

              <p className="office__info">Office Time: 24/7</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Branch Office</h5>
              <p className="section__description">
                Aziziyah - 17639 - Madinah, Saudi Arabia
              </p>
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="2" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  {/* <i class="ri-car-line"></i>
                  <span>Hujjaj Transport</span> */}
                  <img src={qrcode} alt="logo-image" width="100%" />
                </Link>
              </h1>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                sjgroup All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
