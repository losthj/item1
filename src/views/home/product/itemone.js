import React, { Component } from 'react';
import '@assets/home/home.scss'
import '@assets/home/about.css';
import { Layout } from 'zent';

const { Row, Col } = Layout

class Itemone extends Component  {
    render() {
      return (
        <div>
            <div className="container">
            <div className="product-inver jy-pos-r">
                <div className="product-invers">
                    <span className="invest-tvice">
                        <label className="invest-title"> <span className="invest-titleImg"></span>企链宝 </label>
                        产品性质：企业中长期信用借款
                    </span>
                </div>
                <div className="product-ml">
                    <Row>
                        <Col span={7} offset="1">
                            <div>额度范围（元）</div>
                            <span>100,000 - 1,000,000</span>
                        </Col>
                        <Col span={8}>
                        <ul>
                            <li>约定月息利率：1.2%-2%</li>
                            <li>借款期限： 1-6个月</li>
                            <li>还款方式： 先息后本</li>
                            <li>服务费用：据借款项目的风险等级收取，详情查阅资费说明</li>
                        </ul>
                        </Col>
                        <Col span={8}>
                        <a href="https://www.jylc168.com/access/company_reg" className="product-apply">申请贷款</a>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="product-content jy-border">
                        <div className="product-head">
                            产品特点
                        </div>
                        <div className="product-easy3">
                            <ul>
                                <li><i></i>针对核心企业上下游账期特性设定的借款产品</li>
                                <li><i></i>用于满足企业上下游资金周转频次</li>
                                <li><i></i>核心企业担保，纯信用贷款</li>
                            </ul>
                        </div>
                        <div className="product-head jy-mt-30">
                            准入条件
                        </div>
                        <div className="product-easy3">
                            <ul>
                                <li><i></i>注册满5年（含）以上的有限责任公司及股份有限责任公司</li>
                                <li><i></i>申请主体需为核心企业</li>
                                <li><i></i>核心企业及担保人信用记录良好</li>
                                <li><i></i>核心企业年销售额2亿以上</li>
                                <li><i></i> 注册及经营所在地:长三角地区</li>
                            </ul>
                        </div>
                        <div className="product-head jy-mt-30">
                            申请材料
                        </div>
                        <div className="product-easy3">
                            <ul>
                                <li><i></i>企业及所在行业介绍</li>
                                <li><i></i>企业及实控人征信</li>
                                <li><i></i>最近12个月银行流水</li>
                                <li><i></i>连续三年的审计报告</li>
                                <li><i></i> 运营资质证明</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
      );
    }
  }
  export default Itemone;
  