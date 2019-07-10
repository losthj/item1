import React, { Component } from 'react';
import Reminder from '@containers/common/reminder';
import { Tabs, Form, Notify } from 'zent';
import TableList from '@components/account/TableList';

const TabPanel = Tabs.TabPanel;
const { FormInputField, FormSelectField, FormCheckboxField, createForm } = Form;
// 充值记录
const columns = [
  {
    title: '时间',
    name: 'time'
  }, {
    title: '提现金额（元）',
    name: 'charge'
  }, {
    title: '提现手续费（元）',
    name: 'cost'
  }, {
    title: '客户端',
    name: 'device'
  }, {
    title: '备注',
    name: 'info'
  }
];
const datasets = [];
for (let i = 0; i < 10; i++) {
  datasets.push({
    id: `${i}`,
    time: `2019-01-14 10:10:00`,
    charge: '1000.00 ',
    cost: '2 ',
    device: `PC网站${i}`,
    info: '成功'
  })
}

class WithDrawal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeId: '1',
      current: 1,
      pageSize: 10,
      datasets
    }
  }
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }
  submit = (values, zentForm) => {
    Notify.success(JSON.stringify(values));
  }
  onSelectChange = (value) => {
    console.log(value)
  }
  onSelectTime = (value) => {
    console.log(value)
  }
  // 分页
  onPageChange = ({ current, pageSize }) => {
    console.log(current)
    console.log(pageSize)
    this.setState({
      current,
      pageSize,
    })
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="m-charge">
        <div className="charge-title">
          提现
        </div>
        <div className="m-tab">
          <Tabs
            activeId={this.state.activeId}
            onChange={this.onTabChange}
          >
            <TabPanel
              tab={<span>提现</span>}
              id="1"
            >
              <div className="m-tab-con m-form">
                <Form horizontal onSubmit={handleSubmit(this.submit)}>
                  <div className="zent-form__control-group">
                    <label className="zent-form__control-label">可提现金额:</label>
                    <div className="zent-form__controls">
                      <div className="zent-input-wrapper">￥0元</div></div>
                  </div>
                  <FormInputField
                    name="name"
                    type="text"
                    label="提现金额:"
                    placeholder="请输入提现金额"
                    validations={{ 
                      required: true,
                      isNumeric: true,
                    }}
                    validationErrors={{ isNumeric: '请填写正确的金额' }}
                  />
                  <div className="zent-form__control-group">
                    <label className="zent-form__control-label">手续费:</label>
                    <div className="zent-form__controls">
                      <div className="zent-input-wrapper nowrap fz12">
                      <span className="line-through">2元</span> 使用提现券抵扣 （注：使用提现券后，如遇提现失败，系统将在15分钟后返还所使用的提现券。）</div>
                     </div>
                  </div>
                  <div className="zent-form__control-group">
                    <label className="zent-form__control-label">到账时间:</label>
                    <div className="zent-form__controls">
                      <div className="zent-input-wrapper nowrap fz12 text-golden">
                        预计2019年01月23日 23时59分前到账
                      </div>
                     </div>
                  </div>
                  <FormCheckboxField name="agree" label="">
                    我已阅读并确认下方重要提示信息
                  </FormCheckboxField>
                  <div className="zent-form__form-actions">
                    <button className="u-btn linear-golden">
                      申请提现
                    </button>
                    <div className="u-info">
                      <span className="icon iconfont icon-id-card-o text-golden"></span>
                      由上海华瑞银行为您提供资金存管服务
                    </div>
                  </div>
                </Form>
                <Reminder content="1. 个人用户T+1自然日到账。<br />2. 企业用户T+1工作日到账。<br />3. 用户提现金额无限制。<br />4. 个人客户申请提现将收取人民币2元/笔手续费；企业用户申请提现将收取提现金额的0.003%手续费。（手续费由第三方资金支付机构收取，需客户自行承担，从用户余额中扣除）。<br />5. 提现过程遇到问题，请联系“囧羊”客服：400-008-8782。" />
              </div>
            </TabPanel>
            <TabPanel
              tab="提现记录"
              id="2"
            >
              <div className="m-tab-con">
                <div className="charge-info" style={{marginTop: '30px'}}>
                    累计成功提现 <strong className="text-golden">10</strong>笔
                    <span className="charge-item">金额 <strong className="text-golden">￥12012.00</strong>元</span>
                </div>
                <div className="u-title">充值记录</div>
                <Form inline>
                  <FormSelectField
                    name="type"
                    label="提现状态:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '提现成功' },
                      { value: 3, text: '提现失败' },
                    ]}
                    onChange = { this.onSelectChange }
                  />
                  <FormSelectField
                    name="type"
                    label="提现时间:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '最近3个月' },
                      { value: 3, text: '最近2个月' },
                      { value: 4, text: '最近7天' },
                    ]}
                    onChange = { this.onSelectTime }
                  />
                </Form>
                <TableList 
                  columns={columns} 
                  current={this.state.current}
                  pageSize= {this.state.pageSize}
                  totalItem={30}
                  datasets = {datasets}
                  onChange={this.onPageChange}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

const WrappedForm = createForm()(WithDrawal);

export default WrappedForm;
