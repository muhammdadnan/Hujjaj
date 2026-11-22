import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/Final-logo/final-logo-visual.png";
import whatapp from "../../assets/all-images/whatsapp.png";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  Need Help?
                </span>
                <span className="header__top__help">
                  <a
                    href="https://wa.me/+966578189937?text=Hello I want transport services"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.5rem",
                    }}
                  >
                    <img src={whatapp} alt="whatapp" width="10%" mt-5 /> +966 57 740 5768
                  </a>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3 mt-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center gap-1"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link
                  to="#"
                  className=" d-flex align-items-center gap-1"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i class="ri-car-line"></i>
                    <span>Hujjaj Transport</span> */}
                    <img src={logo} alt="logo-image" width="42%" />
                    {/*<span>
                      hujjajtransport <br /> Service
                    </span> */}
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Saudi Arabia</h4>
                  <h6>Makkah, Saudi Arabia</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h2>
                    <b>24/7</b>
                  </h2>
                </div>
              </div>
            </Col>

            <Col
              lg="3"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-start  gap-3"
            >
              <button className="header__btn btn">
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <img
                    src={whatapp}
                    alt="WhatsApp"
                    width="50"
                    className="me-2"
                  />
                  Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
              <span className="mobile__menu" px-2>
                <img src={logo} alt="logo-image" width="15%" mt-5 />
                Hujjaj Transport
              </span>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {/* <div className="nav__logo">*/}
                <div className="logo1">
                  <h1>
                    <Link
                      to="/home"
                      className="logo2 d-flex align-items-center gap-2"
                    >
                      {/* <i class="ri-car-line"></i>
                      <span className="sapn1">
                        Hujjaj Transport
                      </span> */}
                      <img src={logo} alt="logo-image" width="100%" mt-5 />
                      <span>
                        hujjajtransport <br /> Service{" "}
                      </span>
                    </Link>
                  </h1>
                </div>
                {/*  </div> */}
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
