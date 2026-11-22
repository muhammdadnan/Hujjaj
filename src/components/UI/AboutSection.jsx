import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "70px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h1 className="section__subtitle">About Us</h1>
              <h2 className="section__title">Welcome to Hujjaj Transport</h2>
              <p className="section__description">
                Absolutely, Hujjaj Transport Service appears to prioritize
                convenience and reliability for travelers embarking on Umrah and
                Hajj journeys in Saudi Arabia. By offering a range of vehicle
                options suitable for different group sizes, which cater to the
                diverse needs of travelers, ensuring comfort and flexibility
                during their travels. The online booking feature streamlines the
                process, allowing travelers to easily arrange transportation
                without hassle. Moreover, we are committed to serve various
                travel purposes such as airport transfers, family or business
                trips, Ziyaraat, and corporate travel showcases our dedication
                to meet the diverse need of our clientele. Overall, Hujjaj
                Transport Service seems to be focused on providing a seamless
                and comfortable transportation experience for travelers across
                Saudi Arabia especially in Jeddah, Makkah, madina, taif.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Makkah
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Madina
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Ziyarat
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Intercity
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
