/*
* @Author: zk
* @Date:   2019-03-28 09:55:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-01 10:30:06
*/
import React, { PureComponent } from "react";
import Slider from "react-slick";

class Mallbanner extends PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
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
      </div>
    );
  }
}
export default Mallbanner;
