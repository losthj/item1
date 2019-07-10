import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import New from '@components/common/new';
import { Layout } from 'zent';
const { Row, Col } = Layout



const numbers = [1, 2, 3];
class Evaluate extends Component {
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
                                <i></i> 反洗钱反欺诈
                            </div>
                            <New numbers={numbers}></New>
                            <div className="vice-header2">
                                <i></i> 反欺诈公告
                            </div>
                            <div className="reveal-lists">
                            根据2016年银监会发布《网络借贷信息中介机构业务活动管理暂行办法》（银监会令[2016]1号）的相关监管要求，上海拙赢金融信息服务有限公司已制定了一套完备的反欺诈相关制度，专门成立反欺诈监察部门执行相关措施，实时监控本平台可能存在的欺诈行为，从而最大程度地降低平台面临欺诈行为可能带来的风险。
                            </div>
                            <div className="reveal-lists">
                            针对反欺诈部门的检测，对嫌疑用户采取不同的处理方式，现公示如下：
                            </div>
                            <div className="reveal-lists reveal-lists2">
                                <Row>
                                    <Col span={4}>用户名	                 	                 	                  	                  </Col>
                                    <Col span={5}>平台身份信息</Col>
                                    <Col span={5}>联系方式</Col>
                                    <Col span={5}>欺诈事由</Col>
                                    <Col span={5}>平台处理结果</Col>
                                </Row>
                                <Row>
                                    <Col span={4}>无</Col>
                                    <Col span={5}>无</Col>
                                    <Col span={5}>无</Col>
                                    <Col span={5}>无</Col>
                                    <Col span={5}>无</Col>
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
export default Evaluate;