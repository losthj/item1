import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
const { Row, Col } = Layout


class Disclosure extends Component {
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
                        <Leftme ></Leftme>
                    </div>
                    <div className="main-r jy-fl">
                        <div className="main-rp">
                            <div className="vice-head">工商信息</div>
                            <div className="organize-con">
                            <Row>
                                <Col span={4}>公司全称</Col>
                                <Col span={9}>上海拙赢金融信息服务有限公司</Col>
                                <Col span={4}>统一社会信用代码</Col>
                                <Col span={7}>91310112MA1GB01500</Col>
                            </Row>
                            <Row>
                                <Col span={4}>公司简称</Col>
                                <Col span={9}>拙赢金服</Col>
                                <Col span={4}>类型</Col>
                                <Col span={7}>有限责任公司</Col>
                            </Row>
                            <Row>
                                <Col span={4}>法定代表人</Col>
                                <Col span={9}>眭小龙</Col>
                                <Col span={4}>经营状态</Col>
                                <Col span={7}>开业</Col>
                            </Row>
                            <Row>
                                <Col span={4}>注册资本</Col>
                                <Col span={9}>5000.000000万人民币</Col>
                                <Col span={4}>实缴注册资本</Col>
                                <Col span={7}>2190.000000万人民币</Col>
                            </Row>
                            <Row>
                                <Col span={4}>成立日期</Col>
                                <Col span={9}>2015年10月12日</Col>
                                <Col span={4}>经营期限</Col>
                                <Col span={7}>2015年10月12日至2025年10月11日</Col>
                            </Row>
                            <Row>
                                <Col span={4}>登记机关</Col>
                                <Col span={9}>闵行区市场监督管理局</Col>
                                <Col span={4}>核准日期</Col>
                                <Col span={7}>2015年10月12日</Col>
                            </Row>
                            <Row>
                                <Col span={4}>登记状态</Col>
                                <Col span={9}>存续（在营、开业、在册）</Col>
                                <Col span={4}>注册地址</Col>
                                <Col span={7} className="line1">上海市闵行区元江路5500号第1幢E4764室</Col>
                            </Row>
                            <Row>
                                <Col span={4}>主要人员信息</Col>
                                <Col span={9} className="line1">眭小龙(执行董事)、黄兴中(技术总监)、<br />  杨侃贇(实际控制人、监事)、任黎雅(财<br /> 务负责人)、谭奇龙(风控负责人)、刘胜<br /> 男(合规负责人)、董军华(稽核负责人)</Col>
                                <Col span={4}>经营地址</Col>
                                <Col span={7} className="line1">上海市闵行区吴中路1799号万象城V1栋1层101室</Col>
                            </Row>
                          
                            </div>
                            <div className="organize-con">
                            <Row>
                                <Col span={4}>经营范围</Col>
                                <Col span={10} className="line2">
                                金融信息服务（除金融业务）、会务服务、展示展览服务，投资管理，电子商务（不得从事增值电信、金融业务），从事网络科技专业领域内的技术开发、技术转让、技术咨询、技术服务，计算机系统集成，计算机、软件及辅助设备的销售，自有设备租赁，企业管理咨询、投资咨询、商务咨询、市场信息咨询与调查（不得从事社会调查、社会调研、民意调查、民意测验）（咨询类项目除经纪），设计、制作各类广告，利用自有媒体发布广告，企业形象策划，文化艺术交流策划。 【依法须经批准的项目，经相关部门批准后方可开展经营活动】
                                </Col>
                                <Col span={10} className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/disclosure/license.jpg" alt=""/>
                                </Col>
                            </Row>   
                            </div>
                            <div className="organize-link">
                            工商登记查询地址：<a href="http://www.gsxt.gov.cn/index.html" target="_blank"  rel="noopener noreferrer">http://www.gsxt.gov.cn/index.html</a>
                            </div>

                            <Seal></Seal>
                           
                        </div>
                        
                
                    </div>
                </div>

            </div>
        </div>
        )
    }
}


export default Disclosure;
