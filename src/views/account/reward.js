import React, { Component } from 'react';
import { Tabs, Form, Pagination, Layout } from 'zent';
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
    title: '金币存入（元）',
    name: 'come',
    className: 'text-green'
  }, {
    title: '金币支出（元）',
    name: 'out',
    className: 'text-red'
  }, {
    title: '金币存量（元）',
    name: 'have'
  }, {
    title: '备注',
    name: 'info'
  }
];
const columns2 = [
  {
    title: '时间',
    name: 'time'
  }, {
    title: '奖品名称',
    name: 'come',
  }, {
    title: '来源',
    name: 'out',
  }, {
    title: '备注',
    name: 'have'
  }, {
    title: '状态',
    name: 'info'
  }
];
const datasets = [];
for (let i = 0; i < 10; i++) {
  datasets.push({
    id: `${i}`,
    time: `2019-01-14 10:10:00`,
    come: '+1000 ',
    out: '-1000',
    have: `1000`,
    info: '成长任务'
  })
}

class Reward extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeId: '1',
      ticktPage: {
        current: 1,
        totalItem: 1000
      },
      coin: {
        current: 1,
        pageSize: 10,
        total: 20,
        datasets
      },
      record: {
        current: 1,
        pageSize: 5,
        total: 30,
        datasets
      }
    }
  }
  componentWillReceiveProps(props){
    this.onTabChange(props.match.params.id)
  } 
  onTicktChange = (page) => {
    this.setState({
      ticktPage: {
        current: page
      }
    });
  };
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }
  onSelectCardType = (value) => {
    console.log('券类型',value)
  }
  onSelectCardStatus = (value) => {
    console.log('券状态',value)
  }
  onSelectCardTime = (value) => {
    console.log('券时间',value)
  }
  onSelectChange = (value) => {
    console.log(value)
  }
  onSelectTime = (value) => {
    console.log('金币时间：',value)
  }
  onSelectRecord = (time) => {
    console.log('记录：', time)
  }
  // 金币分页
  CoinPageChange = ({ current, pageSize }) => {
    this.setState({
      coin: {
        current,
        pageSize,
      }
    })
  }
  // 金币分页
  RecordPageChange = ({ current, pageSize }) => {
    this.setState({
      record: {
        current,
        pageSize,
      }
    })
  }
  render() {
    const coin = this.state.coin;
    const record = this.state.record;
    return (
      <div className="m-charge">
        <div className="charge-title">
          奖励管理
        </div>
        <div className="m-tab">
          <Tabs
            activeId={this.state.activeId}
            onChange={this.onTabChange}
          >
            <TabPanel
              tab={<span>我的卡券</span>}
              id="1"
            >
              <div className="m-tab-con">
                <div className="u-title" style={{marginTop:'-20px'}}>我的卡券</div>
                <Row>
                  <Col span={8}>
                    <div className="charge-info">
                      可使用 
                      <strong className="text-golden">1000</strong>张
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="charge-info" style={{marginLeft:'10px'}}>
                      已使用 
                      <strong>1000</strong>张
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="charge-info" style={{marginLeft:'10px'}}>
                      已过期 
                      <strong>1000</strong>个
                    </div>
                  </Col>
                </Row>
                <div className="u-title" style={{marginTop:'-50px'}}>囧羊券</div>
                <Form inline>
                  <FormSelectField
                    name="type"
                    label="选择类型:"
                    data={[
                      { value: 1, text: '囧羊券' },
                      { value: 2, text: '提现券' },
                      { value: 3, text: '加息卡' },
                    ]}
                    onChange = { this.onSelectCardType }
                  />
                  <FormSelectField
                    name="type"
                    label="选择状态:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '未使用' },
                      { value: 3, text: '已使用' },
                      { value: 4, text: '已过期' },
                    ]}
                    onChange = { this.onSelectCardStatus }
                  />
                  <FormSelectField
                    name="type"
                    label="获得时间:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '最近3个月' },
                      { value: 3, text: '最近2个月' },
                      { value: 4, text: '最近7天' },
                    ]}
                    onChange = { this.onSelectCardTime }
                  />
                </Form>
                <div className="cashs-list">
                  <ul className="clearfix">
                    <li className="cashs-over">
                      <div className="cashs-b">
                        现金券来源：平台活动奖励 <br/>
                        <span className="cashs-number">680</span>
                        <div className="cashs-text">
                          有效期至：2018-12-28 23:59:59 <br/>
                          单笔满800000抵680元（项目期限≥3个月）
                        </div>
                        <div className="renew-btn"></div>
                      </div>
                    </li>
                    <li className="cashs-use">
                      <div className="cashs-b">
                        现金券来源：平台活动奖励
                        <p><span className="cashs-number">680</span></p>
                        <div className="cashs-text">
                          有效期至：2018-12-28 23:59:59 <br/>
                          单笔满800000抵680元（项目期限≥3个月）
                        </div>
                        <div className="renew-btn"></div>
                      </div>
                    </li>
                    <li>
                      <div className="cashs-b">
                        现金券来源：平台活动奖励
                        <p><span className="cashs-number">680</span></p>
                        <div className="cashs-text">
                          有效期至：2018-12-28 23:59:59 <br/>
                          单笔满800000抵680元（项目期限≥3个月）
                        </div>
                        <div className="renew-btn"></div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <img src="https://img.jylc168.com/Asset/User/common/image/card/extract-3.jpg" alt="" />        
                      </li>
                      <li>
                      <img src="https://img.jylc168.com/Asset/User/common/image/card/extract-4.jpg" alt="" />        
                      </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                    <li className="interest-use">
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                    <li className="interest-over">
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                    <li className="interest-use">
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                    <li className="interest-over">
                      <div className="interest-b">
                        <div className="interest-text">
                          部分项目可用（出借后生效）
                        </div>
                        <div className="interest-rate"> 0.2% </div>
                        <div className="interest-bottom">
                           来源：囧羊课堂每月任务奖励
                          <br />
                           有效期至：2099-01-01 00:00:00
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="gold-b">
                        <div className="gold-rate">2</div>
                        <div className="gold-times">
                          有效期：2019-03-14 至 2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                    <li className="gold-use">
                      <div className="gold-b">
                        <div className="gold-rate">2</div>
                        <div className="gold-times">
                          有效期：2019-03-14 至 2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                    <li className="gold-over">
                      <div className="gold-b">
                        <div className="gold-rate">2</div>
                        <div className="gold-times">
                          有效期：2019-03-14 至 2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="sale-b">
                          <div className="sale-rate">8</div>
                          <div className="sale-times">
                              有效期至：2019-04-13 11:53:43 <br />
                              仅限实物商品打折
                          </div>
                      </div>
                    </li>
                    <li className="sale-use">
                      <div className="sale-b">
                          <div className="sale-rate">8</div>
                          <div className="sale-times">
                              有效期至：2019-04-13 11:53:43 <br />
                              仅限实物商品打折
                          </div>
                      </div>
                    </li>
                    <li className="sale-over">
                      <div className="sale-b">
                        <div className="sale-rate">8</div>
                        <div className="sale-times">
                            有效期至：2019-04-13 11:53:43 <br />
                            仅限实物商品打折
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="travel-b">
                        <div className="travel-times">
                          有效期至：2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                    <li className="travel-use">
                      <div className="travel-b">
                        <div className="travel-times">
                          有效期至：2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                    <li className="travel-over">
                      <div className="travel-b">
                        <div className="travel-times">
                          有效期至：2019-04-13 11:53:43
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="clearfix">
                    <li>
                      <div className="aegis-b">
                        <div className="aegis-times">
                          可抵免一次年底金币清零
                        </div>
                      </div>
                    </li>
                    <li className="aegis-use">
                      <div className="aegis-b">
                        <div className="aegis-times">
                          可抵免一次年底金币清零
                        </div>
                      </div>
                    </li>
                    <li className="aegis-over">
                      <div className="aegis-b">
                        <div className="aegis-times">
                          可抵免一次年底金币清零
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Pagination
                    current={this.state.ticktPage.current}
                    totalItem={this.state.ticktPage.totalItem}
                    onChange={this.onTicktChange}
                    maxPageToShow={12}
                  />
                </div>

              </div>
            </TabPanel>
            <TabPanel
              tab="我的金币"
              id="2"
            >
              <div className="m-tab-con">
                <div className="u-title" style={{marginTop:'-20px'}}>我的金币</div>
                <Row>
                  <Col span={12}>
                    <div className="charge-info">
                      可使用 
                      <strong className="text-golden">1000</strong>个
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="charge-info" style={{marginLeft:'10px'}}>
                      已使用 
                      <strong className="text-golden">1000</strong>个
                    </div>
                  </Col>
                </Row>
                
                <div className="u-title">金币记录</div>
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
                      { value: 3, text: '最近1个月' },
                      { value: 4, text: '最近7天' },
                    ]}
                    onChange = { this.onSelectTime }
                  />
                </Form>
                <TableList 
                  columns={columns} 
                  current={coin.current}
                  pageSize= {coin.pageSize}
                  totalItem={coin.total}
                  datasets = {coin.datasets}
                  onChange={this.CoinPageChange}
                />
              </div>
            </TabPanel>
            <TabPanel
              tab={<span>奖励记录</span>}
              id="3"
            >
              <div className="m-tab-con">
                <div className="u-title" style={{marginTop:'-20px'}}>奖励记录</div>
                <Form inline>
                  <FormSelectField
                    name="type"
                    label="创建时间:"
                    data={[
                      { value: 1, text: '全部' },
                      { value: 2, text: '最近3个月' },
                      { value: 3, text: '最近1个月' },
                      { value: 4, text: '最近7天' },
                    ]}
                    onChange = { this.onSelectRecord }
                  />
                </Form>
                <TableList 
                  columns={columns2} 
                  current={record.current}
                  pageSize= {record.pageSize}
                  totalItem={record.total}
                  datasets = {datasets}
                  onChange={this.RecordPageChange}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

const WrappedForm = createForm()(Reward);

export default WrappedForm;
