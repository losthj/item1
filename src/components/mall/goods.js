import React, { PureComponent } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SwipeCon = styled.div`
  .slick-slide img {
    border: 5px solid #fff;
    display: block;
    margin: auto;
}
.slick-prev{
  background: url(https://img.jylc168.com/Pc/mall/index/icon-slides.png) no-repeat -84px 50%;
  width: 41px;
  height: 69px;
  left: 0;
  z-index:2
}  
.slick-prev::before,.slick-next::before{
    content:""
}
.slick-prev:hover,.slick-prev:focus{
    background: url(https://img.jylc168.com/Pc/mall/index/icon-slides.png) no-repeat 0 50%;
} 
.slick-next{
  background: url(https://img.jylc168.com/Pc/mall/index/icon-slides.png) no-repeat -125px  50%;
  width: 41px;
  height: 69px;
  right: 0;
  z-index:12
}
.slick-next:hover, .slick-next:focus{
    background: url(https://img.jylc168.com/Pc/mall/index/icon-slides.png) no-repeat -42px 50%;
}
.slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
.slick-thumb {
    bottom: -88px;
    height: 70px;
}
.slick-thumb li {
    width: 60px;
    height: 60px;
    border:1px solid #dbdbdb;
    img {
        max-width: 100%;
        padding: 0;
    }
}
.slick-thumb li.slick-active{
    border-color: #e71713;
}
`

class Goods extends PureComponent {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a href="###">
            <img alt="" src="http://img.jylc168.com/Upload/Mall/2018-08-17/8ee15b762e6d3fb48.jpg"/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SwipeCon>
        <Slider {...settings}>
          <div>
            <img alt="" src="http://img.jylc168.com/Upload/Mall/2018-08-17/8ee15b762e6d3fb48.jpg" />
          </div>
          <div>
            <img alt="" src="http://img.jylc168.com/Upload/Mall/2018-08-17/8ee15b762e6d3fb48.jpg" />
          </div>
          <div>
            <img alt="" src="http://img.jylc168.com/Upload/Mall/2018-08-17/8ee15b762e6d3fb48.jpg" />
          </div>
          <div>
            <img alt="" src="http://img.jylc168.com/Upload/Mall/2018-08-17/8ee15b762e6d3fb48.jpg" />
          </div>
        </Slider>
      </SwipeCon>
    );
  }
}
export default Goods;  