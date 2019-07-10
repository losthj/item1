import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/home/home.scss'
import '@assets/home/about.css';

class Products extends Component  {
    render() {
      return (
        <div>
            <div className="bd-wrap">
                <div className="container"></div>
            </div>
            <div className="container">
            <div className="product_list clearfix">
                  <ul>
                      <li>
                          <h4>企信宝</h4>
                          <div className="jy-text-c jy-fz-14">产品性质：企业短期信用借款</div>
                          <div className="jy-text-c jy-mt-30">
                              <img src="https://img.jylc168.com/Pc/home/about/product_3.png" alt="" />
                          </div>
                          <div className="product-wrapper">
                              <Link to="/itemone">申 请</Link>
                          </div>
                      </li>
                      <li>
                          <div className="jy-text-c">
                              <img src="https://img.jylc168.com/Pc/home/about/expect1.jpg" alt="" />
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="product-content">
                  <div className="product-head"><b>轻松借款</b> 资金问题不再愁，上传资料及时放款轻松实现化困境为机遇</div>
                  <div className="product-easy clearfix">
                      <ul>
                          <li>
                              <img src="https://img.jylc168.com/Pc/home/about/light_1.png" className="jy-fl" alt="" />
                              <label className="jy-fl">
                                  <span>
                                      定制服务
                                  </span>
                                  <p >根据您的企业规模<br /> 量身定制融资服务</p>
                              </label>
                          </li>
                          <li>
                              <img src="https://img.jylc168.com/Pc/home/about/light_2.png" className="jy-fl" alt="" />
                              <label className="jy-fl">
                                  <span >
                                      担保灵活
                                  </span>
                                  <p >支持多种担保模式 <br /> 让企业有更多选择</p>
                              </label>
                          </li>
                          <li>
                              <img src="https://img.jylc168.com/Pc/home/about/light_3.png" className="jy-fl" alt="" />
                              <label className="jy-fl">
                                  <span>
                                      流程简单
                                  </span>
                                  <p >只需提供企业信息 <br /> 业务经理全程服务</p>
                              </label>
                          </li>
                          <li>
                              <img src="https://img.jylc168.com/Pc/home/about/light_4.png" className="jy-fl" alt="" />
                              <label className="jy-fl">
                                  <span>
                                      及时放款
                                  </span>
                                  <p >拒绝拖延高效放款 <br /> 第一时间注入血液</p>
                              </label>
                          </li>
                      </ul>
                    </div>
                    <div className="product-head">
                        <b>申请流程</b>
                    </div>
                    <div className="product-easy1 clearfix">
                        <ul>
                            <li>
                                <div className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/light_5.png"   alt=""/>
                                </div>
                                <h5 >提交申请</h5>
                                <div >填写您的企业基本信息</div>
                            </li>
                            <li>
                                <div className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/light_6.png"   alt=""/>
                                </div>
                                <h5 >业务经理沟通</h5>
                                <div >企业专属业务经理与您沟通</div>
                            </li>
                            <li>
                                <div className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/light_7.png"  alt="" />
                                </div>
                                <h5 >通过风控审核</h5>
                                <div >根据资料做最后风险评估</div>
                            </li>
                            <li>
                                <div className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/light_8.png"  alt="" />
                                </div>
                                <h5 >借款成功</h5>
                                <div >通知企业联系人，进行放款</div>
                            </li>
                        </ul>
                        <img src="https://img.jylc168.com/Pc/home/about/arrow.png" className="jy-pos-a product-icon1"  alt=""/>
                        <img src="https://img.jylc168.com/Pc/home/about/arrow.png" className="jy-pos-a product-icon2"  alt="" />
                        <img src="https://img.jylc168.com/Pc/home/about/arrow.png" className="jy-pos-a product-icon3"  alt="" />

                    </div>
                    <div className="product-head">
                        <b>为什么选择囧羊理财</b>
                    </div>
                    <div className="product-easy2 clearfix">
                            <ul>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_9.png" alt="" />
                                    </div>
                                    <h5>多年专业服务中小微企业经验</h5>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_10.png" alt="" />
                                    </div>
                                    <h5>高效审核、标准审批、高效决策</h5>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_11.png" alt="" />
                                    </div>
                                    <h5>全程客服指导</h5>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_12.png" alt="" />
                                    </div>
                                    <h5>全程线上操作 便捷、流畅的借款体验</h5>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_13.png" alt="" />
                                    </div>
                                    <h5>额度灵活 产品丰富 满足不同借款需求</h5>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/light_14.png" alt="" />
                                    </div>
                                    <h5>银行级信息防护机制 保护用户隐私</h5>
                                </li>

                            </ul>
                        </div>
              </div>
            </div>
        </div>
      );
    }
  }
  export default Products;
  