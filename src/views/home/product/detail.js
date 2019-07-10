import React, { Component } from 'react';
import '@assets/home/home.scss'
import '@assets/home/about.css';
import Detailinfo from '@components/common/detailinfo'
import Investlist from '@components/common/investlist'
import Detailcheck from '@components/common/detailcheck'
import { Layout, Checkbox, Tabs, Dialog,previewImage, Button  } from 'zent';
const TabPanel = Tabs.TabPanel;
const { Row, Col } = Layout;


const imgArr = [
    'https://img.jylc168.com/Upload/Project/2018-08-27/0d6b5b83aa1bc6ebd.jpg',
    'https://img.jylc168.com/Upload/Project/2018-08-27/4b405b83aa1bcefd9.jpg',
    'https://img.jylc168.com/Upload/Project/2019-03-20/8c085c9208775fa83.png',
    'https://img.jylc168.com/Upload/Project/2019-03-20/60b05c920877686ed.png'
  ];
  

class Detail extends Component {
  constructor(props){
      super(props);
      this.state = {
          loginState: true,
          project: [1,3,2,3],
          activeId: '1',
          checked: false
      }
  }


state = { visible: false }
 triggerDialog = visible => {
   this.setState({ visible });
 };

 handleChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }


  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }

  handlePreview = (e) => {
    previewImage({
      images: imgArr,
      index: imgArr.indexOf(e.target.src),
      parentComponent: this,
      scaleRatio: 3
    });
  }
  render() {
    const outterWidth ={
          width:"90%"
      }
      const { checked } = this.state
    return (
      <div>
          <div className="container ">
          <div className="clearfix">
            <div className="jy-fl invest-1">
                <div className="invest-t">
                    <span className="invest-tvice">
                    <label className="invest-title">
                    <span className="invest-titleImg"></span>乐羊系列 </label>企信宝309期
                    </span>
                    <span className="invest-rvice">出借人条件：建议风险承受能力“稳健型”及以上</span>
                </div>
                <div className="invest-m">
                    <Row>
                        <Col span={8}>
                            <div className="total-rate">9.5%</div>
                            <div>协议约定借款年化利率</div>
                        </Col>
                        <Col span={8}>
                            <div><b>500000.00</b>元</div>
                            <div>项目金额</div>
                        </Col>
                        <Col span={8}>
                            <div><b>180</b>天</div>
                            <div>项目期限</div>
                        </Col>
                    </Row>
                </div >
                <div className="invest-b">
                    <Row>
                        <Col span={20} className="clearfix">
                            <div className="jy-fl"><strong>出借进度：</strong></div>
                            <div className="progress-outter">
                                <img src="https://img.jylc168.com/Asset/Home/common2/img/product/icon2.png" alt="" />
                                <div className="progress-inner" style={outterWidth}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <span className="jy-gary">已售</span>  90%
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}><strong>剩余可借：</strong>  4890000元</Col>
                        <Col span={12}><strong>发布时间：</strong>  2018-12-12   13：00:00</Col>
                    </Row>
                    <Row>
                        <Col span={12}><strong>起借金额：</strong>  1000元</Col>
                        <Col span={12}><strong>募集期至：</strong>  2018-12-12   00：00:00</Col>
                    </Row>
                    <Row>
                        <Col span={12}><strong>收益方式：</strong>  先息后本</Col>
                        <Col span={12}><strong>起息方式：</strong>  满标放款后计息</Col>
                    </Row>
                </div>
                
            </div>
             <div className="jy-fl invest-r">
               <div className="invest-r-con">
                    <Row>
                        <Col span={12}>投标倒计时</Col>
                        <Col span={12}>13天09时18分26秒</Col>
                    </Row>
                    <Row>
                        <Col span={24}> 可用余额 登录后可见  </Col>
                        {/* <Col span={12}>可用余额 </Col>
                        <Col span={12}>10000元</Col> */}
                    </Row>
                    <div className="clearfix">
                        <div className="invest-btn-add jy-fl">-</div>
                        <div className="invest-input jy-fl">
                            <input type="hidden"  />
                            <input type="text" placeholder="请输入投资金额" />
                            <div className="invest-input-con jy-tect-c">
                                预计收益<span className="jy-fz-14 ui-text-red">5.49</span>元 
                            </div>
                            </div>
                            <div className="invest-btn-minus invest-btn-minus1 jy-fl">+</div>
                            <a href="##" className="invest-btn-full" >全额</a>
                    </div>
                    <div className="invest-r-text">
                        <p> 平台管理费率：免费 </p>
                        <p>风险提示：利率披露不构成对收益的承诺</p>
                    </div>
                    <Button  className="invest-btns"  onClick={() => this.triggerDialog(true)} >出借</Button>
                  
                    <div className="invest-vertical">
                        <Checkbox checked={checked} onChange={this.handleChange}>我已阅读并同意囧羊理财</Checkbox>
                        <a href="##"className="jy-text-golden">《通用三方借款协议》</a>
                
                    </div> 

                    </div>
                </div>
                 {/* <div className="jy-fl invest-r invest-r-end">
                    <div className="invest-r-con">
                        <div className="jy-text-c">
                            <div >满标耗时</div>
                            <div>
                                <span className="dd">00</span>天
                                <span className="hh">00</span>时
                                <span className="mm">08</span>分
                                <span className="ss">40</span>秒
                            </div>
                        </div>
                        <div className="invest-end-list">
                            <ul>
                                <li><span>120</span>人参与本项目借资    </li>
                                <li>为用户赚取<span>5833.25</span>元收益</li>
                                <li>企业正常还款中</li>
                            </ul>
                        </div>
                          <a className="invest-btns invest-btns-end" href="##">已满标</a>
                    </div>
                </div> */}

          </div>
            <div className="m-detial">
            <Tabs activeId={this.state.activeId} onChange={this.onTabChange}>
                    <TabPanel tab="借款人基本信息" id="1">
                        <div>
                            <div className="detail-head">法定代表人信息</div>
                            <div className="detail-font">
                                <Row>
                                    <Col span={8}><label> 姓名：</label>刘**</Col>
                                    <Col span={8}><label> 年龄：</label>30岁</Col>
                                    <Col span={8}><label> 证件号：</label>372***********5628</Col>
                                </Row>
                            </div>
                            <div className="detail-head">借款企业信息</div>
                            <div className="detail-font">
                                <Row>
                                    <Col span={8}><label> 企业名称：</label>上海**物流有限公司</Col>
                                    <Col span={8}><label> 借款人主体性质：</label>企业</Col>
                                    <Col span={8}><label> 所属行业：</label>交通运输、仓储和邮政业</Col>
                                </Row>
                                <Row>
                                    <Col span={8}><label> 注册资本：</label>100万元</Col>
                                    <Col span={8}><label> 注册地址：</label>厦门市****</Col>
                                    <Col span={8}><label> 经营地址：</label>福建省****</Col>
                                </Row>
                                <Row>
                                    <Col span={8}><label> 成立时间：</label>2010-04-21</Col>
                                    <Col span={8}><label> 经营期限：</label>8年8个月</Col>
                                </Row>
                            </div>
                            <div className="detail-head">企业收入负责信息</div>
                            <div className="detail-font">
                                <Row>
                                    <Col span={24}><label> 借款企业营业收入：</label>月均应收640万</Col>
                                </Row>
                                <Row>
                                    <Col span={24}><label> 借款企业负责总额：</label>银行借款480万</Col>
                                </Row>
                                <Row>
                                    <Col span={24}><label> 截止借款前6个月内借款人征信报告中的逾期情况：</label>审查其完整征信报告，确认符合平台要求，并且借款前6个月无不良信息</Col>
                                </Row>
                                <Row>
                                    <Col span={24}><label> 借款人在其他网络借款平台的借款情况：</label>无</Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tab="项目基本信息" id="2" >
                        <div>
                        <div className="detail-font1">
                            <Row>
                                <Col span={2}>项目名称</Col>
                                <Col span={22}>上海**汽车租赁有限公司</Col>
                            </Row>
                            <Row>
                                <Col span={2}>项目介绍</Col>
                                <Col span={22}>餐厅以时下最流行的创意菜未主线，店内采用的食材新鲜，用料讲究，精心烹调，口味丰富，有特色砂锅系列套餐，干过系列，烩饭芝士考咖喱饭，蛋包饭，特色炒饭，意大利面，精美小炒，小 海鲜，特色家常菜为主，店面精致而又电压，经营状态：堂吃，外卖和外带，已经打造套完整的外卖体系，满足不同客人的另类要求，十年树木，百年树人千年树品牌，以客为尊，全新打造上海土品牌新纪元。
                                </Col>
                            </Row>
                            <Row>
                                <Col span={2}>借款全额</Col>
                                <Col span={22}>100000.00元 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>借款期限</Col>
                                <Col span={22}>6个月 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>借款用途 </Col>
                                <Col span={22}>扩大经营 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>还款方式</Col>
                                <Col span={22}>等额本息，每月偿还700000*（10%/12(1+10%/12)^N(1+10%/12)^N-1=125673.34元 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>还款来源</Col>
                                <Col span={22}>公司自有资金 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>协议约定借 款年化利率</Col>
                                <Col span={22}>10%/年 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>起息时间</Col>
                                <Col span={22}>项目满标当日开始计息 </Col>
                            </Row>
                        </div>
                        <div className="detail-head">项目保障措施</div>
                        <div className="detail-font">
                            <Row>
                                <Col span={24}> 平台经过对项目的严格审核，在确保项目借款企业的借款需求真实性的同时，一方面谨慎评估其还款能力和担保人的担保力，另一方面通过征信</Col>
                            </Row>
                        </div>
                        <div className="detail-head">风控保障措施</div>
                        <div className="detail-font1">
                            <Row>
                                <Col span={2}>项目审核</Col>
                                <Col span={22}>严格执行准入标准，确保借款企业资质良好且借款用途真实有效。 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>财务审核</Col>
                                <Col span={22}>由专业风控团队审核公司财务数据，去报经营数据真实有效。 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>尽职调查</Col>
                                <Col span={22}>穿透现场经营情况、财务数据核验、实控人及股东面访等。 </Col>
                            </Row>
                        </div>
                        <div className="detail-head">还款保障措施-担保方信息</div>
                        <div className="detail-font1">
                            <Row>
                                <Col span={2}>担保人1</Col>
                                <Col span={3}><label>姓名：</label>洪**</Col>
                                <Col span={19}><label>证件号：</label>350***********4939 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>担保人2</Col>
                                <Col span={3}><label>姓名：</label>洪**</Col>
                                <Col span={19}><label>证件号：</label>350***********4939 </Col>
                            </Row>
                            <Row>
                                <Col span={2}>担保人3</Col>
                                <Col span={3}><label>姓名：</label>洪**</Col>
                                <Col span={19}><label>证件号：</label>350***********4939 </Col>
                            </Row>
                        </div>
                        <div className="detail-head">资金及法律法规保障</div>
                        <div className="detail-font">
                            <Row>
                                <Col span={24}> 资金流转完全通过上海华瑞银行存管账户，平台不触及用户交易资金；同时由专业法务起草并审核所有合同，充分保障投资人权益。</Col>
                            </Row>
                        </div>
                        <div className="detail-head">验证信息</div>
                        <div className="detail-font1">
                            <Row>
                                <Col span={3}>担保人信息</Col>
                                <Col span={7}>央行个人信用报告 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>身份证 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>银行卡信息 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                            </Row>
                            <Row>
                            <Col span={3}>企业信息</Col>
                                <Col span={7}>银行流水 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>企业开票   <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>企业征信 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                            </Row>
                            <Row className="zent-row1">
                                <Col span={7} offset={3}>经营状况 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>企业开票   <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>企业征信 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                            </Row>
                            <Row className="zent-row1">
                                <Col span={7} offset={3}>经营地址 <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                                <Col span={7}>注册资本    <span>验证通过</span> <img src="https://img.jylc168.com/Asset/Home/common2/img/index/star-2.png" alt=""/> </Col>
                            </Row>
                        </div>
                        <div className="detail-head">资料信息</div>
                        <div className="detail-imgs">
                            <div className="image-preview-demo">
                                {
                                imgArr.map((image, index) => {
                                    return (<img src={image} key={index} onClick={this.handlePreview} alt="" width="100" height="100" />);
                                })
                                }
                            </div>
                        </div>
                        <div className="detail-head">贷后跟踪信息</div>
                        <div className="detail-imgs">
                            <div className="image-preview-demo">
                                {
                                imgArr.map((image, index) => {
                                    return (<img src={image} key={index} onClick={this.handlePreview} alt="" width="100" height="100" />);
                                })
                                }
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel tab="项目风险评估" id='3' >
                        <div>
                            <div className="detail-head">项目评估风险</div>
                            <div className="detail-font1">
                                <Row>
                                    <Col span={3}>财务状况</Col>
                                    <Col span={21}>借款企业年收入XXX元（抓取流水总计），流水波动性为XXX(抓取流水波动性平均值)，财务状况良好。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>征信情况</Col>
                                    <Col span={21}>借款企业存在负债X笔，共计XXX元（抓取企业负债笔数和负债余额总计），无异常情况。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>诉讼情况</Col>
                                    <Col span={21}>借款企业诉讼情况无异常。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>现场尽职调查</Col>
                                    <Col span={21}>现场尽职调查过程中公司营运有序，未发现异常情况。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>项目评估结果</Col>
                                    <Col span={21}>项目评级为X(抓取评级结果)，公司成立X年（抓取成立年限），收入稳定且实控人拥有一定的资产实力，收入规模可以覆盖借款。 </Col>
                                </Row>
                            </div>
                            <div className="detail-head">可能产生的风险结果</div>
                            <div className="detail-font1">
                                <Row>
                                    <Col span={3}>政策风险</Col>
                                    <Col span={21}>因国家宏观政策和相关法律法规发生变化，可能影响借款人经营、抵押品价值或担保人担保能力。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>信用风险</Col>
                                    <Col span={21}>平台不对本金和收益提供任何保证或承诺。在发生最不利情况下（可能但并不一定发生），可能不利于用户实现项目的约定收益甚至本金遭受损失。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>市场风险</Col>
                                    <Col span={21}>由于市场供求关系、产品质量变化等不确定的未来市场变化，可能引发借款人的市场性风险，可能不利于用户实现项目的约定收益甚至本金遭受损失。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>信息传递风险</Col>
                                    <Col span={21}>平台将按协议约定进行信息披露，用户应充分关注并及时主动查询交易信息，如未及时查询，或由于通讯故障、系统故障以及其他不可抗力等因素的影响使得无法及时了解交易信息，由此产生责任和风险应由用户承担。 </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>不可抗力及 意外事件风险</Col>
                                    <Col span={21}>包括但不限于自然灾害、金融市场危机、战争、黑客攻击、病毒感染等不能预见、不能避免、不能克服的不可抗力事件，对于由于不可抗力及意外事件风险导致的任何损失，客户须自行承担。</Col>
                                </Row>
                                <Row>
                                    <Col span={3}>特别提示</Col>
                                    <Col span={21}>本风险提示内容不能穷尽全部风险及市场的全部情形。 </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tab="已撮合未到期项目有关信息" id='4' >
                        <div>
                            <Detailinfo></Detailinfo>
                        </div>
                    </TabPanel>
                    <TabPanel tab="出借记录" id='5' >
                        <div>
                            {/* <div className="detail-icons"></div>   */}
                            <Investlist></Investlist>
                        </div>
                    </TabPanel>
                </Tabs>

                <div className="detail-tip">
                    <div>
                        <strong>平台免责声明：</strong>
                    </div>
                    <p>囧羊理财作为交易服务平台进行信息发布，不对任何出借人及/或任何交易提供任何担保，无论是明示、默示或法定的。囧羊理财平台提供的各种信息及资料仅供参考，<br />出借人应依其独立判断做出决策。出借人据此进行出借交易的，产生的出借风险由出借人自行承担，囧羊理财不承担任何责任。</p>
                    <p>网贷有风险 出借需谨慎</p>
                </div>
            </div>
    </div>


    <Dialog visible={this.state.visible} onClose={() => this.triggerDialog(false)} maskClosable={false}  className="jy-mask">
          <Detailcheck></Detailcheck>
    </Dialog>

    </div>
      

      
    );
  }
}



export default Detail;
