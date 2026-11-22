import React from "react";
 import { Container, Row, Col } from "reactstrap";
 import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
 import CarItem from "../components/UI/CarItem";
 import carData from "../assets/data/carData";
import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import "../styles/car-item.css";
//import { Link } from "react-router-dom";
//import img01 from "../assets/all-images/cars-img/nissan-offer.png";
// import img02 from "../all-images/cars-img/offer-toyota.png";
import CamryCar from "../pages/CamryCar"
import Hyundai from "../pages/H1Hyundai";
import Gmc from "../pages/Gmc";
import Hiace from "../pages/Hiace";
import Coaster from "../pages/Coaster";
import Bus from "../pages/Bus";

const CarListing = () => {
  
  return (
    <Helmet title="Cars">
      <CommonSection title="Vehicle Package" />

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" className="mb-5">
              <Tab.Container id="left-tabs-example" defaultActiveKey="Sedan">
                <Row>
                  <Col lg="3" md="3" sm="3">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="Sedan">Sedan</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="hyundai">H1 Hyundai</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Gmc">GMC</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Hiace">Hiace</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Coaster">Coaster</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Bus">Bus</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col lg="9" md="9" sm="9">
                    <Tab.Content>
                      <Tab.Pane eventKey="Sedan">
                        <CamryCar />
                      </Tab.Pane>
                      <Tab.Pane eventKey="hyundai">
                        <Hyundai />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Gmc">
                        <Gmc />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Hiace">
                        <Hiace />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Coaster">
                        <Coaster />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Bus">
                        <Bus />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>

          {/* <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row> */}
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
