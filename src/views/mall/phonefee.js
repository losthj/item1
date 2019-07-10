import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout,Form,Button,Notify,Icon } from 'zent';
const { Row, Col } = Layout;
const { FormInputField,FormSelectField,createForm } = Form;

const data = [
  { value: '8550金币', text: '50元话费（9000金币）' },
  { value: '17100金币', text: '100元话费（18000金币）' },
];

class Phonefee extends Component {
    state = {
         selectedValue: '8550金币'
      };   
      selectChangeHandler = (event) => {
        this.setState({
          selectedValue: event 
        });
      };
      submit = (values, zentForm) => {
        Notify.success(JSON.stringify(values));
      };
     
    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall" > 金币商城</Link> &gt;  
                        <Link to="/mall/phonefee" className="text-golden"> 话费充值</Link>
                    </div>
                    <div className="mall-mian">
                        <h2> 手机话费充值（支持全网手机充值）</h2>
                        <div className="mall-step"> 
                            <Row className="step-row">
                                <Col span={13} className="step-col">
                                    <div className="form_step">
                                        <Row>
                                            <Col span={5}>
                                                <div className="step-icon">
                                                    step
                                                </div>
                                            </Col>
                                            <Col span={19}>
                                                <div className="step1">
                                                 <span>1</span>
                                                 轻松充值，仅需一步
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="step-form">
                                            <Form horizontal onSubmit={handleSubmit(this.submit)}>
                                                <Row>
                                                    <Col span={24}>
                                                        <FormInputField name="name" type="text" label="手机号码：" placeholder="请输入手机号码"
                                                        validations={{ required: true }} validationErrors={{ required: '请输入正确号码' }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                    <FormSelectField name="type" label="充值金额：" data={data} validations={{ required: true }}        validationErrors={{ required: '请选择类型' }} onChange={this.selectChangeHandler} value={this.state.selectedValue} />
        
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={4} className="zent-col-r">
                                                       折扣价
                                                    </Col>
                                                    <Col span={19}>
                                                        <div className="agio">{this.state.selectedValue}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={19} offset={5}>
                                                    (限量50份，本月剩余43份！)
                                                    </Col>
                                                </Row>
                                                <Row className="last">
                                                    <Col span={19} offset={5}>
                                                        <Button  type="primary">充值</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </div>
                                
                                </Col>
                                <Col span={11} className="step-col"></Col>
                            </Row> 
                        </div>
                        <div className="mall-warn">
                            <ul>
                                <li><Icon type="warning" />小囧温馨提示</li>
                                <li>1. 请您充值前务必仔细核对充值的手机号码，支付完成后，系统自动提交充值，将无法拦截，一旦充值成功，将无法进行退款。 </li>
                            </ul>
                        </div>
                        <div className="mall-problem">
                            <div className="problem-title">常见问题</div> 
                            <dl>
                                <dt>
                                1. 充值到账时间是多久？
                                </dt>
                                <dd>
                                    系统会在1-10分钟内自动完成充值，运营商系统异常情况下，会出现延迟到帐，具体到账时间以运营商系统缴费时间为准。
                                </dd>
                                <dt>
                                2. 话费充值没到账怎么办？
                                </dt>
                                <dd>
                                如24小时后如果没有到账，可以拨打客服服务热线：400-008-8782，我们会尽快为您解决。
                                </dd>
                                <dt>
                                3. 如何查询充值的订单记录？
                                </dt>
                                <dd>
                                可登录囧羊平台官网>账号中心>我的账单查看。
                                </dd>
                            </dl>
                        </div>  
                    </div>            
                </div>
            </div>
        )
    }
}

const WrappedForm = createForm()(Phonefee);
export default WrappedForm;  