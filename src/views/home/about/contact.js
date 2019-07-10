import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftmenu from '@containers/home/leftmenu';
import { Layout } from 'zent';
import { Icon } from 'zent';
const { Row, Col } = Layout



class Contact extends Component {
    render() {
        return (
            <div className="main">
            <div className="bd-wrap">
                <div className="container">
                    <div className="bd-wrap-text">
                        关于我们
                    </div> 
                </div>
            </div>
            <div className="container">
                <div className="page-container clearfix">
                    <div className="main-l jy-fl">
                        <Leftmenu></Leftmenu>
                    </div>
                    <div className="main-r jy-fl">
                    <div className="main-rp">
                        <div className="vice-header1">
                            <i></i> 客户服务
                        </div>
                        <div className="jy-mt-30">
                        如果您在囧羊平台（jylc168.com），遇到任何疑问，欢迎您与囧羊平台的客服人员联系。囧羊平台客服团队会为您提供专业、细致
                        的解答。
                        </div>
                        <div >
                        <Icon type="hotline-o" /> 客服电话：400-008-8782  <br />
                        <Icon type="suggestions" />   客服邮件：service@jylc168.com
                        </div>
                        <div className="vice-header1 jy-mt-30">
                            <i></i> 战略合作
                        </div>
                        <div className="jy-mt-30">
                        若贵公司希望与我们建立商务合作关系，形成优势互补，请将合作意向进行简要描述并发送邮件至：admin@jylc168.com，我
                        们会尽快与您联系。 
                        </div>
                        <div >
                        <Icon type="hotline-o" />   客服电话：400-008-8782  <br />
                        </div>
                        <div className="vice-header1 jy-mt-30">
                            <i></i> 公司地址
                        </div>
                        <div>
                        <Icon type="star" /> 上海总部：上海市闵行区吴中路1799号万象城V1栋1层101室  <br/>
                            <img src="https://img.jylc168.com/Pc/home/about/address.jpg" alt=""/>
                        </div>
                        <div className="vice-header1 jy-mt-30">
                            <i></i> 官方消息
                        </div>
                        <div className="about-er">
                            <Row>
                                <Col span={6}>
                                    <div>
                                        <img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/fuwuhao.jpg" alt=""/>
                                    </div>
                                    关注微信服务号
                                </Col>
                                <Col span={6}>
                                    <div>
                                        <img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/erweima.jpg" alt=""/>
                                    </div>
                                    关注微信订阅号
                                </Col>
                            </Row>
                        </div>
                        
                    </div>
                    
                
                    </div>
                </div>

            </div>
        </div>
        )
    }
}


export default Contact;
