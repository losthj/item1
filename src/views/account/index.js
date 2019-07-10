import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from '@components/account/DatePicker'
import ProgressCircle from '@components/account/ProgressCircle'
import EchartsLine from '@components/account/EchartsLine';
import { Layout } from 'zent';

const { Row, Col } = Layout;

class Account extends Component {
  render() {
    return (
      <Fragment>
        <div className="chart-con">
          <div className="chart-title">
            账户预期总额
            <strong className="text-golden">
              ￥30000.00
            </strong>
            <span className="icon iconfont icon-eye text-golden"></span>
          </div>
          <Row className="chart-main">
            <Col span={6}>
              <ProgressCircle progress="66" />
              <div className="chart-num">￥30000.00</div>
              <div className="chart-txt">出借本金</div>
            </Col>
            <Col span={6}>
              <ProgressCircle progress="1" />
              <div className="chart-num">￥30000.00</div>
              <div className="chart-txt">可用余额</div>
            </Col>
            <Col span={6}>
              <ProgressCircle progress="18" />
              <div className="chart-num">￥30000.00</div>
              <div className="chart-txt">预期收益</div>
            </Col>
            <Col span={6}>
              <ProgressCircle progress="88" />
              <div className="chart-num">￥30000.00</div>
              <div className="chart-txt">冻结金额</div>
            </Col>
          </Row>
        </div>

        <div className="m-summary">
          <Row className="chart-row">
            <Col span={12}>
              <div className="chart-date">
                <div className="chart-title">
                  回款日历
                  <Link className="bill-link" to="/">
                    电子账单
                  </Link>
                </div>
                <div className="chart-date-con">
                  <DatePicker />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="chart-line">
                <div className="chart-title">收益统计</div>
                <EchartsLine />
                <div className="chart-line-txt tac">
                  <span>○</span>已收收益
                  <span>●</span>待收收益
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="account-calc">
          <div className="chart-title">出借项目统计</div>
          <Row className="calc-row">
            <Col span={6}>
              <div className="calc-col">
                回款项目中 <strong>10</strong>个
              </div>
            </Col>
            <Col span={6}>
              <div className="calc-col">
                已回款项目 <strong>10</strong>个
              </div>
            </Col>
            <Col span={6}>
              <div className="calc-col">
                投标中项目 <strong>10</strong>个
              </div>
            </Col>
            <Col span={6}>
              <div className="calc-col">
                预期收回项目 <strong>10</strong>个
              </div>
            </Col>
          </Row>
        </div>

      </Fragment>
    );
  }
}



export default Account;
