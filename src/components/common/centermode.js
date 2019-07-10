import React, { Component  } from 'react';
import '@assets/home/about.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class CentermodeS extends Component  {
    render() {
      
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
      
        <Slider {...settings}>
        <div>
          <h3>
          <img src="https://img.jylc168.com/Pc/home/about/about-img1.png" alt="" />
          </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      
      );
    }
  }

  export default CentermodeS;
  