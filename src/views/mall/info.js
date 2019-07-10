import React, { Component } from 'react';
import {Link} from "react-router-dom" ;
import '@assets/mall/index.scss';
import { Layout,Tag,NumberInput,Button} from 'zent';
import Goods from '@components/mall/goods';
import Goodssitem from '@components/mall/goodsitem';
import Goodsinfo from '@components/mall/goodsinfo';
const { Row, Col } = Layout;



class Info extends Component {
    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall" > 金币商城</Link> &gt;  
                        <Link to="" className="text-golden"> 商品详情页</Link>
                    </div>
                    <div className="mall-mian">
                        <div className="mall-choose">
                            <Row>
                                <Col span={12}>
                                    <div className="choose-ware">
                                        <Goods></Goods>
                                    </div>
                                </Col>
                                <Col span={12}>
                                <div className="choose-info">
                                    <h3>蜜纽康MGO100+麦卢卡蜂蜜250g</h3>
                                    <div className="ware-price">
                                        <div className="ware-agio">
                                            <Row>
                                                <Col span={4} offset={1}> <Tag color="#cbb27e"style={{ fontSize: 14 }}>萌宠9.5折 </Tag></Col>
                                                <Col span={5} offset={1}>
                                                    <b>402500</b> 
                                                </Col>
                                                <Col span={3} offset={2}>商品原价 </Col>
                                                <Col span={8}><b><del>150000</del> </b></Col>
                                            </Row>
                                        </div>
                                        <Row>
                                             <Col span={23} offset={1}>商品编号 <b>1000797</b> </Col>
                                        </Row>
                                    </div>
                                    <div className="ware-nature">
                                        <Row>
                                            <Col span={4}>我的金币</Col>
                                            <Col span={20}><span className="ware-span">717</span></Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>商品库存</Col>
                                            <Col span={20}>999439件</Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>已兑数量</Col>
                                            <Col span={20}>713件</Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>购买数量</Col>
                                            <Col span={20}> <NumberInput value={2}  min={0} showCounter placeholder="请输入数字"/></Col>
                                        </Row>
                                        <Row>
                                            <Col span={24} className="text-gray">本商品为电子票券，支付成功后会发送至您的账户</Col>
                                        </Row>
                                        <Row className="choose-btn">
                                            <Col span={9}> <Button  type="primary" >立即兑换</Button></Col>
                                            <Col> <Button  type="primary">收藏</Button></Col>
                                        </Row>
                                    </div>
                                </div>
                                    
                                </Col>
                            </Row>
                        </div> 
                        <div className="mall-header">
                            相关商品
                        </div>
                        <Goodssitem></Goodssitem>
                        <div className="choose-detail">
                                <Row>
                                    <Col span={5}>
                                    <div className="choose-record">
                                        <Row>
                                            <Col span={24} className="record-head"><label>历史浏览记录</label></Col>
                                        </Row>
                                        <div className="record-list">
                                            <Row>
                                                <Col span={6}>
                                                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/006d5c9dd51668c3c.png" alt=""/>
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/006d5c9dd51668c3c.png" alt=""/>
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                    <img src="http://img.jylc168.com/Upload/Mall/2019-03-29/006d5c9dd51668c3c.png" alt=""/>
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="choose-record choose-record1">
                                        <Row>
                                            <Col span={24} className="record-head"><label>本周热销榜</label></Col>
                                        </Row>
                                        <div className="record-list">
                                            <Row>
                                                <Col span={6}>
                                                    1
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                   2
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                   3
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                   4
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={6}>
                                                   5
                                                </Col>
                                                <Col span={17} offset={1}>
                                                    <div className="txoh" title="100元囧羊券（单笔投资满20000元起用）">100元囧羊券（单笔投资满20000元起用）</div>
                                                    <div>48000 金币</div>
                                                </Col>
                                            </Row>
                                        </div>
                                       
                                    </div>
                                    
                                </Col>
                                <Col span={19}>
                                    <div className="choose-info">
                                        <Goodsinfo></Goodsinfo>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
    
        )
          
    }
}
export default Info;   