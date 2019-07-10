import React, {Component} from 'react';
import '@assets/home/about.css';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import { Collapse } from 'zent';


const Lmenu = styled.div`
.zent-collapse{
  width:260px;
  border-bottom: 12px solid #e5e5e5;
  overflow:visible;
  border-radius:0;
}
.zent-collapse-panel__title{
    height: 60px;
     line-height:60px;
     border-top: 1px solid #e5e5e5;
    color:#aaaaaa;
     font-size:16px;
     text-align: center;
    padding:0!important;
    margin-top: -1px;
    text-indent: 163px;
    background:#ffffff;
}
.zent-collapse-panel__arrow{
  position: relative;
  left: 193px;
}
.zent-collapse-panel__content{
  padding:0
}
.zent-collapse-panel__content-box{
  padding:0
  overflow:visible;
  width:258px;
}
.zent-collapse li{
  position: relative;
  height: 60px;
  width: 258px;
  text-align: center;
  line-height: 60px;
  color: #424242;
  font-size: 16px;
  cursor: pointer;
}
.zent-collapse li a{
  display: block;
}
.zent-collapse li a:hover,.zent-collapse li a.on {
    position: absolute;
     top: 0;
     color: #424242;
     left: -11px;
     width: 270px;
     height: 72px;
     background: url(https://img.jylc168.com/Pc/home/about/icon.png) no-repeat 0 0;
     text-indent: 10px;
}
`
class Leftme extends Component {
  state = {
    activeKey: '1'
  };

  handleChange(activeKey) {
    this.setState({
      activeKey
    });
  }
    render() {
      const { activeKey } = this.state;
        return (
          <Lmenu>
            <Collapse activeKey={activeKey} onChange={this.handleChange.bind(this)} accordion>
              <Collapse.Panel title="备案信息" key="1">
                <ul>
                  <li><NavLink to="/prepare" activeClassName="on">备案信息</NavLink></li>
                  <li><NavLink to="/custody" activeClassName="on">资金存管信息</NavLink></li>
                  <li><NavLink to="/risks" activeClassName="on">风险管理信息</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel title="组织信息" key="2">
                <ul>
                  <li><NavLink to="/disclosure" activeClassName="on">工商管理</NavLink></li>
                  <li><NavLink to="/partners" activeClassName="on">股东信息</NavLink></li>
                  <li><NavLink to="/organize" activeClassName="on">组织机构从业人员信息</NavLink></li>
                  <li><NavLink to="/channel" activeClassName="on">渠道信息</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel title="审核信息" key="3">
                <ul>
                  <li><NavLink to="/auditing" activeClassName="on">财务审计报告</NavLink></li>
                  <li><NavLink to="/audit" activeClassName="on">重点环节审计结果</NavLink></li>
                  <li><NavLink to="/compliance" activeClassName="on">合规性审查报告</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel title="经营信息" key="4">
                <ul>
                  <li><NavLink to="/operate" activeClassName="on">经营数据</NavLink></li>
                  <li><NavLink to="/charge" activeClassName="on">收费标准</NavLink></li>
                  <li><NavLink to="/overdue" activeClassName="on">项目逾期/代偿信息</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel title="项目信息" key="5">
                <ul>
                  <li><NavLink to="/borrower" activeClassName="on">借款人基本信息</NavLink></li>
                  <li><NavLink to="/basic" activeClassName="on">项目基本信息</NavLink></li>
                  <li><NavLink to="/evaluate" activeClassName="on">项目风险评估</NavLink></li>
                  <li><NavLink to="/capital" activeClassName="on">已撮合未到期项目有关信息</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel  title="重大事件信息" key="6">
                <ul>
                  <li> <NavLink to="/major" activeClassName="on">重大事件信息</NavLink></li>
                </ul>
              </Collapse.Panel>
              <Collapse.Panel title="其他信息" key="7">
                <ul>
                  <li><NavLink to="/consult" activeClassName="on">咨询投诉信息</NavLink></li>
                  <li><NavLink to="/system" activeClassName="on">反洗钱反欺诈</NavLink></li>
                  <li><NavLink to="/policy" activeClassName="on">政策法规</NavLink></li>
                  <li><NavLink to="/loan" activeClassName="on">借贷知识</NavLink></li>
                  <li><NavLink to="/risk" activeClassName="on">风险提示</NavLink></li>
                </ul>
              </Collapse.Panel> 
            </Collapse>
          </Lmenu>
        )
       
    }
}


export default Leftme;

