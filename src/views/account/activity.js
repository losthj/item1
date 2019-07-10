import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'zent';

class Activity extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 1,
      totalItem: 1000
    }
  }
  onChange = (page) => {
    this.setState({
      current: page
    });
  };
  render() {
    return (
      <Fragment>
        <div className="chart-title" style={{margin:'30px 0'}}>
          最新活动
        </div>
        <ul className="active-list">
          <li className="active-item">
            <Link to="">
              <img src="https://img.jylc168.com/Upload/Common/2018-07-12/7c0f5b46c798dee9d.jpg" alt=""/>
            </Link>
            <Link to="" className="u-btn linear-golden">点击进入</Link>
          </li>
          <li className="active-item active-over">
            <Link to="">
              <img src="https://img.jylc168.com/Upload/Common/2018-07-12/7c0f5b46c798dee9d.jpg" alt=""/>
            </Link>
            <Link to="" className="u-btn linear-golden filterGray">活动已结束</Link>
          </li>
        </ul>
        <Pagination
          current={this.state.current}
          totalItem={this.state.totalItem}
          onChange={this.onChange}
          maxPageToShow={12}
        />
      </Fragment>
    );
  }
}

export default Activity;
