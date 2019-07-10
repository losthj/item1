import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'zent';
import TableList from '@components/account/TableList';
const { Row, Col } = Layout
// 充值记录
const columns = [
  {
    title: '期数',
    name: 'date'
  },{
    title: '时间',
    name: 'time'
  }, {
    title: '回收本金（元）',
    name: 'origin'
  }, {
    title: '预期收益（元）',
    name: 'expect'
  }, {
    title: '服务费（元）',
    name: 'service'
  }, {
    title: '累计回收（元）',
    name: 'total'
  }, {
    title: '还款状态',
    name: 'status',
    className: 'text-red'
  }
];
const datasets = [];
for (let i = 0; i < 10; i++) {
  datasets.push({
    id: `${i}`,
    date: `第${i}期`,
    time: `2019-01-14`,
    origin: '10000.00',
    expect: '20.00',
    service: '2',
    total: '10009.00',
    status: '待回款'
  })
}

class LendDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      datasets
    }
  }
  render() {
    return (
      <div className="m-charge">
        <div className="charge-title" style={{border:'none'}}>
          我的出借
        </div>
        <div className="m-tab-con">
          <div className="m-lend-info">
            <div className="lend-info-title">
              <Link to=""><strong>企信宝170期</strong></Link>
            </div>
            <Row>
              <Col className="lend-info-item" span={6}>
                <div>订单编号    jylc000087520</div>
                <div>协议约定借款年化利率     8.5%</div>
                <div>收益方式     先息后本</div>
              </Col>
              <Col className="lend-info-item" span={6}>
                <div>出借金额     ￥100.00</div>
                <div>获得金币      2</div>
                <div>抵扣金额     ￥0.00</div>
              </Col>
              <Col className="lend-info-item" span={6}>
                <div>购买时间    2019-01-11 11:16:44</div>
                <div>到期时间    2019-04-12 23:59:59</div>
                <div>获得金币    90天</div>
              </Col>
              <Col className="lend-info-item" span={6}>
                <div>出借人        唐博湖</div>
                <div>身份证号    310113********0052</div>
                <div>联系电话    137****152</div>
              </Col>
            </Row>
            <div className="lend-pact">
              <a href="lend_detail/111">下载合同</a>
            </div>
            <img src="https://img.jylc168.com/Asset/User/common/image/icon/hk_1.png" alt="" className="lend-result"/>
          </div>
          <div className="u-title">回款计划</div>
          <TableList 
            columns={columns} 
            current={this.state.current}
            pageSize= {this.state.pageSize}
            totalItem={30}
            datasets = {datasets}
            onChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default LendDetail;
