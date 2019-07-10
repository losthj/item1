import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reminder from '@containers/common/reminder';
import { Form, Layout, CopyButton } from 'zent';
import TableList from '@components/account/TableList';
const { FormSelectField, createForm } = Form;
const { Row, Col } = Layout
// 充值记录
const columns = [
 {
    title: '邀请用户',
    name: 'name'
  }, {
    title: '时间',
    name: 'time'
  }, {
    title: '出借次数',
    name: 'num'
  }, {
    title: '获得奖励（元）',
    name: 'get'
  }
];
const datasets = [];
for (let i = 0; i < 4; i++) {
  datasets.push({
    id: `${i}`,
    name: '138****3289',
    time: `2019-01-14 10:10:00`,
    num: '1111',
    get: '1000.00 '
  })
}

class Friend extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 1,
      pageSize: 10,
      datasets
    }
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
  componentDidMount(){
     // 分享
    window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "分享您的邀请二维码", "bdMini": "1", "bdMiniList": false, "bdPic": "jylc168.com/download/qrcode?i={:mm('u'.session('user_id'))}", "bdUrl": "http://m.jylc168.com/access/reg?invite={:mm('u'.session('user_id'))}", "bdStyle": "0", "bdSize": "32" }, "share": {}};
      let script = document.createElement('script');
        script.src = "https://img.jylc168.com/Pc/account/index/share.js";
        document.body.appendChild(script);
  }
  render() {
    return (
      <div className="m-charge">
        <div className="chart-title" style={{margin:'10px 0 30px'}}>
          好友推荐
        </div>
        <div className="m-tab-con">
          <Row>
            <Col span={12}>
              <div className="charge-info">
                累计推荐人数 
                <strong className="text-golden">1000</strong>人
              </div>
            </Col>
            <Col span={12}>
              <div className="charge-info" style={{marginLeft:'10px'}}>
                累计获得奖励 
                <strong className="text-golden">1000.00</strong>元
              </div>
            </Col>
          </Row>
          <div className="task-title">您可以通过以下两种方式邀请好友</div>
          <div className="friend-share">
            <Row>
              <Col span={12}>
                <div className="share-title">
                  <span className="icon iconfont icon-sailboat text-golden"></span>
                  方式1：分享邀请链接
                </div>
                <div className="share-con share-img">
                  <div className="share-link">https://www.jylc168.com/access/reg? invite=etZh3VTJOtOnMSvrjmvS</div>
                  <div className="mt-20">
                    <CopyButton text="chttps://www.jylc168.com/access/reg? invite=etZh3VTJOtOnMSvrjmvS" onCopySuccess="复制成功啦！">
                      <div className="u-btn linear-golden">复制链接</div>
                    </CopyButton>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="share-title">
                  <span className="icon iconfont icon-sailboat text-golden"></span>
                  方式2：分享邀请二维码
                </div>
                <div className="share-con">
                  <div className="share-code flex-center">
                    <img src="https://www.jylc168.com/download/qrcode?i=x2_nQEoDOwlAVGdR5acJKA" alt=""/>
                  </div>
                  <div className="bdshare">
                    <div className="bdsharebuttonbox"><Link to="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></Link><Link to="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></Link><Link to="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></Link><Link to="#" className="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></Link></div>
                </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="task-title auto-bg">推荐步骤</div>
          <div className="tac">
            <img src="https://img.jylc168.com/Pc/account/index/friend_step.png" alt=""/>
          </div>
          <div className="u-title">我的好友</div>
          <Form inline>
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
        <div className="mt-30">
          <Reminder content="1. 尊敬的囧羊平台会员，您可以通过邀请好友注册囧羊平台网站，若好友进行出借您将获得奖励。<br />
  2. 您可以通过<span class='text-golden'>QQ、MSN等IM工作或者微博、微信与邮件</span>把上面的链接发送至您的好友，邀请他们加入进来。<br />
  3. 好友注册需采用邀请链接对应的页面，注意页面上的“邀请码”为已填状态，否则邀请不成功。" />
        </div>

      </div>
    );
  }
}
const WrappedForm = createForm()(Friend);
export default WrappedForm;
