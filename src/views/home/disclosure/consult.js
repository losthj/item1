import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Consult extends Component {
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
                            <div className="vice-head">其他信息</div>
                            <div className="vice-header2">
                                <i></i> 咨询投诉信息
                            </div>
                            <div className="reveal-lists reveal-lists5">
                                <Row>
                                    <Col span={8}>
                                        <div className="consult-img jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/contact-1.png" alt=""/>
                                        </div>
                                        咨询、投诉、举报电话
                                        <h4>400-008-8782</h4>
                                    </Col>
                                    <Col span={8}>
                                        <div className="consult-img jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/contact-2.png" alt=""/>
                                        </div>
                                        电子邮箱
                                        <h4>service@jylc168.com</h4>
                                    </Col>
                                    <Col span={8}>
                                        <div className="consult-img jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/contact-3.png" alt=""/>
                                        </div>
                                        联系地址
                                        <h4>上海市闵行区吴中路1799号 <br />万象城V1栋1层101室</h4>
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
export default Consult;