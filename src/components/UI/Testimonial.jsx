import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.png";
import ava02 from "../../assets/all-images/ava-2.png";
import ava03 from "../../assets/all-images/ava-3.png";
import ava04 from "../../assets/all-images/ava-1.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "As a frequent traveler, I've tried numerous transportation companies,
          but Hujjaj Transports stands out from the rest. Their online booking
          system is convenient, their vehicles are always clean and
          well-maintained, and their drivers are professional and courteous. I
          won't hesitate to use Hujjaj Transports for all my future travels in
          Saudi Arabia."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Duraid</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I was in a rush to catch a flight and turned to Hujjaj Transports for
          a last-minute ride to the Jeddah airport, their driver also helped me
          with my luggage and took the quickest route to ensure I made it to the
          airport on time. Thanks to Hujjaj Transports, I caught my flight
          without any hassle. Thanks!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Osama</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I needed a reliable transportation service for my elderly parents,
          and Hujjaj Transports exceeded my expectations. Their drivers were
          incredibly patient and caring, making sure my parents felt safe and
          comfortable throughout the entire journey. I can't thank them enough
          for their exceptional service."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Waleed</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I recently booked a long-distance trip with Hujjaj Transports, and
          I was impressed by their comfortable vehicles and friendly drivers.
          The journey was smooth, and I arrived at my destination feeling
          refreshed. Thanks, Hujjaj Transports.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Arslan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
