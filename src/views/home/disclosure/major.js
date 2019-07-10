import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Major extends Component {
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
                            <div className="vice-head">重大事件信息</div>
                            <div className="vice-header2">
                                <i></i> 截至时间2018-12-31
                            </div>
                            <div className="reveal-lists reveal-lists2 major-list">
                                <Row >
                                    <Col span={20}> <div className="jy-text-c">重大事项</div> </Col>
                                    <Col span={4}>状态</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">公司减资、合并、分立、解散或申请破产</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">公司依法进入破产程序</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">公司被责令停业、整顿、关闭</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">公司涉及重大诉讼、仲裁或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">公司主要或者全部业务陷入停顿</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}><div className="major-text">存在欺诈、损害出借人利益等影响网贷机构经营活动的重大事项</div> </Col>
                                    <Col span={4}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={20}>
                                    <div className="major-text major-text1">
                                        公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，
                                        或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施
                                    </div>
                                    </Col>
                                    <Col span={4}>无</Col>
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
export default Major;