import React, { Component } from 'react';
import '@assets/home/login.scss';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      personStatus: true
    }
  }
  render(){
    return (
      <div className="login-warp">
        <div className="login-con">
           {
             this.state.personStatus ? 
             <div className="login-frame">
               <div className="login-title">
                <div className="title">个人用户登录</div>
                <div className="leaf">
                  <div className="reg-genre enter">
                     <div className="tip-icon tip-icon1"></div>
                  </div>
                </div>
               </div>
               <div className="psw-interst"></div>
               <div className="login-info">账号或密码错误</div>
                <ul className="reg-list">
                  <li>
                      <input className="reg-input user_phone" type="text" />
                      <i className="reg-icon"></i>
                  </li>
                  <li>
                      <input className="reg-input user_pass" type="password" />
                      <i className="reg-psw reg-icon"></i>
                  </li>
                  <li className="login-link tar">
                      <a href="/access/getpasswd.html">忘记密码</a><span className="serif">|</span><a href="/access/company_reg.html" className="ui-text-red">企业注册</a>
                  </li>
                </ul>
                <div className="reg-sub">
                    <input className="u-btn-big" type="submit" value="登录" />
                </div>
             </div>
             :
             null
           }
        </div>
      </div>
    )
  }
}

export default Login;
