import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import { Collapse } from 'zent';

class Loan extends Component {
    state = {
        activeKey: '1'
      };
      handleChange(activeKey) {
        this.setState({
          activeKey
        });
      }
    render(){
        const { activeKey } = this.state;
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
                                <i></i> 借贷知识
                            </div>
                            <div className="reveal-lists">
                            按照党中央、国务院工作部署和人民银行等十部委《关于促进互联网金融健康发展的指导意见》（以下简称《指导意见》）有关职责分工，银监会会同工业和信息化部、公安部、国家互联网信息办公室等部门研究起草了《网络借贷信息中介机构业务活动管理暂行办法》（以下简称《办法》），现就有关问题解答如下：
                            </div>
                            <div className="reveal-lists loan-text">
                                《网络借贷信息中介机构业务活动管理暂行办法》答记者问
                            </div>
                            <div className="loan-collapse">
                            <Collapse activeKey={activeKey} onChange={this.handleChange.bind(this)} bordered={false} >
                                <Collapse.Panel title="《办法》中网络借贷、网络借贷业务、网络借贷信息中介机构分别指什么？" key="1">
                                答：《办法》落实了《指导意见》的有关要求，规定网络借贷（以下简称“网贷”）是指个体和个体之间通过互联网平台实现的直接借贷，即大众所熟知的P2P个体网贷，属于民间借贷范畴，受合同法、民法通则等法律法规以及最高人民法院有关司法解释规范。网贷业务是以互联网为主要渠道，为借款人和出借人实现直接借贷提供信息搜集、信息公布、资信评估、信息交互、借贷撮合等服务。网贷信息中介机构（以下简称“网贷机构”）是指依法设立，专门经营网贷业务的金融信息服务中介机构，其本质是信息中介而非信用中介，因此不得吸收公众存款、归集资金设立资金池、不得自身为出借人提供任何形式的担保等。<br />
                                目前，许多网贷机构背离了信息中介的定性，承诺担保增信、错配资金池等，已由信息中介异化为信用中介，为此，《办法》将重点对此类行为进行规范，以净化市场环境，保护金融消费者权益，使网贷机构回归到信息中介的本质。
                                </Collapse.Panel>
                                <Collapse.Panel title="网贷的特点及发展网贷的意义有哪些？" key="2">
                                答：网贷利用互联网信息技术，不受时空限制，使资金提供方与资金需求方在平台上直接对接，进行投融资活动，拓宽了金融服务的目标群体和范围，有助于为社会大多数阶层和群体提供可得、便利的普惠金融服务，进一步实现了小额投融资活动低成本、高效率、大众化，对于“稳增长、调结构、促发展、惠民生”具有重要意义。<br />
                                此外网贷机构与传统金融机构相互补充、相互促进，在完善金融体系，提高金融效率，弥补小微企业融资缺口，缓解小微企业融资难以及满足民间投资需求等方面发挥了积极作用。
                                </Collapse.Panel>
                                <Collapse.Panel title="当前我国网贷行业基本情况及存在的主要问题？" key="3">
                                答：网贷作为互联网金融业态的重要组成部分，近几年的发展呈现出“快、偏、乱”的现象，即行业规模增长势头过快，业务创新偏离轨道、风险乱象时有发生：一是规模增长势头过快。近两年网贷行业无论在机构数量还是业务规模均呈现出迅猛增长的势头，据不完全统计，截至2016年6月底全国正常运营的网贷机构共2349家，借贷余额6212.61亿元，两项数据比2014年末分别增长了49.1%、499.7%。二是业务创新偏离轨道。目前大部分网贷机构偏离信息中介定位以及服务小微和依托互联网经营的本质，异化为信用中介，存在自融、违规放贷、设立资金池、期限拆分、大量线下营销等行为。三是风险乱象时有发生。网贷行业中问题机构不断累积，风险事件时有发生，据不完全统计，截至2016年6月底全国累计问题平台1778家，约占全国机构总数的43.1%，这些问题机构部分受资本实力及自身经营管理能力限制，当借贷大量违约、经营难以为继时，出现“卷款”、“跑路”等情况，部分机构销售不同形式的投资产品，规避相关金融产品的认购门槛及投资者适当性要求，在逃避监管的同时，加剧风险传播，部分机构甚至通过假标、资金池和高收益等手段，进行自融、庞氏骗局，碰触非法集资底线。
                                </Collapse.Panel>
                                <Collapse.Panel title="《办法》确定的网贷行业监管的总体原则有哪些？" key="4">
                                答：按照《指导意见》明确的“鼓励创新、防范风险、趋利避害、健康发展”的总体要求和“依法、适度、分类、协同、创新”的监管原则，《办法》确定了网贷行业监管总体原则：一是强调机构本质属性，加强事中事后行为监管。网贷机构本质上是信息中介机构，不是信用中介机构，但其开展的网贷业务是金融信息中介业务，涉及资金融通及相关风险管理。对网贷业务的监管，重点在于业务基本规则的制定完善，而非机构和业务的准入审批，应着力加强事中事后行为监管，以保护相关当事人合法权益。二是坚持底线监管思维，实行负面清单管理。通过负面清单界定网贷业务的边界，明确网贷机构不能从事的十三项禁止性行为，对符合法律法规的网贷业务和创新活动，给予支持和保护；对以网贷名义进行非法集资等非法金融活动，坚决予以打击和取缔；加强信息披露，完善风险监测，守住不发生区域性系统性风险的底线。三是创新行业监管方式，实行分工协同监管。网贷作为新兴的互联网金融业态，具有跨区域、跨领域的特征，传统的监管模式无法适应网贷行业的监管需求，因此，要充分发挥网贷业务国家相关管理部门、地方人民政府的作用，发挥各方优势，在明确分工的前提下，加强沟通、协作，形成有效的监管合力。
                                </Collapse.Panel>
                                <Collapse.Panel title="《办法》确立的网贷行业的基本管理体制及各方职责具体是什么？" key="5">
                                答：《指导意见》将网贷机构定性为信息中介，且将网贷归属于民间借贷范畴。根据关于界定中央和地方金融监管职责分工的有关规定，明确对于非存款类金融活动的监管，由中央金融监管部门制定统一的业务规则和监管规则，督促和指导地方人民政府金融监管工作，由省级人民政府对机构实施监管，承担相应的风险处置责任，并加强对民间借贷的引导和规范，防范和化解地方金融风险。鉴于网贷行业跨地区经营且风险外溢性较大，按照行为监管与机构监管并行的监管思路，《办法》本着“双负责”的原则，明确银监会及其派出机构作为中央金融监管部门负责对网贷机构实施行为监管，具体包括制定统一的规范发展政策措施和监督管理制度，并负责网贷机构日常经营行为的监管；明确地方金融监管部门负责对本辖区网贷机构实施机构监管，具体包括对本辖区网贷机构进行规范引导、备案管理和风险防范及处置工作。另外，网贷行业作为新兴业态，其业务管理涉及多个部门职责，应坚持协同监管，《办法》明确工业和信息化部主要职责是对网贷机构具体业务中涉及的电信业务进行监管；公安部主要职责是牵头对网贷机构业务活动进行互联网安全监管，打击网络借贷涉及的金融犯罪；国家互联网信息办公室主要职责是负责对金融信息服务、互联网信息内容等业务进行监管。
                                </Collapse.Panel>
                                
                                <Collapse.Panel title="《办法》对于网贷业务的主要管理措施有哪些？" key="6">
                                答：一是对业务经营活动实行负面清单管理。考虑到网贷机构处于探索创新阶段，业务模式尚待观察，因此，《办法》对其业务经营范围采用以负面清单为主的管理模式，明确了包括不得吸收公众存款、不得设立资金池、不得提供担保或承诺保本保息、不得发售金融理财产品、不得开展类资产证券化等形式的债权转让等十三项禁止性行为。在政策安排上，允许网贷机构引入第三方机构进行担保或者与保险公司开展相关业务合作。二是对客户资金实行第三方存管。为防范网贷机构设立资金池和欺诈、侵占、挪用客户资金，增强市场信心，《办法》规定对客户资金和网贷机构自身资金实行分账管理，由银行业金融机构对客户资金实行第三方存管，对客户资金进行管理和监督，资金存管机构与网贷机构应明确约定各方责任边界，便于做好风险识别和风险控制，实现尽职免责。三是限制借款集中度风险。为更好地保护出借人权益和降低网贷机构道德风险，并与非法吸收公众存款有关司法解释及立案标准相衔接，《办法》规定网贷具体金额应当以小额为主。
                                </Collapse.Panel>
                                <Collapse.Panel title="《办法》对于出借人和借款人的具体行为有哪些规定？" key="7">
                                答：《办法》对消费者权益保护进行了重点考量，注重对出借人和借款人，尤其是对出借人的保护，在第四章以专章形式对借贷决策、风险揭示及评估、出借人和借款人信息、资金保护以及纠纷解决等问题进行了详细规定，确保出借人和借款人的合法权益不受损害。<br />
                                《办法》也对出借人和借款人的行为进行了规范，明确规定参与网贷的出借人与借款人应当实名注册；借款人应当提供准确信息，确保融资项目真实、合法，按照约定使用资金，严格禁止借款人欺诈、重复融资等。《办法》还要求出借人应当具备非保本类金融产品投资的经历并熟悉互联网，应当提供真实、准确、完整的身份信息，出借资金来源合法，拥有风险认知和承受能力以及自行承担借贷产生的本息损失。这些规定，本质上属于合格投资者条款，其目的是为了在行业发展初期，更好地防范非理性投资，引导投资者风险自担，进一步保护出借人合法权益。
                                </Collapse.Panel>
                                <Collapse.Panel title="客户资金实行银行业金融机构第三方存管制度对行业规范发展的作用是什么？" key="8">
                                答：按照《指导意见》有关规定，网贷机构应当选择符合条件的银行业金融机构作为第三方资金存管机构，对客户资金进行管理和监督，实现客户资金和网贷机构自身资金分账管理。实行客户资金第三方存管制度将有效防范网贷机构设立资金池和欺诈、侵占、挪用客户资金风险，有利于资金的安全与隔离，对于规范行业健康发展具有重要意义。银行业金融机构应当按照合同约定，履行交易资金划付、资金核算和监督等职责，将网贷机构的资金与客户的资金分账管理、分开存放，确保资金流向符合出借人的真实意愿，有效防范风险。下一步，银监会将制定网贷客户资金第三方存管具体办法，明确银行业金融机构对网络借贷资金监督管理职责以及存管银行的条件等，更好地满足当前网贷行业资金存管的市场需求。
                                </Collapse.Panel>
                                <Collapse.Panel title="信息披露制度对整个行业的意义是什么？" key="9">
                                答：加强对网贷机构的信息披露要求、完善相关信息披露制度，对于改进行业形象、提升网贷机构公信力、完善行业事中事后监管、防范行业风险、保护出借人与借款人利益具有十分重要的意义。<br />
                                根据行业及部分监管部门反映，在《办法》中对信息披露进行较为详细的规定缺乏可操作性，且部分指标的设置还有待于行业实践，因此目前《办法》只对信息披露进行原则性规定，银监会拟在后续有关细则中，结合行业的一般做法和监管需要，对行业的相应指标，包括坏账率、逾期率和代偿金额等进行明确定义。
                                </Collapse.Panel>
                                <Collapse.Panel title="《办法》出台后，对网贷行业会产生什么影响？银监会下一步的工作主要有哪些？" key="10">
                                答：《办法》通过社会公开征求意见和相关部门定向征求意见，并经相关部门进行合法性评估和第三方评估等形式，充分征求了社会各界的意见，各方反馈总体符合预期，我们也根据相关意见对《办法》进行了多轮修改完善，既充分考虑当前行业风险突出，亟待规范整顿的现状，又尊重行业现实，注重把握好行业风险底线与可持续发展的平衡，保护和支持依法合规的网贷业务和创新活动，避免《办法》出台造成对行业的冲击。<br />
                                《办法》作为行业经营和监管的基本制度安排，明确了网贷监管体制机制及各相关主体责任、网贷业务规则和风险管理要求、借款人和出借人的义务、信息披露及资金第三方存管等内容，全面系统的规范了网贷机构及其业务行为，为行业的发展明确了方向，进一步引导网贷机构回归信息中介、小额分散的普惠金融本质，促使网贷行业正本清源，同时，网贷机构线下经营现象将得到遏制，网贷机构将逐渐回归互联网金融本质，利用大数据、云计算等全新技术手段，依托互联网平台来开展相关业务，整顿网贷行业违规行为，防范和化解网贷风险，提升公众法律和风险意识，引导和促进网贷行业早日走上正轨，形成可持续的发展模式。<br />
                                《办法》正式发布后，银监会将密切关注各方反应和行业动向，尽快发布网贷客户资金第三方存管、网贷机构备案以及网贷机构信息披露等配套制度，完善网贷行业监管制度体系。
                                </Collapse.Panel>
                            </Collapse>
                            
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
export default Loan;