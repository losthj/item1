import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Top extends Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <ul className="nav-l">
            <li className="tel">400-008-8782</li>
            <li className="splitter"></li>
            <li className="phone">移动端下载</li>
            <li className="info">风险提示：网络借贷为自愿，出借资金须谨慎。风险意识记心上，本息损失皆自担</li>
          </ul>
          <ul className="nav-r">
            <li>
              <Link to="/mall">金币商城</Link>
            </li>
            <li>
              <Link className="text-yellow-3" to="/login">登录</Link>
            </li>
            <li>
              <Link to="/register">注册</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}



export default Top;
