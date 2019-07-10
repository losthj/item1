import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';

class Risks extends Component {
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
                        <Leftme></Leftme>
                    </div>
                    <div className="main-r jy-fl">
                        <div className="main-rp">
                            <div className="vice-head">风险管理信息</div>
                            <div className="vice-header2">
                                <i></i> 资金存管银行
                            </div>
                            <div className="reveal-lists">
                                囧羊平台专设风险管理部，由风险总监领导，下设项目前期风控、项目后台风控、贷后风控等职位。团队人员由来自具有银行、融
                            资租赁、基金、证券以及互联网金融行业风控背景的专业化人才组成，在企业信用贷，个人车贷，供应链金融，保理等领域有丰富
                            的风控经验，能精准把控其中的风控关键点，极大的降低项目可能产生的坏账，逾期等风险事件的发生。
                                <div className="jy-mt-30 clearfix">
                                    <div className="jy-fl risks-mide">
                                        <h5 className="jy-text-gray jy-fz-14 jy-mt-15"> <i>•</i> 风险总监 </h5>
                                        <p> 主要负责风控制度、流程和项目进件标准制定、项目评估</p>
                                        <h5 className="jy-text-gray jy-fz-14 jy-mt-15"><i>•</i> 项目前期风控</h5>
                                        <p>主要负责对项目进件的前期评审，以及对评审通过的项目进行现场尽调</p>
                                        <h5 className="jy-text-gray jy-fz-14 jy-mt-15"><i>•</i> 项目后台风控</h5>
                                        <p> 主要负责项目企业的授信额度、评级和发标项目募集标的</p>
                                        <h5 className="jy-text-gray jy-fz-14 jy-mt-15"><i>•</i> 贷后风控</h5>
                                        <p>主要负责跟进借款企业和个人的贷后信息的更新合同保管，以及后续的还款， 催收，诉讼等事宜</p>
                                    </div>
                                    <div className="jy-fr">
                                            <div className="risks-icon risks-icon2"></div>
                                        </div>
                                </div>
                            </div>
                            <div className="vice-header2">
                                <i></i>  风险评估流程
                            </div>
                            <div className="reveal-lists">
                                <div className="risks-icon risks-icon1"></div>
                                <div className="risks-icons clearfix">
                                    <ul>
                                        <li>
                                            <div className="risks-txts">发布借款</div>
                                            <div className="risks-txt">
                                                <div className="risks-txt-line"></div>
                                                <dl>
                                                    <dt className="risk-yellow"><span className="risks-txt-icon risks-txt-icon1"></span>来自于业务拓展和合作渠道的信贷资产</dt>
                                                    <dd className="jy-text-gray">尽职调查</dd>
                                                    <dd className="jy-text-gray">信贷审查</dd>
                                                    <dd className="jy-text-gray">信贷审查及评分</dd>
                                                    <dd className="jy-text-gray">反欺诈核查</dd>
                                                    <dt className="risks-txt-mt1"><span className="risks-txt-icon risks-txt-icon1"></span>来自于核心供应链企业的信贷</dt>
                                                    <dd className="jy-text-gray">订单确认</dd>
                                                    <dd className="jy-text-gray">收货确认</dd>
                                                    <dd className="jy-text-gray">发票验真</dd>
                                                    <dt className="risks-txt-mt1"><span className="risks-txt-icon risks-txt-icon1"></span>信贷审查通过或拒绝</dt>
                                                </dl>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="risks-txts">贷后监督</div>
                                            <div className="risks-txt">
                                                <div className="risks-txt-line"></div>
                                                <dl>
                                                    <dt ><span className="risks-txt-icon risks-txt-icon1"></span>变化情况</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span>还款进度</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span> 现有合作渠道的后续尽调</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span>负面信息筛查</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span>现有借款企业的行业趋势及数据分析</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span>风险报告及分析</dt>
                                                    <dt className="risks-txt-mt2"><span className="risks-txt-icon risks-txt-icon1"></span>信贷资产调整</dt>
                                                </dl>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="risks-txts">借款结束</div>
                                            <div className="risks-txt">
                                                <div className="risks-txt-line"></div>
                                                <dl>
                                                <dt ><span className="risks-txt-icon risks-txt-icon1"></span> 对于逾期借款，催收</dt>
                                                    <dt className="risks-txt-mt3"><span className="risks-txt-icon risks-txt-icon1"></span> 增加或减少合作渠道的额度敞口</dt>
                                                    <dt className="risks-txt-mt3"><span className="risks-txt-icon risks-txt-icon1"></span> 成功还款</dt>
                                                    <dt className="risks-txt-mt3"><span className="risks-txt-icon risks-txt-icon1"></span> 借款追偿</dt>
                                                </dl>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="vice-header2">
                                <i></i>   风险预警管理情况
                            </div>
                            <div className="reveal-lists">
                                <div>
                                    风险管理部对新增放款及整体资产风险情况进行严密监控，判断是否达到引起关注的水平或超过警戒值，并采取相应措施控制风
                                    险。拙赢公司及时披露风险，且在项目信息列表页面进行风险提示。同时拙赢公司按照监管要求，定期就项目借款人的相关信息
                                    进行披露，并在发生足以导致借款人不能按约定期限足额还款的情形时，及时向出借人披露。
                                </div>
                                <div className="jy-pos-r">
                            <div className="risks-icons-line"></div>
                            <ul className="risks-icons risks-icons1 clearfix">
                                <li>
                                    <div className="risks-icon risks-icon3 jy-text-c jy-fz-16">贷后监控</div>
                                    <p><input className="risks-btn" type="button" value="还款行为监测" /></p>
                                    <p><input className="risks-btn risks-btn1" type="button" value="公开数据监测" /></p>
                                    <p><input className="risks-btn risks-btn2" type="button" value="经营数据分析" /></p>
                                    <p><input className="risks-btn risks-btn3" type="button" value="电话/现场回访" /></p>

