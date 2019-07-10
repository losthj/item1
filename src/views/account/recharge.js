import React, { Component } from 'react';
import Reminder from '@containers/common/reminder';
import { Tabs, Form, Notify } from 'zent';
import TableList from '@components/account/TableList';

const TabPanel = Tabs.TabPanel;
const { FormInputField, FormSelectField, createForm } = Form;
// 充值记录
const columns = [
  {
    title: '时间',
    name: 'time'
  }, {
    title: '充值金额（元）',
    name: 'charge'
  }, {
    title: '客户端（元）',
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
    device: `PC网站${i}`,
    info: '成功'
  })
}

class Recharge extends Component {
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
          充值
        </div>
        <div className="m-tab">
          <Tabs
            activeId={this.state.activeId}
            onChange={this.onTabChange}
          >
            <TabPanel
              tab={<span>充值</span>}
              id="1"
            >
              <div className="m-tab-con m-form">
                <Form horizontal onSubmit={handleSubmit(this.submit)}>
                  <FormInputField
                    name="name"
                    type="text"
                    label="充值金额:"
                    placeholder="请输入充值金额"
                    validations={{ 
                      required: true,
                      isNumeric: true,
                    }}
                    validationErrors={{ isNumeric: '请填写正确的金额' }}
                  />
                  <div className="zent-form__control-group">
                    <label className="zent-form__control-label">充值手续费:</label>
                    <div className="zent-form__controls">
                      <div className="zent-input-wrapper">0元</div></div>
                  </div>
                  <div className="zent-form__form-actions">
                    <button className="u-btn linear-golden">
                      确认充值
                    </button>
                    <div className="u-info">
                      <span className="icon iconfont icon-id-card-o text-golden"></span>
                      由上海华瑞银行为您提供资金存管服务
                    </div>
                  </div>
                </Form>
                <Reminder content="1. 转入免手续费。<br />2. 转入金额需大于等于1元，且只能使用同一张银行卡转出。<br />3. 您的资金将由上海华瑞银行负责存管。<br />4. 严禁非法套现等行为，一经发现将终止该账户的使用。" />
              </div>
            </TabPanel>
            <TabPanel
              tab="充值记录"
              id="2"
            >
              <div className="m-tab-con">
                <div className="charge-info">
                    累计成功充值 <strong className="text-golden">10</strong>笔
                    <span className="charge-item">金额 <strong className="text-golden">￥12012.00</strong>元</span>
                </div>
                <div className="u-title">充值记录</div>
                <Form inline>
                  <FormSelectField
                    name="type"
                    label="充值状态:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '充值成功' },
                      { value: 3, text: '充值失败' },
                    ]}
                    onChange = { this.onSelectChange }
                  />
                  <FormSelectField
                    name="type"
                    label="充值时间:"
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

const WrappedForm = createForm()(Recharge);

export default WrappedForm;
