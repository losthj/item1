import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Partner extends Component {
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
                            <div className="vice-head">股东信息</div>
                            <div className="partners">
                                <Row>
                                    <Col span={3} offset={1} className="jy-gary">股东名称 </Col>
                                    <Col span={8} className="partners-boder" > 上海拙赢互联网科技有限公司</Col>
                                    <Col span={5} offset={1} className="jy-gary">股东占股比例</Col>
                                    <Col span={2} offset={4} >100%</Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i>董事、监事名单
                            </div>
                            <div className="partners partners1">
                                <Row>
                                    <Col span={3} offset={1} className="jy-gary">执行董事 </Col>
                                    <Col span={2} offset={6} className="partners-boder" > 眭小龙</Col>
                                    <Col span={5} offset={1} className="jy-gary">监事</Col>
                                    <Col span={2} offset={4} className="partners-boder">杨侃贇</Col>
                                </Row>
                            </div>

                            <div className="vice-header2">
                                <i></i>管理团队
                            </div>
                            <div className="partners2">
                                <Row>
                                <Col span={8}>
                                    <img src="https://img.jylc168.com/Pc/home/disclosure/team1.jpg" alt=""/>
                                </Col>
                                <Col span={16}>
                                    <div className="partners-text1">杨侃贇</div>
                                    <div className="partners-text2">首席信息官</div>
                                    <div className="partners-text3">
                                    杨侃贇先生毕业于英国拉夫堡大学市场营销专业，有5年以上的数据分析经验。期间主要为大型国有企业、 外资企业、上市公司提供研究咨询服务，对消费者行为习惯有精准的把握。同时，在国际领先的互联 网金融平台担任过风控师，擅长整合多元信息， 确保平台高速且健康地发展。
                                    </div>
                                </Col>
                                </Row>

                                <Row className="jy-mt-30">
                                <Col span={8}>
                                    <img src="https://img.jylc168.com/Pc/home/disclosure/team2.jpg" alt=""/>
                                </Col>
                                <Col span={16}>
                                    <div className="partners-text1">董军华</div>
                                    <div className="partners-text2">首席运营官</div>
                                    <div className="partners-text3">
                                    董军华先生毕业于上海立信会计学院金融系，具有6年以上中小微产品、流程经验。 曾任职于世界五百强知名外资银行，期间专职于中小微企业融资项目研究，对于产品模型的搭建、 运营管理、市场分析等有较深的见解。
                                    </div>
                                </Col>
                                </Row>

                                <Row className="jy-mt-30">
                                <Col span={8}>
                                    <img src="https://img.jylc168.com/Pc/home/disclosure/team3.jpg?=1" alt=""/>
                                </Col>
                                <Col span={16}>
                                    <div className="partners-text1">眭小龙</div>
                                    <div className="partners-text2">执行董事</div>
                                    <div className="partners-text3">
                                    眭小龙先生毕业于上海立信会计学院金融系，具有3年以上审计、内部控制经验。曾任职于知名会计师事务所及外资银行，对财务管理、内部控制等有较为深入的了解。
                                    </div>
                                </Col>
                                </Row>

                                <Row className="jy-mt-30">
                                <Col span={8}>
                                    <img src="https://img.jylc168.com/Pc/home/disclosure/team4.jpg?=1" alt=""/>
                                </Col>
                                <Col span={16}>
                                    <div className="partners-text1">黄兴中</div>
                                    <div className="partners-text2">首席技术官</div>
                                    <div className="partners-text3">
                                    黄兴中先生具有十多年互联网技术研发经验，先后在多家互联网金融公司任技术研发负责人，全面主持公司研发与技术管理工作，规划公司的技术发展路线与新产品开发，实现公司的技术创新目标。
                                    </div>
                                </Col>
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
export default Partner;