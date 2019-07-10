import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Layout } from 'zent';
import { Tabs } from 'zent';
import { Progress } from 'zent';
const { Row, Col } = Layout
const TabPanel = Tabs.TabPanel;

// var bookArr=[
//     {
//         siteCont:"￥935,106,900.00元",
//         siteName:"累计交易总额",
//         siteImg:"https://img.jylc168.com/Pc/home/disclosure/operate1.jpg"
//     },
//     {
//         siteCont:"68743笔",
//         siteName:"累计交易总笔数",
//         siteImg:"https://img.jylc168.com/Pc/home/disclosure/operate2.jpg"
//     },
//     {
//         siteCont:"7108人",
//         siteName:"累计出借人总数",
//         siteImg:"https://img.jylc168.com/Pc/home/disclosure/operate3.jpg"
//     },
//     {
//         siteCont:"695人",
//         siteName:"累计借款人总数",
//         siteImg:"https://img.jylc168.com/Pc/home/disclosure/operate4.jpg"
//     }
// ]
const bgColor="#ffd630";
const normalColor="#fbb301"

class Operate extends Component {
    state = {
        activeId: '1'
      }
    
      onTabChange = (id) => {
        this.setState({
          activeId: id
        });
      }

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
                            <div className="vice-head">经营数据</div>
                            <div className="operate-line"></div>
                            <div className="vice-header2">
                                <i></i> 累积交易数据
                            </div>
                            <div className="reveal-lists reveal-operate">
                                 <Row>
                                    <Col span={6}>
                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate1.jpg" alt=""/>
                                    </Col>
                                    <Col span={6}>
                                        <div className="jy-mt">
                                        <p><b>￥935,106,900.00</b> 元</p> 
                                        <p>累计交易总额</p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                     <img src="https://img.jylc168.com/Pc/home/disclosure/operate2.jpg" alt=""/>
                                    </Col>
                                    <Col span={6}>
                                    <div className="jy-mt">
                                        <p><b>68743</b> 笔</p> 
                                        <p>累计交易总笔数</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate3.jpg" alt=""/>
                                    </Col>
                                    <Col span={6}>
                                        <div className="jy-mt">
                                        <p><b>7108</b> 人</p> 
                                        <p>累计出借人总数</p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                     <img src="https://img.jylc168.com/Pc/home/disclosure/operate4.jpg" alt=""/>
                                    </Col>
                                    <Col span={6}>
                                    <div className="jy-mt">
                                        <p><b>695</b> 人</p> 
                                        <p>累计借款人总数</p>
                                        </div>
                                    </Col>
                                </Row> 
                            </div>
                            <div className="vice-header2">
                                <i></i> 项目累计逾期数据
                            </div>
                            <div className="reveal-lists reveal-operate1">
                                <Row>
                                    <Col span={6}>
                                        <div className="jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/operate-1.png" alt=""/>
                                        </div>
                                        <div className="operate-cont">
                                        <span>4,150,000</span>元
                                        <p>累计逾期总额</p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                    <div className="jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/operate-2.png" alt=""/>
                                        </div>
                                        <div className="operate-cont">
                                        <span>503875</span>元
                                        <p>累计代偿总额</p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                    <div className="jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/operate-3.png" alt=""/>
                                        </div>
                                        <div className="operate-cont">
                                        <span>9</span>笔 
                                        <p>累计逾期总笔数</p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                    <div className="jy-text-c">
                                            <img src="https://img.jylc168.com/Pc/home/disclosure/operate-4.png" alt=""/>
                                        </div>
                                        <div className="operate-cont">
                                        <span>1</span>笔
                                        <p>累计代偿总笔数</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="operate-tab">
                            <div className="operate-tabs-line"></div>
                            <Tabs activeId={this.state.activeId} onChange={this.onTabChange} >
                                    <TabPanel tab="2018年12月" id="1" >
                                    <div>
                                        <div className="vice-header2">
                                            <i></i> 当期累计借贷数据
                                        </div>
                                        <div className="operate-list clearfix">
                                            <ul>
                                               <li>
                                                    <span>950104900.00</span>元
                                                    <p>当前累积交易总额</p>
                                               </li>
                                               <li>
                                                    <span>70172</span>笔
                                                    <p>当前累积交易总笔数</p>
                                               </li>
                                               <li>
                                                    <span>7132</span>人
                                                    <p>当前累计出借人数量</p>
                                               </li>
                                               <li>
                                                    <span>701</span>人
                                                    <p>当前累计借款人数量</p>
                                               </li>
                                            </ul> 
                                        </div>
                                        <div className="vice-header2">
                                            <i></i> 项目累计逾期数据
                                        </div>
                                        <div className="reveal-lists reveal-operate2">
                                            <Row>
                                                <Col span={6}>
                                                    <div className="jy-text-c">
                                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate-9.png" alt=""/>
                                                    </div>
                                                    <div className="operate-cont">
                                                    <span>￥30,344,800.00</span>元
                                                    <p>当期交易总额</p>
                                                    </div>
                                                </Col>
                                                <Col span={6}>
                                                <div className="jy-text-c">
                                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate-10.png" alt=""/>
                                                    </div>
                                                    <div className="operate-cont">
                                                    <span>2292</span>笔
                                                    <p>当期交易总笔数</p>
                                                    </div>
                                                </Col>
                                                <Col span={6}>
                                                <div className="jy-text-c">
                                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate-11.png" alt=""/>
                                                    </div>
                                                    <div className="operate-cont">
                                                    <span>706</span>人 
                                                    <p>当期出借人数量</p>
                                                    </div>
                                                </Col>
                                                <Col span={6}>
                                                <div className="jy-text-c">
                                                        <img src="https://img.jylc168.com/Pc/home/disclosure/operate-12.png" alt=""/>
                                                    </div>
                                                    <div className="operate-cont">
                                                    <span>38</span>人
                                                    <p>当期借款人数量</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="vice-header2">
                                            <i></i> 借贷余额数据
                                        </div>
                                        <div className="reveal-lists reveal-loans">
                                            <Col span={12}>
                                                <div className="operate-total">
                                                    <div >
                                                        <span>￥102,195,130.26</span>元
                                                        <p>当期借款人数量</p>
                                                    </div>
                                                    <div>
                                                        <span>216</span>笔
                                                        <p>借贷余额笔数</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={10} offset={2}>
                                                <dl>
                                                    <dd>
                                                        <i>●</i> 逾期金额（元）
                                                        <label>100000元</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 逾期笔数（笔）
                                                        <label>2笔</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 逾期90天以上金额（元）
                                                        <label>0元</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 逾期90天以上笔数（笔）
                                                        <label>0元</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 逾期后还款率
                                                        <label>50%</label>
                                                    </dd>
                                                </dl>
                                            </Col>
                                        </div>
                                        <div className="vice-header2">
                                            <i></i> 其他数据
                                        </div>
                                        <div className="reveal-lists reveal-loans reveal-loans1">
                                        <Col span={10}>
                                                <dl>
                                                    <dd>
                                                        <i>●</i> 关联关系借款余额（元）   
                                                        <label>0元</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 关联关系借款笔数（笔）
                                                        <label>0笔</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 累计代偿金额（元）
                                                        <label>0元</label>
                                                    </dd>
                                                    <dd>
                                                        <i>●</i> 累计代偿笔数（笔）
                                                        <label>0元</label>
                                                    </dd>
                                                </dl>
                                            </Col>
                                            <Col span={7}>
                                            <h5>前十大借款人待还占比</h5>
                                            <Progress type="circle" bgColor={bgColor} normalColor={normalColor} width={190} percent={9.79} strokeWidth={40} />
                                            </Col>
                                            <Col span={7}>
                                            <h5>最大单一借款人待还占比</h5>
                                            <Progress type="circle" bgColor={bgColor} normalColor={normalColor} width={190} percent={0.98} strokeWidth={40} />
                                            </Col>
                                        </div>
                                        <div className="reveal-lists">
                                            数据统计截至2018-11-30
                                        </div>
                                    </div>
                                    </TabPanel>
                                    <TabPanel tab="2018年11月" id="2" >
                                    <div>选项二的内容</div>
                                    </TabPanel>
                                    <TabPanel tab="2018年10月" id='3' >
                                    <div>选项三的内容</div>
                                    </TabPanel>
                                    <TabPanel tab="2018年9月" id='4' >
                                    <div>选项si的内容</div>
                                    </TabPanel>
                                </Tabs>
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
export default Operate;