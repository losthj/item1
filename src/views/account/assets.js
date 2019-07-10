import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Form, Notify, Layout } from 'zent';
import TableList from '@components/account/TableList';

const { Row, Col } = Layout
const TabPanel = Tabs.TabPanel;
const { FormSelectField, createForm } = Form;
// 充值记录
const columns = [
  {
    title: '时间',
    name: 'time'
  }, {
    title: '类型（元）',
    name: 'types'
  }, {
    title: '收入（元）',
    name: 'come',
    className: 'text-green'
  }, {
    title: '支出（元）',
    name: 'out',
    className: 'text-red'
  }, {
    title: '账户余额（元）',
    name: 'have'
  }
];
const datasets = [];
for (let i = 0; i < 10; i++) {
  datasets.push({
    id: `${i}`,
    time: `2019-01-14 10:10:00`,
    types: '回款',
    come: `+100200`,
    out: '-10009.00',
    have: '2000'
  })
}

class Assets extends Component {
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
  onInvestStatus = (value) => {
    console.log('出借状态：', value)
  }
  onInvestTime = (value) => {
    console.log('出借时间：', value)
  }
  onSelectChange = (value) => {
    console.log('资金状态：',value)
  }
  onSelectTime = (value) => {
    console.log('时间：',value)
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
    return (
      <div className="m-charge">
        <div className="charge-title">
          资产管理
        </div>
        <div className="m-tab">
          <Tabs
            activeId={this.state.activeId}
            onChange={this.onTabChange}
          >
            <TabPanel
              tab={<span>我的出借</span>}
              id="1"
            >
              <div className="m-tab-con">
                <div className="u-title" style={{marginTop:'-20px'}}>我的出借</div>
                <Row>
                  <Col span={12}>
                    <ul className="assets-item" style={{marginRight:'10px'}}>
                      <li>出借总计：
                        <strong className="text-golden fz20">￥200,800.00</strong>
                      </li>
                      <li className="fz12"><span className="separator text-golden">●</span>待计息：￥0.00</li>
                      <li className="fz12"><span className="separator text-golden">●</span>回款中：￥100.00</li>
                      <li className="fz12"><span className="separator text-golden">●</span>已完成：￥200,700.00</li>
                    </ul>
                  </Col>
                  <Col span={12}>
                    <ul className="assets-item" style={{marginLeft:'10px', height:'121px'}}>
                      <li>预期利息：
                        <strong className="text-golden fz20">￥200,800.00</strong>
                      </li>
                      <li className="fz12"><span className="separator text-golden">●</span>已收利息：￥0.00</li>
                    </ul>
                  </Col>
                </Row>
                <div className="u-title">出借记录</div>
                <Form inline>
                  <FormSelectField
                    name="investStatus"
                    label="选择状态:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '等待计息' },
                      { value: 3, text: '正在还款' },
                    ]}
                    onChange = { this.onInvestStatus }
                  />
                  <FormSelectField
                    name="type"
                    label="创建时间:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '最近3个月' },
                      { value: 3, text: '最近2个月' },
                      { value: 4, text: '最近7天' },
                    ]}
                    onChange = { this.onInvestTime }
                  />
                </Form>
                <ul className="m-invest">
                  <li className="m-invest-li">
                    <Row>
                      <Col span={5}>
                        <div className="li-item"><strong>企信宝170期</strong></div>
                        <div className="li-item">已收收益： ￥0.98</div>
                        <div className="li-item">预期收益： ￥2.13</div>
                      </Col>
                      <Col span={6}>
                        <div className="li-item">协议约定借款年化利率：<strong className="text-golden fz14">8.5%</strong></div>
                        <div className="li-item">出借金额：￥10300.00</div>
                        <div className="li-item">抵扣金额：￥50.00</div>
                      </Col>
                      <Col span={6}>
                        <div className="li-item">出借时间： 2018-09-04 19:21:32</div>
                        <div className="li-item">到期时间：2018-12-04 23:59:59</div>
                        <div className="li-item">获得金币：250个</div>
                      </Col>
                      <Col span={7}>
                        <div className="li-item">
                          正在还款
                          <div className="progress-outer">
                            <div className="progress-inner" style={{width:'50%'}}></div>
                          </div>
                        </div>
                        <div className="li-item">
                          <Link to="/account/lend_detail/111" className="u-btn linear-golden">查看详情</Link>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="m-invest-li">
                    <Row>
                      <Col span={5}>
                        <div className="li-item"><strong>企信宝170期</strong></div>
                        <div className="li-item">已收收益： ￥0.98</div>
                        <div className="li-item">预期收益： ￥2.13</div>
                      </Col>
                      <Col span={6}>
                        <div className="li-item">协议约定借款年化利率：<strong className="text-golden fz14">8.5%</strong></div>
                        <div className="li-item">出借金额：￥10300.00</div>
                        <div className="li-item">抵扣金额：￥50.00</div>
                      </Col>
                      <Col span={6}>
                        <div className="li-item">出借时间： 2018-09-04 19:21:32</div>
                        <div className="li-item">到期时间：2018-12-04 23:59:59</div>
                        <div className="li-item">获得金币：250个</div>
                      </Col>
                      <Col span={7}>
                        <div className="li-item">
                          正在还款
                          <div className="progress-outer">
                            <div className="progress-inner" style={{width:'50%'}}></div>
                          </div>
                        </div>
                        <div className="li-item">
                          <Link to="/account/assets" className="u-btn linear-golden">查看详情</Link>
                        </div>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel
              tab="资金明细"
              id="2"
            >
              <div className="m-tab-con">
                <div className="u-title" style={{marginTop:'-20px'}}>资金明细</div>
                <Form inline>
                  <FormSelectField
                    name="type"
                    label="选择状态:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '收入' },
                      { value: 3, text: '支出' },
                    ]}
                    onChange = { this.onSelectChange }
                  />
                  <FormSelectField
                    name="type"
                    label="创建时间:"
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

const WrappedForm = createForm()(Assets);

export default WrappedForm;
