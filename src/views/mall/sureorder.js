import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout} from 'zent';
import Sure from '@components/mall/sure';
import Coupon from '@components/mall/coupon';
const { Row, Col } = Layout;

class Sureorder extends Component { 
    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall"> 金币商城</Link> &gt;  
                        <Link to="/mall/sureorder" className="text-golden"> 确认订单</Link>
                    </div>
                    <div className="mall-mian">
                        <Sure></Sure>
                        <h2 className="mian-title"><label>订单信息</label></h2>
                        <div className="sure-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>商品</th>
                                        <th>数量</th>
                                        <th>小计</th>
                                    </tr>
                                    <tr>
                                        <td> 
                                            <Link to="">
                                            <img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt=""/>
                                                澳洲swisse钙片维生素D 柠檬
                                            </Link>
                                         </td>
                                        <td>1件</td>
                                        <td><label>756504</label>金币</td>
                                    </tr>
                                    <tr>
                                        <td> 
                                            <Link to="">
                                            <img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt=""/>
                                                澳洲swisse钙片维生素D 柠檬
                                            </Link>
                                         </td>
                                        <td>1件</td>
                                        <td><label>756504</label>金币</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      
                        <Coupon></Coupon>
                        <div className="sure-address">
                            <ul>
                                <li>您的金币：<span>1211317</span>金币</li>
                                <li>优惠金币：<span>302365</span>金币</li>
                                <li>您需支付：<span>819365</span>金币</li>
                                <li>寄送至：<span>上海 上海 黄浦区 九江路686号宝龙大厦15楼</span></li>
                                <li>收货人：<span>孙亚文</span></li>
                            </ul>
                        </div>
                        <div className="m-store">
                            <Row>
                                <Col span={11} offset={13}>
                                    <Link to="/mall/cart" className="zent-btn">返回购物</Link>
                                    <Link to="###" className="zent-btn">确认结算</Link>
                                </Col>
                            </Row>
                        </div>

                    </div>            
                </div>
            </div>
        )
    }
}

export default Sureorder;  