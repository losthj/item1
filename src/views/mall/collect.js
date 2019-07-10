import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout,Button } from 'zent';
import Goodssitem from '@components/mall/goodsitem';
const { Row, Col } = Layout;


class Collect extends Component {
    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall"> 金币商城</Link> &gt;  
                        <Link to="/mall/collect" className="text-golden"> 我的收藏</Link>
                    </div>
                    <div className="mall-mian">
                        <h2 className="mian-title"><label>我的收藏</label></h2>
                        <div className="my-collect">
                        <Row>
                            <Col span={6}>
                                <div className="my-collects">
                                    <div className="items-img">
                                        <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                    </div>
                                    <div className="items-info">
                                        <Link to=""> <h5 title="100元话费充值">100元话费充值</h5></Link>
                                        <Row>
                                            <Col span={12}>
                                                <div className="cz-price"><span>18000</span>金币</div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="cz-price cz-price1">已兑换32件</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="collect-btn">
                                        <Button type="primary">删除</Button>
                                        <Button type="primary">加入购物车</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="my-collects">
                                    <div className="items-img">
                                        <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                    </div>
                                    <div className="items-info">
                                        <Link to=""> <h5 title="100元话费充值">100元话费充值</h5></Link>
                                        <Row>
                                            <Col span={12}>
                                                <div className="cz-price"><span>18000</span>金币</div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="cz-price cz-price1">已兑换32件</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="collect-btn">
                                    <Button type="primary">删除</Button>
                                    <Button type="primary">加入购物车</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="my-collects">
                                    <div className="items-img">
                                        <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                    </div>
                                    <div className="items-info">
                                        <Link to=""> <h5 title="100元话费充值">100元话费充值</h5></Link>
                                        <Row>
                                            <Col span={12}>
                                                <div className="cz-price"><span>18000</span>金币</div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="cz-price cz-price1">已兑换32件</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="collect-btn">
                                    <Button type="primary">删除</Button>
                                    <Button type="primary">加入购物车</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="my-collects">
                                    <div className="items-img">
                                        <img src="http://img.jylc168.com/Upload/Mall/2016-08-16/fb0357b2c69dd4898.png@4e_0o_0l_156h_196w_90q.src" alt=""/>
                                    </div>
                                    <div className="items-info">
                                        <Link to=""> <h5 title="100元话费充值">100元话费充值</h5></Link>
                                        <Row>
                                            <Col span={12}>
                                                <div className="cz-price"><span>18000</span>金币</div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="cz-price cz-price1">已兑换32件</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="collect-btn">
                                    <Button type="primary">删除</Button>
                                    <Button type="primary">加入购物车</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </div>

                        <div className="mall-header">
                            推荐商品
                        </div>
                        <Goodssitem></Goodssitem>
                    </div>            
                </div>
            </div>
        )
    }
}

export default Collect;  