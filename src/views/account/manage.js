import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Verify from './manage_verify';
import LoginPwd from './manage_login_pwd';

class Manage extends Component {
  constructor(props){
    super(props);
    this.getWrap = this.getWrap.bind(this);
    this.state = {
      childState: true
    }
  }
 
  getWrap(){
    console.log("click")
    this.setState({
      childState: !this.state.childState
    })
  }
  render() {
    return (
      <Fragment>
        <div className="chart-title" style={{margin:'30px 0'}}>
          账户管理
        </div>
        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon"></div>
            <div className="manage-title">
              <div className="fz14">实名认证</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">用于提升账户安全性，认证后不可修改</div>
            <div className="manage-btn linear-golden" onClick={this.getWrap}>查看</div>
          </div>
          {
            this.state.childState ?  
            <Verify />
            : null
          }
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon2"></div>
            <div className="manage-title">
              <div className="fz14">电子签名</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">在具有同等法律效应的前提下，为您提供便捷的操作流程</div>
            <Link to="/account/signature" className="manage-btn linear-golden">
              查看
           </Link>
          </div>
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon3"></div>
            <div className="manage-title">
              <div className="fz14">风险评估</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">您当前评估为<strong className="fz14 text-golden">积极性</strong>，今年还可评估 <strong className="fz14 text-golden"> 2 </strong>次 <br/> （2019-12-12过期） </div>
            <Link to="/account/risk_assessment" className="manage-btn linear-golden">重新评估</Link>
          </div>
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon4"></div>
            <div className="manage-title">
              <div className="fz14">银行卡</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">绑定银行卡，快速处理资金充值、提现问题</div>
            <Link to="/account/bankcard" className="manage-btn linear-golden">查看</Link>
          </div>
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon5"></div>
            <div className="manage-title">
              <div className="fz14">账户密码</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">密码涉及账户信息及资金安全，用户可自行修改密码</div>
            <div className="manage-btn linear-golden">查看</div>
          </div>
          <LoginPwd />
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon6"></div>
            <div className="manage-title">
              <div className="fz14">支付密码</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">用于处理资金出借、充值、提现时的交易密码，保障资金安全</div>
            <div className="manage-btn linear-golden">查看</div>
          </div>
        </div>

        <div className="m-manage">
          <div className="manage-con">
            <div className="manage-icon manage-icon7"></div>
            <div className="manage-title">
              <div className="fz14">消息设置</div>
              <div className="title-info">
                <span className="icon iconfont icon-xuanze-yixuan fz12"></span>已认证
              </div>
            </div>
            <div className="manage-info">开通微信小秘书，及时了解平台信息</div>
            <div className="manage-btn linear-golden">查看</div>
          </div>
          <div className="manage-info">
            <div className="info-title">
              账户密码
            </div>
            <div className="message-con">
               <div>开通微信小秘书操作步骤：</div>
               <div>
                 <img src="https://img.jylc168.com/Pc/account/index/message_set.png" alt=""/>
               </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Manage;
