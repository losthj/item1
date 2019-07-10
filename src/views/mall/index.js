/*
* @Author: zk
* @Date:   2019-03-28 09:55:29
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-07-10 15:58:24
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '@assets/mall/index.scss';
import Mallbanner from '@components/mall/mallbanner';
import Column from '@containers/mall/column';
import Lottery from '@components/mall/lottery';
import { Layout,Icon,Button} from 'zent';
const { Row, Col } = Layout;

class Mall extends Component {
    render(){
        const settings = {
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplaySpeed: 2000,
            infinite: true,
            swipeToSlide: true,
            pauseOnHover: false,
            arrows: false
          };
          const settings1 = {
            autoplay: true,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplaySpeed: 2000,
            infinite: true,
            swipeToSlide: true,
            pauseOnHover: false,
            arrows: false
          };
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall" className="text-golden"> 金币商城</Link>
                    </div>
                    <div className="clearfix">
                        <div className="mall-banner">
                            <Mallbanner></Mallbanner>
                        </div>
                        <div className="mall-column">
                            <Column></Column>
                            <div className="mall-lottery">
                               <div className="gold-coin">
                                   <Row>
                                       <Col span={12}>我的金币：<b>200000</b> </Col>
                                       <Col span={6} offset={6}><span>活动规则</span> 
                                       <label><Icon type="help-circle"  />
                                       <div className="mall-tips">
                                            1. 参与方式： <br />
                                            <p> • 选择<span>88金币抽1次</span>或选择<span>176金币抽1次</span>（获得稀有奖品的机会越大)； </p>
                                            <p> • 每日签到活动中当月满签可免费获赠5次抽奖机会； </p>
                                            2. 每次抽奖扣除的金币将不予退还； <br />
                                            3. 获得奖品可在您的囧羊平台账户中心进行查询。 <br />
                                            4. 抽奖过程中，如果发现违规行为（如恶意注册大量账号，使用作弊程序    
                                            <p>等），囧羊平台有权取消您的中奖资格。</p>
                                       </div>
                                       </label> </Col>
                                   </Row>
                               </div>
                                <Lottery></Lottery>
                                <div className="broadcast">
                                    <Slider {...settings} >
                                        <div>
                                            <Row>
                                                <Col span={8}>133****0568</Col>
                                                <Col span={8}>获得了</Col>
                                                <Col span={8}>188金币</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={8}>133****0566</Col>
                                                <Col span={8}>获得了</Col>
                                                <Col span={8}>15棵 羊草</Col>
                                            </Row>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="mall-items">
                        <h3>充值中心</h3>
                        <Row>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="https://img.jylc168.com/Pc/mall/index/cz-icon1.png" alt=""/>
                                </div>
                                <h5>50元话费充值</h5>
                                <p>支持全网手机话费充值</p>
                                <div className="cz-price"><b>9000</b>金币</div>
                                <div className="cz-wrapper">
                                    <Link to="/mall/phonefee" className="cz-btn">充值</Link>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="https://img.jylc168.com/Pc/mall/index/cz-icon2.png" alt=""/>
                                </div>
                                <h5>100元话费充值</h5>
                                <p>支持全网手机话费充值</p>
                                <div className="cz-price"><b>18000</b>金币</div>
                                <div className="cz-wrapper">
                                    <Link to="/mall/phonefee" className="cz-btn">充值</Link>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="https://img.jylc168.com/Pc/mall/index/cz-icon3.png" alt=""/>
                                </div>
                                <h5>50元加油卡充值</h5>
                                <p>开车一族省心省力</p>
                                <div className="cz-price"><b>9000</b>金币</div>
                                <div className="cz-wrapper">
                                    <Link to="/mall/sinopec" className="cz-btn">充值</Link>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="https://img.jylc168.com/Pc/mall/index/cz-icon4.png" alt=""/>
                                </div>
                                <h5>100元加油卡充值</h5>
                                <p>开车一族省心省力</p>
                                <div className="cz-price"><b>18000</b>金币</div>
                                <div className="cz-wrapper">
                                    <Link to="/mall/sinopec" className="cz-btn">充值</Link>
                                </div>
                            
                            </Col>
                        </Row>
                    </div>
                    
                    <div className="mall-items">
                        <h3>卡券专区 <Button href="">查看更多<Icon type="right" /></Button></h3>
                        <Row>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="/mall/info"><h5 title="京东E卡200元">京东E卡200元</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>47000</b>金币</div>
                                            <del>原价48000金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to=""><h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="">  <h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="">  <h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="mall-items">
                        <h3>新品专区 <Button href="">查看更多<Icon type="right" /></Button></h3>
                        <Row>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to=""><h5 title="100元话费充值">京东E卡200元</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>47000</b>金币</div>
                                            <del>原价48000金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="">  <h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="">  <h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="items-img">
                                    <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                </div>
                                <div className="items-info">
                                    <Link to="">  <h5 title="100元话费充值">100元话费充值</h5></Link>
                                    <p>支持全网手机话费充值</p>
                                    <Row>
                                        <Col span={12}>
                                            <div className="cz-price"><b>18000</b>金币</div>
                                            <del>原价14800金币</del>
                                        </Col>
                                        <Col span={9} offset={3}>
                                            <span>萌宠9.5折</span> 
                                            <div>已兑换32件</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="exchange">
                       <Row>
                           <Col span={12}>
                            <div className="m-exchange">
                                <h3>本周畅销榜</h3>
                                <div className="mall-billboard">
                                    <Row>
                                        <Col span={2}>1.</Col>
                                        <Col span={14}>1元现金券（单笔出借满200元起用） </Col>
                                        <Col span={4}><b>150</b> 金币   </Col>
                                        <Col span={4}>2019-03-14</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>2.</Col>
                                        <Col span={14}>1元现金券（单笔出借满200元起用） </Col>
                                        <Col span={4}><b>150</b> 金币   </Col>
                                        <Col span={4}>2019-03-14</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>3.</Col>
                                        <Col span={14}>1元现金券（单笔出借满200元起用） </Col>
                                        <Col span={4}><b>150</b> 金币   </Col>
                                        <Col span={4}>2019-03-14</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>4.</Col>
                                        <Col span={14}>1元现金券（单笔出借满200元起用） </Col>
                                        <Col span={4}><b>150</b> 金币   </Col>
                                        <Col span={4}>2019-03-14</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>5.</Col>
                                        <Col span={14}>1元现金券（单笔出借满200元起用） </Col>
                                        <Col span={4}><b>150</b> 金币   </Col>
                                        <Col span={4}>2019-03-14</Col>
                                    </Row>
                                    
                                </div>
                              
                                
                            </div>
                           </Col>
                           <Col span={12}>
                            <div className="m-exchange">
                                <h3>最新兑换充值</h3>
                                <div className="mall-billboard1">
                                    <Slider {...settings1} >
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col span={6}>159*****766</Col>
                                                <Col span={6}><b>50</b> 元话费</Col>
                                                <Col span={6}>8280 金币</Col>
                                                <Col span={6}>2019-03-14</Col>
                                            </Row>
                                        </div>
                                    </Slider>
                                </div>
                               
                            </div>
                           </Col>
                       </Row>
                    </div>
                </div> 
                
            </div>

        )
    }
}

export default Mall;  