                                </li>
                                <li>
                                    <div className="risks-icon risks-icon3 jy-text-c jy-fz-16">客户分层</div>
                                    <p><input className="risks-btn risks-btn2" type="button" value="正常" /></p>
                                    <p><input className="risks-btn risks-btn3" type="button" value="关注" /></p>
                                    <p><input className="risks-btn risks-btn2" type="button" value="预警" /></p>
                                    <p><input className="risks-btn risks-btn1" type="button" value="高危" /></p>
                                </li>
                                <li>
                                    <div className="risks-icon risks-icon3 jy-text-c jy-fz-16">风控措施</div>
                                    <p><input className="risks-btn risks-btn1" type="button" value="持续监控" /></p>
                                    <p><input className="risks-btn risks-btn2" type="button" value="密切关注" /></p>
                                    <p><input className="risks-btn" type="button" value="停止借款" /></p>
                                    <p><input className="risks-btn risks-btn2" type="button" value="催收/诉讼" /></p>
                                </li>
                            </ul>
                        </div>
                            </div>
                            <div className="vice-header2">
                                <i></i>    催收方式
                            </div>
                            <div className="reveal-lists">
                                通过专业的贷后资产团队对逾期客户进行管理。还款到期日之前对客户进行适当的提醒。如果用户逾期未按时还款，还将第一时
                                间通过短信、电话、信函等方式提醒用户进行还款。如果该借款人仍未还款，会进一步进行包括上门等一系列的催收工作，直至
                                采取法律手段。
                                <ul className="risks-icons risks-icons2 clearfix">
                                    <li>
                                        <div className="risks-icon risks-icon4"></div>
                                        <h5 className="jy-text-c">短信</h5>
                                        <p>根据不同的项目，到期前和 <br />逾期后进行不同频次的短信<br />提醒。</p>
                                    </li>
                                    <li>
                                        <div className="risks-icon risks-icon5"></div>
                                        <h5 className="jy-text-c">电话</h5>
                                        <p>根据借款人情况，在到期前<br />和逾期后进行电话联系借款<br />人，提醒还款及催促还款。</p>
                                    </li>
                                    <li>
                                        <div className="risks-icon risks-icon6"></div>
                                        <h5 className="jy-text-c">法律</h5>
                                        <p>根据借款人情况，进一步上<br />门催收，直至采取法律手<br />段。</p>
                                    </li>
                                </ul>
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
export default Risks;
