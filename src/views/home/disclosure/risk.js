import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';


class Risk extends Component {
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
                                <i></i> 风险提示
                            </div>
                            <div className="reveal-lists">
                            为便于参与网络借贷的出借人和借款人全面正确地理解网贷的风险，囧羊平台特此提示您在决定出借和借款前仔细阅读以下内容：
                            </div>
                            <div className="reveal-lists loan-text">
                            出借人提示内容：
                            </div>
                            <div className="reveal-lists ">
                            <strong>出借人需具备的条件及需履行的义务：</strong> <br />
                            1. 本人具备出借风险意识、风险识别能力、拥有非保本类金融产品投资的经历并熟悉互联网； <br />
                            2. 本人确保向囧羊平台提供真实、准确、完整的身份等信息； <br />
                            3. 本人的出借资金为来源合法的自有资金； <br />
                            4. 本人了解借款项目信贷风险，确认具有相应的风险认知和承受能力； <br />
                            5. 本人将自行承担借贷产生的本息损失； <br />
                            6. 本人知晓并履行借贷合同及有关协议约定的其他义务。
                            </div>
                            <div className="reveal-lists loan-text">
                            出借人风险提示：
                            </div>
                            <div className="reveal-lists ">
                            1. 出借人知晓平台作为依法成立的网络借贷信息中介机构，是专门从事网络借贷信息中介业务活动的金融信息中介企业； <br />
                            2.出借人知晓平台主要为借款人（即贷款人）与出借人实现直接借贷提供信息搜集、信息公布、资信评估、信息交互、借贷撮合等服务，不提供增信服务，不设立 资金池，不进行非法集资，不损害国家利益和社会公共利益； <br />
                            3. 出借人了解借款项目信贷风险，认真学习相关的知识，理性谨慎量力而行，具有相应的风险认知和承受能力； <br />
                            4. 出借人需了解根据《最高人民法院关于审理民间借贷案件适用法律若干问题的规定》，民间借贷年利率不超过24%的，法律予以保护; <br />
                            5. 出借人知晓借款人的基本信息，在平台上进行的出借决策均将由出借人本人亲自确认； <br />
                            6. 出借人按照“借贷自愿、诚实守信、责任自负、风险自担”的原则承担借贷风险； <br />
                            7. 出借人应增强自我保护能力，远离非法集资活动，谨防上当受骗，积极主动地行使自己的权利，依法维权；
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
export default Risk;