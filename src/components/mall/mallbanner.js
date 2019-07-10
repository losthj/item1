/*
* @Author: zk
* @Date:   2019-03-28 09:54:58
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-03 16:23:05
*/
import React, { PureComponent } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Layout,Button  } from 'zent';
const { Row, Col } = Layout


const SwiperCon = styled.div`
  padding:30px;
  h2{
    color:#ad956a;
    font-size:26px;
    line-height:26px;
  }
  h3{
    height:350px;
    text-align:center;
    margin-bottom:15px;
  }
  .slick-slider{
    margin: 30px auto 0;
  }
  .slick-slide img{
    height:350px;
    display:inline;
  }
.slick-prev{
  background: url(https://img.jylc168.com/Pc/mall/index/arrow1.png) no-repeat 0 0;
  width: 38px;
  height: 38px;
  left: 0;
  top: 179px;
  z-index:2
}
 .slick-prev:hover, .slick-prev:focus {
   background-image: url(https://img.jylc168.com/Pc/mall/index/arrow2.png);
   top:159px;
   transform:rotate(180deg);
  }
.slick-next{
  background: url(https://img.jylc168.com/Pc/mall/index/arrow1.png) no-repeat 0 0;
  width: 38px;
  height: 38px;
  transform:rotate(180deg);
  right: 0;
  top:159px}
.slick-next:hover,.slick-next:focus{
  background-image: url(https://img.jylc168.com/Pc/mall/index/arrow2.png);
  transform:rotate(360deg);    
  background-position: 0px 1px;
}
.slick-prev::before, .slick-next::before{
  content:'';
  background: url(https://img.jylc168.com/Pc/mall/index/arrow1.png) no-repeat 0 0;
  width: 38px;
  height: 38px;
}

.zent-row{
  height:32px;
  line-height:32px;
}
.zent-col:first-child{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:18px;
}
.zent-col b{
  font-size:20px;
  color:#ac956a;
}
.zent-btn{
  position: relative;
  top: -2px;
  width:100px;
  height:30px;
  border-color:#ad956a;
  color:#ac956a;
  font-size:14px;
  border-radius: 30px;
  margin-left:10px
}
`



class Mallbanner extends PureComponent {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SwiperCon>
        <h2>本月热销</h2>
        <Slider {...settings}>
          <div>
            <h3>
            <img src="http://img.jylc168.com/Upload/Mall/2017-11-23/a2095a163aa945d25.jpg@4e_0o_0l_156h_196w_90q.src" alt=""/>
            </h3>
            <Row>
              <Col span={8} title="Apple iPad mini 4 平板电脑 128G">Apple iPad mini 4 平板电脑 128G </Col>
              <Col span={8} offset={8}><b>246960</b>金币  <Button href="javascrip:;">兑换</Button> </Col>
            </Row>
          </div>
          <div>
            <h3>
              <img src="http://img.jylc168.com/Upload/Mall/2017-11-24/5bb85a1783af72c5a.jpg@4e_0o_0l_156h_196w_90q.src" alt=""/>
            </h3>
            <Row>
              <Col span={8} title="Apple iPad mini 4 平板电脑 128G">Apple iPad mini 4 平板电脑 128G </Col>
              <Col span={8} offset={8}><b>26160</b>金币  <Button href="javascrip:;">兑换</Button> </Col>
            </Row>
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
      </SwiperCon>
    );
  }
}
export default Mallbanner;
