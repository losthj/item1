import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout,Button } from 'zent';
const { Row, Col } = Layout;

const ItemCon = styled.div`
 /*我的收藏*/
.my-collect{
    margin-top: 60px;
    margin-bottom:10px;
    ul li{
        width: 272px;
        float: left;
    }
    .my-collects{
        position: relative;
        height: 260px;
        padding-right: 10px;
        .items-img{
            height: 161px;
            line-height: 161px;
            text-align: center;
            overflow: hidden;
            border: 2px solid #ffffff;
            img{
                vertical-align: middle;
                height: 100%;
            }
        }
        h5{
            text-align: left;
            @extend .txoh;
        }
        a:hover{
            color: #ff4794;
        }
        .cz-price{
            height: 20px;
            line-height: 20px;
            @extend h5;
            span{
                color: #ac956a;
            }
        }
        .cz-price1{
            text-align: right;
        }
        .collect-btn{
            display: none;
            margin-top: 15px;
            .zent-btn{
                width: 110px;
                height: 30px;
                padding: 0;
                border: 0;
                background: linear-gradient(#cdb37d, #a18b64);
            }
            .zent-btn + .zent-btn {
                margin-left: 42px;
            }
        }
        &:hover .collect-btn{
            display: block;
        }
        &:hover .items-img{
            border: 2px solid #dddddd;
        }
        &:hover .items-img img{
            -webkit-transform: scale(0.98);
            transform: scale(0.98);
            -webkit-transition: all 0.4s linear;
            -moz-transition: all 0.4s linear;
            -o-transition: all 0.4s linear;
            -ms-transition: all 0.4s linear;
            transition: all 0.4s linear;
        }
    }
}


`

class Collectitem extends PureComponent {
    render(){
        return(
           <ItemCon>
               <div className="my-collect">
                        <ul className="clearfix">
                            <li >
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
                            </li>
                            <li >
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
                            </li>
                            <li >
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
                            </li>
                            <li >
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
                            </li>
                            <li >
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
                            </li>
                        </ul>
                        </div> 
                    </ItemCon>

        )
    }
}

export default Collectitem;  