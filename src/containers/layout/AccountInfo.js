import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountInfo extends Component {
  render(){
    return (
      <div className="m-account-info clearfix">
        <ul className="m-account clearfix">
          <li className="m-account-item">
            <div className="u-title">
              可用余额
              <span className="icon iconfont icon-eye"></span>
            </div>
            <div className="u-number">￥30000.00</div>
            <div className="u-btn-con">
              <Link to="/account/recharge" className="u-btn linear-golden">充值</Link>
              <Link to="/account/withdrawal" className="u-btn">提现</Link>
            </div>
          </li>
          <li className="m-account-item">
            <div className="u-title">
              已收收益
              <span className="icon iconfont icon-eye"></span>
            </div>
            <div className="u-number">￥30000.00</div>
          </li>
        </ul>
        <ul className="m-extra clearfix">
          <li className="m-extra-li">
            <div className="u-title">最新活动</div>
            <div className="m-extra-img"></div>
            <div className="m-extra-info">
              <strong>211</strong>个
            </div>
            <Link className="m-extra-btn" to="/account/activity">
              查看
            </Link>
          </li>
          <li className="m-extra-li">
            <div className="u-title">金币</div>
            <div className="m-extra-img"></div>
            <div className="m-extra-info">
              <strong>211</strong>个
            </div>
            <Link className="m-extra-btn" to="/account/reward/2">
              使用
            </Link>
          </li>
          <li className="m-extra-li">
            <div className="u-title">囧羊券</div>
            <div className="m-extra-img"></div>
            <div className="m-extra-info">
              <strong>211</strong>张
            </div>
            <Link className="m-extra-btn" to="/account/reward/1">
              使用
            </Link>
          </li>
          <li className="m-extra-li">
            <div className="u-title">加息卡</div>
            <div className="m-extra-img"></div>
            <div className="m-extra-info">
              <strong>211</strong>张
            </div>
            <Link className="m-extra-btn" to="/account/reward/1">
              使用
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default AccountInfo;