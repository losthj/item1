import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Charge extends Component {
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
                            <div className="vice-head">收费标准</div>
                            <div className="vice-header2">
                                <i></i> 出借人
                            </div>
                            <div className="reveal-lists reveal-lists2">
                                <Row >
                                    <Col span={8} >业务类别</Col>
                                    <Col span={16}>收费标准</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">充值</Col>
                                    <Col span={16} className="jy-gary">即时到账，免费</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">出借</Col>
                                    <Col span={16} className="jy-gary">免费</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">取现</Col>
                                    <Col span={16} className="jy-gary">个人客户收取人民币2元/笔手续费。(手续费由存管机构收取)</Col>
                                </Row>
                            </div>
                            <div className="vice-header2">
                                <i></i> 借款人
                            </div>
                            <div className="reveal-lists reveal-lists2">
                                <Row >
                                    <Col span={8} >业务类别</Col>
                                    <Col span={16}>收费标准</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">充值</Col>
                                    <Col span={16} className="jy-gary">即时到账，免费</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">居间费率</Col>
                                    <Col span={16} className="jy-gary">实际以合同为准</Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">取现</Col>
                                    <Col span={16} className="jy-gary">
                                    <p className="charge-text">
                                    企业用户收取提现金额的0.003%手续费，单笔最高200元人民币。<br />
                                     (手续费由存管机构收取)
                                    </p>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col span={8} className="jy-gary">综合成本</Col>
                                    <Col span={16} className="jy-gary">不超过年化利率36%</Col>
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
export default Charge;