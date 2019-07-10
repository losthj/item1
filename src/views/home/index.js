import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Carousel from '@components/common/carousel';
import FixRisk from '@containers/home/fixRisk';
import { Layout } from 'zent';
import '@assets/home/home.scss'
const { Row, Col } = Layout;

const pages = [
        {
            "destUrl": "https://m.jylc168.com/mine/invite",
            "activityTitle": "囧羊平台新春“荐”面礼，邀请好友赚巅峰收益",
            "activityDesc": "活动期间，邀请好友注册并且好友完成出借，推荐人即可享受好友累计年化出借金额的返现奖金，好友出借越多奖励越高，不设上限",
            "isNeedAuth": "1",
            "img": "https://img.jylc168.com/Upload/Common/2018-07-12/7c0f5b46c798dee9d.jpg"
        },
        {
            "destUrl": "https://m.jylc168.com/mine/task",
            "activityTitle": "囧羊平台成长任务让出借增值尽揽",
            "activityDesc": "任务期间银币用户首次签到领888金币，好友推荐任务领加息卡可叠加使用，出借任务壕礼送不停话费、京东e卡等你来拿",
            "isNeedAuth": "1",
            "img": "https://img.jylc168.com/Upload/Common/2019-02-01/338d5c531c428e81a.jpg"
        },
        {
            "destUrl": "https://m.jylc168.com/hd2018/dlqx",
            "activityTitle": "砥砺前行不忘初心，合规路上与你一路同行-囧羊",
            "activityDesc": "囧羊成立专门的合规小组，按照《上海市网络借贷信息中介机构合规审核与整改验收工作指引表》中的监管要求，逐一进行合规整改，迄今为止，囧羊的合规整改正在有条不紊的进行着。",
            "isNeedAuth": "0",
            "img": "https://img.jylc168.com/Upload/Common/2018-08-07/50bd5b695f7160d37.jpg"
        },
        {
            "destUrl": "https://m.jylc168.com/index/ca",
            "activityTitle": "囧羊携手上上签，全面升级电子签章服务，守护互金时代的契约精神。",
            "activityDesc": "守护互联网时代的契约精神，为投资人保驾护航。",
            "isNeedAuth": "0",
            "img": "https://img.jylc168.com/Upload/Common/2019-01-11/0ac35c38022339ff5.jpg"
        }
]

