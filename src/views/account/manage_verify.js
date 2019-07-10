import React, { Component } from 'react';
import { Form, Notify } from 'zent';
const { FormInputField, createForm } = Form;

class Verify extends Component {
  submit = (values, zentForm) => {
    Notify.success(JSON.stringify(values));
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="manage-info">
        <div className="info-title">
          实名认证
        </div>
        <div className="info-con m-form">
          <Form horizontal onSubmit={handleSubmit(this.submit)}>
              <FormInputField
                name="name"
                type="text"
                label="您的姓名:"
                placeholder="请输入您的姓名"
                validations={{ required: true }}
                validationErrors={{ required: '请填写您的姓名' }}
              />
              <FormInputField
                name="id"
                type="text"
                label="您的身份证号:"
                placeholder="请输入您的身份证号"
                validations={{ 
                  required: true,
                  matchRegex: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                }}
                validationErrors={{ 
                  required: '请填写身份证号',
                  matchRegex: '身份证号错误' 
                }}
              />
              <div className="zent-form__form-actions">
                <button className="u-btn linear-golden">
                  开通出借账户
                </button>
              </div>
          </Form>
        </div>
      </div>
    )
  }
}
const WrappedForm = createForm()(Verify);
export default WrappedForm