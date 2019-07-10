import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import Build from '@containers/home/build';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Prepare extends Component {
    render() {
        return (
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
                            <div className="vice-head">备案信息</div>
                            <div className="vice-header2">
                                <i></i> 备案登记信息
                            </div>
                            <div className="reveal-lists">
                                <Row>
                                    <Col span={12}>备案登记地方金融监管部门</Col>
                                    <Col span={12}>建设中…
                                        <img src="https://img.jylc168.com/Pc/home/disclosure/icon1.png" alt=""/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>备案登记时间</Col>
                                    <Col span={12}>建设中…
                                        <img src="https://img.jylc168.com/Pc/home/disclosure/icon1.png" alt=""/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>备案登记编号</Col>
                                    <Col span={12}>建设中…
                                        <img src="https://img.jylc168.com/Pc/home/disclosure/icon1.png" alt=""/>
                                    </Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 电信业务经营许可信息
                            </div>
                            <div className="reveal-lists">
                                <Row>
                                    <Col span={12}>电信业务经营许可证号</Col>
                                    <Col span={12} className="reveal-green">沪ICP备15046973号-1</Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 信息安全等级保护测评
                            </div>
                            <div className="reveal-lists">
                                <Row>
                                    <Col span={12}>信息安全等级保护测评回执编号</Col>
                                    <Col span={12} className="reveal-green">J-18037</Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 网站备案图标及编号
                            </div>
                            <Build></Build>
                            <Seal></Seal>
                        </div>
                        
                
                    </div>
                </div>

            </div>
        </div>
        )
    }
}


export default Prepare;
