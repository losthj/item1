import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SwiperCon = styled.div`
  height:${props => props.carouselHeight || ''};
  width:100%;
  overflow:hidden;
  .slick-dots {
    bottom: 25px;
    li button:before {
      color: #fff;
    }
    li.slick-active button:before{
      color: #fff;
    }
  }
`
const Img = styled.img`
  height:${props => props.carouselHeight || ''};
  width:100%;
`

class Carousel extends PureComponent {
  render() {
    const { data, height} = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SwiperCon>
        <Slider {...settings}  carouselHeight={height}>
          {
            data.map((item, index) => {
              return (
                <div className="swiper-demo-simple-h" key={index}>
                  <Link to=""><Img carouselHeight={height} src={item.img} /></Link>
                </div>
              )
            })
          }
        </Slider>
      </SwiperCon>
    );
  }
}
Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired
}
export default Carousel;
