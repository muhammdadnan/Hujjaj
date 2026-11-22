import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import whatapp from "../assets/all-images/whatsapp.png";


import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=61555872707730&mibextid=ZbWKwL",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/hujjajtransport1988/",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "https://twitter.com/i/flow/login?redirect_after_login=%2FhujjajNaqaliat",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {

   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm("service_2ly2ej9", "template_9nk25ld", form.current, {
         publicKey: "VR-2E_kv_xGw_ILJj",
       })
       .then(
         () => {
           console.log("SUCCESS!");
         },
         (error) => {
           console.log("FAILED...", error.text);
         }
         
       );
        console.log(form.current);
   };


  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form action="https://formspree.io/f/xvoeqwyd" method="POST">
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name="user_name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="user_email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                  ></textarea>
                </FormGroup>
                {/* <input type="submit" value="Send" /> */}

                <button className=" contact__btn" type="send">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Az Zahir / Nuzha - 21936 - Makkah, Saudi Arabia
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <a href="https://wa.me/+966578189937?text=Hello I want transport services">
                    <p className="section__description mb-0">
                      +966 57 740 5768
                      <img src={whatapp} alt="whatapp" width="15%" mt-5 />
                    </p>
                  </a>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    info@hujjajtransport.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
