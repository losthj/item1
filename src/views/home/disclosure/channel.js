import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Channel extends Component {
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
                            <div className="vice-head">渠道信息</div>
                            <div className="vice-header2">
                                <i></i> 公司官网地址
                            </div>
                            <div className="reveal-lists reveal-lists3">
                                <Row>
                                    <Col span={24}>
                                        <a href="https://www.jylc168.com">https://www.jylc168.com</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 移动APP应用
                            </div>
                            <div className="reveal-lists reveal-lists4">
                                <Row>
                                    <Col span={12}>
                                        <img src="https://img.jylc168.com/Asset/Home/common2/img/about/rule/rv-1.jpg" alt=""/> 
                                        <p>扫一扫安装客户端</p>
                                    </Col>
                                    <Col span={12}>
                                    <div className="jy-mt-30">
                                        <a href="##" rel="noopener noreferrer"  >
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/icon5.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="jy-mt-30">      
                                        <a href="##" rel="noopener noreferrer" className="jy-mt-30" >
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/icon6.png" alt=""/>
                                        </a>
                                    </div>
                                      
                                    </Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 微信公众号
                            </div>
                            <div className="reveal-lists reveal-lists4">
                                <Row>
                                    <Col span={12}>
                                        <img src="https://img.jylc168.com/Asset/Home/common2/img/about/rule/rv-2.jpg" alt=""/> 
                                        <p>小囧微服务</p>
                                    </Col>
                                    <Col span={12}>
                                        <img src="https://img.jylc168.com/Asset/Home/common2/img/about/rule/rv-3.jpg" alt=""/> 
                                        <p>囧羊资讯</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 微博
                            </div>
                            <div className="reveal-lists reveal-lists3">
                                <Row>
                                    <Col span={24}>
                                        <a href="https://weibo.com/021yang">囧羊平台</a>
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
export default Channel;