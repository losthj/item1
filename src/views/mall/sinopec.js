import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@assets/mall/index.scss';
import { Layout,Form,Button,Notify,Icon } from 'zent';
const { Row, Col } = Layout;
const { FormInputField,FormSelectField, FormCheckboxField,createForm } = Form;

const data = [
  { value: '8550金币', text: '50元油卡（9000金币）' },
  { value: '17100金币', text: '100元油卡（18000金币）' },
];

class Sinopec extends Component {
    state = {
         selectedValue: '8550金币',
         checkedList: [],
      };   
      selectChangeHandler = (event) => {
        this.setState({
          selectedValue: event 
        });
      };
      submit = (values, zentForm) => {
        Notify.success(JSON.stringify(values));
      };
     

      onCheckboxChange = checkedList => {
        this.setState({ checkedList });
      };

    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall" > 金币商城</Link> &gt;  
                        <Link to="/mall/sinopec" className="text-golden"> 加油卡充值</Link>
                    </div>
                    <div className="mall-mian">
                        <h2> 加油卡充值（开车一族省心省力）</h2>
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
                                            <Col span={10}>
                                                <div className="step1">
                                                 <span>1</span>
                                                 填写充值加油卡卡号
                                                </div>
                                            </Col>
                                            <Col span={9}>
                                                <div className="step1">
                                                 <span>2</span>
                                                 选择储值套餐
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="step-form">
                                            <Form horizontal onSubmit={handleSubmit(this.submit)}> 
                                                <Row>
                                                    <Col span={24}>
                                                        <FormInputField name="name" type="text" label="加油卡卡号：" placeholder="加油卡卡号"
                                                        validations={{ required: true }} validationErrors={{ required: '请输入正确号码' }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <FormInputField name="name" type="text" label="确认卡号：" placeholder="确认卡号"
                                                        validations={{ required: true }} validationErrors={{ required: '请输入正确号码' }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <FormInputField name="name" type="text" label="持卡人手机号码：" placeholder="请输入手机号码"
                                                        validations={{ required: true }} validationErrors={{ required: '请输入正确号码' }} />
                                                    </Col>
                                                </Row>
                                                <Row className="last">
                                                    <Col span={19} offset={5}>
                                                        <Button  type="primary">下一步</Button>
                                                    </Col>
                                                </Row> 
                                             <div style={{display:'none'}}>
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
                                                    <Col span={24}>
                                                    <FormCheckboxField name="agree" label=" ">我已阅读并确认下方重要提示信息</FormCheckboxField>
                                                    </Col>
                                                </Row>
                                                <Row className="last">
                                                    <Col span={19} offset={5}>
                                                        <Button  type="primary">充值</Button>
                                                    </Col>
                                                </Row>
                                             </div>
                                               
                                            </Form>
                                        </div>
                                    </div>
                                
                                </Col>
                                <Col span={11} className="step-col step-col1"></Col>
                            </Row> 
                        </div>
                        <div className="mall-warn mall-warn1">
                            <ul>
                                <li><Icon type="warning" />小囧温馨提示</li>
                                <li>1、全国加油卡主卡都可以在线充值，包含记名主卡、不记名主卡或开具普通发票的加油卡。副卡、挂失卡、卡号不存在、增值税发票卡无法充值。  </li>
                                <li>2、圈存：就是将充入加油卡账户中的金额存放到加油卡的卡片中，只有圈存后加油卡才能在加油站加油。 
                                </li>
                                <li>3、充值发票获取：客户在加油卡归属地或消费地，持加油卡到中国石化江苏（浙江）石油分公司售卡充值网点开具普通发票。 一般纳税人客户可以在
                                   <p> 增值税 开票点根据充值额补打充值三联单，用以换开增值税发票。</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mall-problem">
                            <div className="problem-title">常见问题</div> 
                            <dl>
                                <dt>
                                1.  加油卡充值多长时间能够到账？
                                </dt>
                                <dd>
                                    一般24小时内就能到账。
                                </dd>
                                <dt>
                                2. 如何查询充值的订单记录？
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

const WrappedForm = createForm()(Sinopec);
export default WrappedForm;  