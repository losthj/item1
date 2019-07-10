import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';

class Custody extends Component {
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
                            <div className="vice-head">资金存管信息</div>
                            <div className="vice-header2">
                                <i></i> 资金存管银行
                            </div>
                            <div className="reveal-lists">
                                平台与上海华瑞银行强强联手，主动响应监管政策，杜绝挪用、资金池、自融、卷款跑路等现象，实现完全合规经营的新跨越。
                            </div>
                            <div className="vice-header2">
                                <i></i> 什么是银行存管
                            </div>
                            <div className="reveal-lists">
                            银行资金存管业务是指银行业金融机构作为存管人，接受网络借贷信息中介机构的委托，按照法律法规规定和合同约定，履行网络借贷资金专用账户的开立与销户、资金保管、资金清算、账务核对、信息披露等职责的业务。由银行管理资金，平台管理交易，做到资金与交易的分离，让资金流向更透明，用户交易更真实，出借更安心。
                            </div>
                            <div className="jy-text-c jy-mt-30">
                                <img src="https://img.jylc168.com/Pc/home/disclosure/costody.png" alt=""/>
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
export default Custody;
