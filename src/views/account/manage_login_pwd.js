import React, { Component } from 'react';
import { Form, Notify } from 'zent';
const { FormInputField, createForm } = Form;

class LoginPwd extends Component {
  constructor(props){
    super(props);
    this.sendYzm = this.sendYzm.bind(this);
  }
  submit = (values, zentForm) => {
    Notify.success(JSON.stringify(values));
  }
  sendYzm(){
    console.log("a")
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="manage-info">
        <div className="info-title">
          账户密码
        </div>
        <div id="yzm-con" className="info-con m-form" style={{marginLeft:'20px'}}>
          <Form horizontal onSubmit={handleSubmit(this.submit)}>
              <FormInputField
                name="name"
                type="text"
                label="手机号码:"
                value="185****2129"
                disabled
              />
              <FormInputField
                name="yzm"
                type="text"
                label="请输入验证码:"
                placeholder="请输入验证码"
                helpDesc={<span className="yzm-btn" onClick={this.sendYzm}>发送验证码</span>}
                validations={{ 
                  required: true,
                  matchRegex: /(^\d{6}$)/
                }}
                validationErrors={{ 
                  required: '请填写验证码',
                  matchRegex: '请输入正确的验证码' 
                }}
              />
              <FormInputField
                name="password"
                type="text"
                label="新的登录密码:"
                validations={{
                  required: true
                }}
                validationErrors={{
                  required: '新的登录密码'
                }}
              />
              <FormInputField
                name="confirmPw"
                type="text"
                label="确认新的登录密码:"
                validations={{
                  equalsField: 'password'
                }}
                validationErrors={{
                  equalsField: '两次填写的密码不一致'
                }}
              />
              <div className="zent-form__form-actions">
                <button className="u-btn linear-golden">
                  确认
                </button>
              </div>
          </Form>
        </div>
      </div>
    )
  }
}
const WrappedForm = createForm()(LoginPwd);
export default WrappedForm