import React, { PureComponent } from "react";
import styled from 'styled-components';
import { Layout  } from 'zent';
const { Row, Col } = Layout

const Items = styled.div`
    border-top:1px solid #dcdcdc;
    border-bottom:1px solid #dcdcdc;
    border-right:1px solid #dcdcdc;
    li{
        float:left;
        width:186px;
        height:218px;
        border-left:1px solid #dcdcdc;
        padding:0 15px;
        .item-img{
            height:155px;
            line-height:155px;
            text-align:center;
            img{
                width:100%;
                vertical-align: middle;
            }
        }
        .zent-col{
            span{
                color:#ad956a;
            }
        }
        .zent-col:last-child{
            text-align:right;
        }
    }
`

class Goodsitem extends PureComponent {
  render() {

    return (
      <Items>
          <ul className="clearfix">
              <li>
                  <div className="item-img">
                  <a href="####">
                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/61e45c9dd5f7e2ec5.png@4e_0o_0l_156h_202w_90q" alt=""/>
                  </a>
                  </div>
                  <div className="txoh" title="0元囧羊券（单笔投资满2000元起用）">
                    10元囧羊券（单笔投资满2000元起用）
                  </div>
                  <Row>
                      <Col span={12}><span>14800</span>金币</Col>
                      <Col span={12}>已兑换713件</Col>
                  </Row>
              </li>
              <li>
                  <div className="item-img">
                    <a href="####">   
                        <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/006d5c9dd51668c3c.png" alt=""/>
                    </a>
                 
                  </div>
                  <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">
                    100元囧羊券（单笔投资满20000元起用）
                  </div>
                  <Row>
                      <Col span={12}><span>14800</span>金币</Col>
                      <Col span={12}>已兑换713件</Col>
                  </Row>
              </li>
              <li>
                  <div className="item-img">
                  <a href="####">
                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/61e45c9dd5f7e2ec5.png@4e_0o_0l_156h_202w_90q" alt=""/>
                  </a>
                  </div>
                  <div className="txoh" title="0元囧羊券（单笔投资满2000元起用）">
                    10元囧羊券（单笔投资满2000元起用）
                  </div>
                  <Row>
                      <Col span={12}><span>14800</span>金币</Col>
                      <Col span={12}>已兑换713件</Col>
                  </Row>
              </li>
              <li>
                  <div className="item-img">
                  <a href="####">
                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/61e45c9dd5f7e2ec5.png@4e_0o_0l_156h_202w_90q" alt=""/>
                  </a>
                  </div>
                  <div className="txoh" title="0元囧羊券（单笔投资满2000元起用）">
                    10元囧羊券（单笔投资满2000元起用）
                  </div>
                  <Row>
                      <Col span={12}><span>14800</span>金币</Col>
                      <Col span={12}>已兑换713件</Col>
                  </Row>
              </li>
              <li>
                  <div className="item-img">
                  <a href="####">
                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/61e45c9dd5f7e2ec5.png@4e_0o_0l_156h_202w_90q" alt=""/>
                  </a>
                  </div>
                  <div className="txoh" title="0元囧羊券（单笔投资满2000元起用）">
                    10元囧羊券（单笔投资满2000元起用）
                  </div>
                  <Row>
                      <Col span={12}><span>14800</span>金币</Col>
                      <Col span={12}>已兑换713件</Col>
                  </Row>
              </li>
          </ul>
      </Items>
    );
  }
}
export default Goodsitem;  