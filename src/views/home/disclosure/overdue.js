import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Overdue extends Component {
    render(){
        return(
            <div className="main">
            <div className="bd-wrap">
                <div className="container">
                    <div className="bd-wrap-text">
                        信息披露  
                    </div> 
                </div>
            </div>
            <div className="container">
                <div className="page-container clearfix">
                    <div className="main-l jy-fl">
                        <Leftme></Leftme>
                    </div>
                    <div className="main-r jy-fl">
                        <div className="main-rp">
                            <div className="vice-head">项目逾期/代偿信息</div>
                            <div className="overdue-lists">
                            <Row>
                                <Col span={3}><div className="overdue-text">项目名称</div></Col>
                                <Col span={3}><div className="overdue-text">借款人</div></Col>
                                <Col span={3}><div className="overdue-text">逾期本金</div></Col>
                                <Col span={3}><div className="overdue-text">逾期利息</div></Col>
                                <Col span={3}><div className="overdue-text">协议还款日</div></Col>
                                <Col span={3}><div className="overdue-text">逾期天数</div></Col>
                                <Col span={3}><div className="overdue-text">逾期/代偿 原因</div></Col>
                                <Col span={3}><div className="overdue-text">现状态</div></Col>
                            </Row>
                            <Row>
                                <Col span={3}><div className="overdue-text">乐羊系列 <br /> 企信宝256期</div></Col>
                                <Col span={3}><div className="overdue-text">上海**餐饮<br />  有限公司</div></Col>
                                <Col span={3}><div className="overdue-text">0.00元</div></Col>
                                <Col span={3}><div className="overdue-text">3,958.33元</div></Col>
                                <Col span={3}><div className="overdue-text">2019-02-18</div></Col>
                                <Col span={3}><div className="overdue-text">至今</div></Col>
                                <Col span={3}><div className="overdue-text">资金周转</div></Col>
                                <Col span={3}><div className="overdue-text">催收中</div></Col>
                            </Row>
                            <Row>
                                <Col span={3}><div className="overdue-text">乐羊系列 <br /> 企信宝256期</div></Col>
                                <Col span={3}><div className="overdue-text">上海**餐饮<br />  有限公司</div></Col>
                                <Col span={3}><div className="overdue-text">0.00元</div></Col>
                                <Col span={3}><div className="overdue-text">3,958.33元</div></Col>
                                <Col span={3}><div className="overdue-text">2019-02-18</div></Col>
                                <Col span={3}><div className="overdue-text">至今</div></Col>
                                <Col span={3}><div className="overdue-text">资金周转</div></Col>
                                <Col span={3}><div className="overdue-text">催收中</div></Col>
                            </Row>
                            <Row>
                                <Col span={3}><div className="overdue-text">乐羊系列 <br /> 企信宝256期</div></Col>
                                <Col span={3}><div className="overdue-text">上海**餐饮<br />  有限公司</div></Col>
                                <Col span={3}><div className="overdue-text">0.00元</div></Col>
                                <Col span={3}><div className="overdue-text">3,958.33元</div></Col>
                                <Col span={3}><div className="overdue-text">2019-02-18</div></Col>
                                <Col span={3}><div className="overdue-text">至今</div></Col>
                                <Col span={3}><div className="overdue-text">资金周转</div></Col>
                                <Col span={3}><div className="overdue-text">催收中</div></Col>
                            </Row>
                            </div>
                            <Seal></Seal>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Overdue;