class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
          loginState: true,
          project: [1,3,2,3]
      }
  }
  render() {
    const settings = {
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
    return (
      <div>
        <div className="banner-warp">
            <Carousel height="360px" data={pages} />
            <div className="wap-info">
                <div className="user-info">
                    <div className="user-info-top">
                        <div className="fz22 text-white">148168</div>
                        <div className="">名聪明用户选择</div>
                    </div>
                    <div className="tar">
                        <div className="text-white fz24">7%-9.8%</div>
                        <div>协议约定借款年化利率</div>
                    </div>
                    {
                        this.state.loginState ? 
                        <div className="user-logined">
                            <div>
                                <Link to="/user/cardbag/red">
                                    <img height="24" className="login-icon" src="https://img.jylc168.com/Asset/Home/common2/img/index/reward_icon2.png" alt="" />
                                                        可用现金券
                                    <span className="fz18 text-white">0</span>元
                                </Link>
                            </div>
                            <div className="mt-10">
                                <Link to="/user/coin">
                                <img height="30" className="login-icon" src="https://img.jylc168.com/Asset/Home/common2/img/index/reward_icon1.png" alt="" />
                                                        可用金币
                                <span className="fz18 text-white">50</span>个
                                </Link>
                            </div>
                        </div>
                        :
                        <div>
                            <Link to="/access/reg" className="user-btn user-btn-2">注册领三重好礼</Link>
                            <Link to="/access/login" className="user-btn">登录</Link> 
                        </div>
                    }
                    
                    
                </div>
            </div>
        </div>
        <div className="web-info">
          <div className="container">
            <Row>
              <Col className="infoItem" span={6}>
                <div>累积注册人数</div>
                <div className="operate-num">148,154 <span>人</span></div>
              </Col>
              <Col className="infoItem" span={6}>
                <div>累积交易总额</div>
                <div className="operate-num">1,018,246,900.00<span>元</span></div>
              </Col>
              <Col className="infoItem" span={6}>
                <div>累积为出借人赚取</div>
                <div className="operate-num">148,154 <span>元</span></div>
              </Col>
              <Col className="infoItem" span={6}>
                <div>持续运营时间</div>
                <div className="operate-num">3<span>年</span>114<span>天</span>14<span>小时</span></div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container">
            <Row className="characterList">
              <Col className="characterItem" span={6}>
                <div className="character-icon"></div>
                <div className="character-title">银行存管</div>
                <div className="character-txt">上海华瑞银行存管，<br/>资金分账管理</div>
              </Col>
              <Col className="characterItem" span={6}>
                <div className="character-icon character-icon-2"></div>
                <div className="character-title">严格风控</div>
                <div className="character-txt">大数据风控模型，<br/>专业风控团队</div>
              </Col>
              <Col className="characterItem" span={6}>
                <div className="character-icon character-icon-3"></div>
                <div className="character-title">智慧微萌</div>
                <div className="character-txt">智慧科技持续多年<br/>扶植广大小微企业萌芽</div>
              </Col>
              <Col className="characterItem" span={6}>
                <div className="character-icon character-icon-4"></div>
                <div className="character-title">信息披露</div>
                <div className="character-txt">四年持续运营，<br/>定期披露运营数据</div>
              </Col>
            </Row>

            <div className="project-main">
                {
                  this.state.project.map((item,index) => (
                    <div className="project-item" key={index}>
                        <div className="project-top">
                            <Link to="">喜羊系列 企信宝200期</Link>
                        </div>
                        <Row>
                          <Col span={4}>
                            <div className="col-item rate-num">
                                8.5 <span>%</span>
                            </div>
                            <div className="col-item">协议约定借款年化利率</div>
                          </Col>
                          <Col span={5}>
                            <div className="col-item">
                                <strong>90</strong>天
                            </div>
                            <div className="col-item">项目期限</div>
                          </Col>
                          <Col span={5}>
                            <div className="col-item">
                                <strong>0</strong>元
                            </div>
                            <div className="col-item">剩余金额</div>
                          </Col>
                          <Col span={5}>
                            <div className="col-item">
                                先息后本
                            </div>
                            <div className="col-item">还款方式</div>
                          </Col>
                          <Col span={5}>
                              <div>
                                  <Link className={ index === 2 ? 'm-btn filterGray' : 'm-btn'} to="m-btn">出&nbsp;&nbsp;借</Link>
                                  <div className="progress-outter jy-f-r">
                                    <div className="progress-inner" style={{width: "79%"}}>
                                    </div>
                                  </div>
                              </div>
                          </Col>
                        </Row>
                    </div>
                  ))
                }
            </div>
            
            <Row className="mt-30">
              <Col span={12}>
                <div className="m-media">
                    <div className="media-title">
                        <span>网站公告</span>
                        <Link to="/">查看更多&gt;&gt;</Link>
                    </div>
                    <ul className="media-list">
                        <li>
                            <Link to="">
                                <span className="txo">【公告】囧羊2019年春节放假通知及安排</span>
                                <i className="txo">2019-01-25 16:57</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span>【公告】囧羊2019年春节放假通知及安排</span>
                                <i>2019-01-25 16:57</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span>【公告】囧羊2019年春节放假通知及安排</span>
                                <i>2019-01-25 16:57</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span>【公告】囧羊2019年春节放假通知及安排</span>
                                <i>2019-01-25 16:57</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span>【公告】囧羊2019年春节放假通知及安排</span>
                                <i>2019-01-25 16:57</i>
                            </Link>
                        </li>
                    </ul>
                </div>
              </Col>
              <Col span={12}>
                <div className="m-media">
                    <div className="media-title">
                        <span>用户最新出借</span>
                        <Link to="/">查看更多&gt;&gt;</Link>
                    </div>
                    <Slider {...settings} className="media-list invest-list">
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                        <div className="invest-li">
                            <div>2019-03-01 10:03</div>
                            <div>139****8228</div>
                            <div>出借金额236,000.00元</div>
                            <div>获得收益5,015.01 元</div>
                        </div>
                    </Slider>
                </div>
              </Col>
            </Row>

            <div className="m-partner">
                <div className="partner-title">合作机构</div>
                <ul className="partner-list clearfix">
                    <li>
                        <Link to="http://www.jylc168.com/about/view/id/Ljvt2xq5IH3GZxhiGhtbag.html" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner_mlkj.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.jylc168.com/about/view/id/xtC28_l2MJRgihOHZjCtow.html" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/partner_360.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.jylc168.com/about/view/id/SPCIXeSqxneAzY6RKth6PA.html" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/partner_sg.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.jylc168.com/index/ca" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/new2019/partner_ssq.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" target="_blank">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-5.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.jylc168.com/about/view/id/txt5wwvMKKrP_5jgcK18VA.html" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-6.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" target="_blank">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-7.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" target="_blank">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-8.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" target="_blank">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-9.jpg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" target="_blank">
                            <img src="https://img.jylc168.com/Asset/Home/common/img/partner/logo-10.jpg" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
         </div>
        <FixRisk />
      </div>
    );
  }
}



export default Home;
