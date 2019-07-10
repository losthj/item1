import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout,NumberInput,Button,Icon } from 'zent';
import Goodssitem from '@components/mall/goodsitem';
const { Row, Col } = Layout;


class Cart extends Component {
    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall" > 金币商城</Link> &gt;  
                        <Link to="/mall/cart" className="text-golden"> 我的购物车</Link>
                    </div>
                    <div className="mall-mian">
                        <h2 className="mian-title"><label>我的购物车</label></h2>
                        <div className="mall-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>商品</th>
                                        <th>单价（金币）</th>
                                        <th>兑换数量</th>
                                        <th>小计（金币）</th>
                                        <th>操作</th>
                                    </tr>  
                                    <tr>
                                        <td>
                                            <div className="table-img">
                                                <div className="table-img-l">
                                                    <input type="checkbox" value="" name="Fruit" />
                                                </div>
                                                <img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" />
                                                <div className="table-img-r">
                                                    <h4>耐热玻璃日式三件套泡茶杯</h4>
                                                    <p>颜色分类: 7号色  尺码: 3XL </p>
                                                </div>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            72000
                                        </td>
                                        <td>
                                            <NumberInput value={1}  min={0} showCounter placeholder="请输入数字"/>
                                        </td>
                                        <td>
                                            <label>72000</label>
                                        </td>
                                        <td>
                                            <Button>加入收藏</Button>
                                            <Button>删除</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="table-img">
                                                <div className="table-img-l">
                                                    <input type="checkbox" value="" name="Fruit" />
                                                </div>
                                                <img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" />
                                                <div className="table-img-r">
                                                    <h4>耐热玻璃日式三件套泡茶杯</h4>
                                                    <p>颜色分类: 7号色  尺码: 3XL </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            72000
                                        </td>
                                        <td>
                                            <NumberInput value={1}  min={0} showCounter placeholder="请输入数字"/>
                                        </td>
                                        <td>
                                            <label>72000</label>
                                        </td>
                                        <td>
                                            <Button>加入收藏</Button>
                                            <Button>删除</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="table-img">
                                                <div className="table-img-l">
                                                    <input type="checkbox" value="" name="Fruit" />
                                                </div>
                                                <img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" />
                                                <div className="table-img-r">
                                                    <h4>耐热玻璃日式三件套泡茶杯</h4>
                                                    <p>颜色分类: 7号色  尺码: 3XL </p>
                                                </div>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            72000
                                        </td>
                                        <td>
                                            <NumberInput value={1}  min={0} showCounter placeholder="请输入数字"/>
                                        </td>
                                        <td>
                                        <label>72000</label>
                                        </td>
                                        <td>
                                            <Button>加入收藏</Button>
                                            <Button>删除</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <div className="no-store">
                                还没有兑换商品
                            </div> */}
                            <div className="m-total">
                                <Row>
                                    <Col span={2}>
                                        <input className="ui-checkbox fl" id="checkall" type="checkbox" value=""  />
                                        <label> 全选</label>
                                    </Col>
                                    <Col span={2}><a href="javscript:;"><Icon type="remove-o" /> 删除</a></Col>
                                    <Col span={3}offset={13}>共<span>8</span>件商品</Col>
                                    <Col span={4}>合计<span>12312312</span>金币</Col>
                                </Row>
                            </div>
                        </div>
                        <div className="m-store">
                            <Row>
                                <Col span={11} offset={13}>
                                    <Link to="/mall" className="zent-btn">继续购物</Link>
                                    <Link to="/mall/sureorder" className="zent-btn">确认结算</Link>
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

export default Cart;  