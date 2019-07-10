import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Branch extends Component {
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
                            <div className="vice-head">分支机构工商信息</div>
                            <div className="reveal-lists reveal-lists2">
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构全称</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构所在地</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构成立时间</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构负责人</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构联系电话</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构投诉电话</Col>
                                    <Col span={12}>无</Col>
                                </Row>
                                <Row >
                                    <Col span={12} className="jy-gary">分支机构员工人数</Col>
                                    <Col span={12}>无</Col>
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
export default Branch;