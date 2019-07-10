import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout,Select, Button,Pop  } from 'zent';
import Goodssitem from '@components/mall/goodsitem';
const { Row, Col } = Layout;
const data = [
    {value: 0, text: '全部'},
    {value: 2, text: '最近三个月'},
    {value: 3, text: '最近一个月'},
    {value: 4, text: '最近七天'}
  ];
  const trigger = 'hover';
class Order extends Component {

    

    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall"> 金币商城</Link> &gt;  
                        <Link to="/mall/order" className="text-golden"> 我的订单</Link>
                    </div>
                    <div className="mall-mian">
                        <h2 className="mian-title"><label>我的订单</label></h2>
                        <div className="order-search">
                            <Row>
                            <Col span={12}>
                                <span>筛选条件</span>
                                <a href="javascrip:;">全部</a>
                                <a href="javascrip:;">待发货</a>
                                <a href="javascrip:;">待收货</a>
                                <a href="javascrip:;">已完成</a>
                                <a href="javascrip:;">已取消</a>
                            </Col>
                            <Col span={12}>创建时间    <Select data={data} /></Col>
                        
                            </Row>
                        </div>
                        <h2 className="mian-title"><label>订单信息</label></h2>
                        <div className="order-head">
                            订单号：J5abfb09f3d101907
                        </div> 
                        <div className="order-table">
                        <table>
                            <tbody>
                            <tr>
                                <th>商品</th>
                                <th>单价（金币）</th>
                                <th>兑换数量</th>
                                <th>小计（金币）</th>
                                <th>状态</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="table-img">
                                        <a href="###"><img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" /></a>
                                        <div className="table-img-r">
                                            <h4>耐热玻璃日式三件套泡茶杯</h4>
                                            <p>颜色分类: 7号色  尺码: 3XL </p>
                                        </div>
                                    </div>
                                </td>
                                <td>13545金币</td>
                                <td>10件</td>
                                <td>13545金币</td>
                                <td className="td-rowspan" rowSpan="1">                 
                                <Button>已发货</Button>
                                <Pop trigger={trigger} position="bottom-right" content="中通快递 运单号：3833286733446">
                                    查看物流
                                </Pop>
                                    
                                </td>
                            </tr>
                            {/* <tr>
                                <td>
                                  <div className="table-img">
                                      <a href="###"><img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" /></a>
                                      <div className="table-img-r">
                                          <h4>耐热玻璃日式三件套泡茶杯</h4>
                                          <p>颜色分类: 7号色  尺码: 3XL </p>
                                      </div>
                                  </div>
                                </td>
                                <td>13545金币</td>
                                <td>10件</td>
                                <td><span className="ui-text-mall">13545</span>金币</td>
                            </tr> */}
                            </tbody>
            	            </table>
                        </div>
                        <div className="order-head">
                            订单号：J5abfb09f3d101907
                        </div> 
                        <div className="order-table">
                        <table>
                            <tbody>
                            <tr>
                                <th>商品</th>
                                <th>单价（金币）</th>
                                <th>兑换数量</th>
                                <th>小计（金币）</th>
                                <th>状态</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="table-img">
                                        <a href="###"><img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" /></a>
                                        <div className="table-img-r">
                                            <h4>耐热玻璃日式三件套泡茶杯</h4>
                                            <p>颜色分类: 7号色  尺码: 3XL </p>
                                        </div>
                                    </div>
                                </td>
                                <td>13545金币</td>
                                <td>10件</td>
                                <td><span className="ui-text-mall">13545</span>金币</td>
                                <td className="td-rowspan" rowSpan="2">                 
                                <Button>已完成</Button>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                  <div className="table-img">
                                      <a href="###"><img src="https://img.alicdn.com/tps/TB1I8LpLXXXXXalaXXXXXXXXXXX-398-418.jpg" alt="" /></a>
                                      <div className="table-img-r">
                                          <h4>耐热玻璃日式三件套泡茶杯</h4>
                                          <p>颜色分类: 7号色  尺码: 3XL </p>
                                      </div>
                                  </div>
                                </td>
                                <td>13545金币</td>
                                <td>10件</td>
                                <td>13545金币</td>
                            </tr>
                            </tbody>
            	            </table>
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

export default Order;  