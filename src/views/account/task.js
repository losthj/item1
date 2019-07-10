import React, { Component } from 'react';
import Reminder from '@containers/common/reminder';
import { Tabs, Layout } from 'zent';
import '@assets/account/task.scss';

const { Row, Col } = Layout;
const TabPanel = Tabs.TabPanel;

class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeId: '2',
    }
  }
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }

  render() {
    return (
      <div className="m-charge">
        <div className="charge-title">
          成长任务
        </div>
        <div className="m-tab">
          <Tabs
            activeId={this.state.activeId}
            onChange={this.onTabChange}
          >
            <TabPanel
              tab={<span>新手任务</span>}
              id="1"
            >
              <div className="m-task">
                 <Row className="m-task-item">
                    <span className="icon iconfont icon-right"></span>
                    <Col span={8}>
                      <div className="task-item-con task-info">开通银行存管账户</div>
                    </Col>
                    <Col span={12}>
                      <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                    </Col>
                    <Col span={4}>
                      <div className="task-item-con">
                        <div className="u-btn linear-golden">领取奖励</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="m-task-item">
                    <span className="icon iconfont icon-right"></span>
                    <Col span={8}>
                      <div className="task-item-con task-info">关注“囧羊资讯”官方微信 订阅号：shjylc，并绑定账户</div>
                    </Col>
                    <Col span={12}>
                      <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                    </Col>
                    <Col span={4}>
                      <div className="task-item-con">
                        <div className="u-btn linear-golden filterGray">已领取</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="m-task-item m-task-wait">
                    <span className="icon iconfont icon-right"></span>
                    <Col span={8}>
                      <div className="task-item-con task-info">关注“囧羊资讯”官方微信 订阅号：shjylc，并绑定账户</div>
                    </Col>
                    <Col span={12}>
                      <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                    </Col>
                    <Col span={4}>
                      <div className="task-item-con">
                        <div className="wait-btn u-btn">去完成</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="m-task-item m-task-wait">
                    <span className="icon iconfont icon-right"></span>
                    <Col span={8}>
                      <div className="task-item-con task-info">开通银行存管账户</div>
                    </Col>
                    <Col span={12}>
                      <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                    </Col>
                    <Col span={4}>
                      <div className="task-item-con">
                        <div className="wait-btn u-btn">去完成</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="m-task-item m-task-wait">
                    <span className="icon iconfont icon-right"></span>
                    <Col span={8}>
                      <div className="task-item-con task-info">开通银行存管账户</div>
                    </Col>
                    <Col span={12}>
                      <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                    </Col>
                    <Col span={4}>
                      <div className="task-item-con">
                        <div className="wait-btn u-btn">去完成</div>
                      </div>
                    </Col>
                  </Row>
              </div>
            </TabPanel>
            <TabPanel
              tab="成长任务"
              id="2"
            >
              <div className="m-tab-con">
                <div className="task-title">01 首次签到任务<span className="fz12">（银币用户专享）</span></div>
                <div className="m-task">
                   <Row className="m-task-item">
                      <span className="icon iconfont icon-right"></span>
                      <Col span={8}>
                        <div className="task-item-con task-info">开通银行存管账户</div>
                      </Col>
                      <Col span={12}>
                        <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                      </Col>
                      <Col span={4}>
                        <div className="task-item-con">
                          <div className="u-btn linear-golden">领取奖励</div>
                        </div>
                      </Col>
                    </Row>
                </div>
                <div className="task-title">02 好友推荐任务<span className="fz12">（好友成功出借有奖）</span></div>
                <Row className="task-recommon">
                  <Col span={6} className="">
                     <div className="task-recommon-item">
                       <div className="recommon-corner">1-2<br/>人</div>
                       <div className="recommon-item-info">
                          <strong className="fz14 text-golden">0.2%加息卡</strong><br/>
                          推荐1位好友成功出借
                       </div>
                        <div className="u-btn linear-golden">领取奖励</div>
                     </div>
                  </Col>
                  <Col span={6} className="">
                     <div className="task-recommon-item">
                       <div className="recommon-corner">1-2<br/>人</div>
                       <div className="recommon-item-info">
                          <strong className="fz14 text-golden">0.2%加息卡</strong><br/>
                          推荐1位好友成功出借
                       </div>
                        <div className="u-btn linear-golden">领取奖励</div>
                     </div>
                  </Col>
                  <Col span={6} className="">
                     <div className="task-recommon-item">
                       <div className="recommon-corner">1-2<br/>人</div>
                       <div className="recommon-item-info">
                          <strong className="fz14 text-golden">0.2%加息卡</strong><br/>
                          推荐1位好友成功出借
                       </div>
                        <div className="u-btn linear-golden">领取奖励</div>
                     </div>
                  </Col>
                  <Col span={6} className="">
                     <div className="task-recommon-item">
                       <div className="recommon-corner">1-2<br/>人</div>
                       <div className="recommon-item-info">
                          <strong className="fz14 text-golden">0.2%加息卡</strong><br/>
                          推荐1位好友成功出借
                       </div>
                        <div className="u-btn linear-golden">领取奖励</div>
                     </div>
                  </Col>
                </Row>
                <ul className="recommon-progress">
                  <li className="get-recommon"><span>0</span></li>
                  <li className="get-recommon"></li>
                  <li className="get-recommon"></li>
                  <li className="get-recommon"></li>
                  <li className="get-recommon"><i className="arr-bg">6人</i></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li><span>10+</span></li>
                </ul>

                <div className="merge-btn u-btn linear-golden">合并加息卡</div>

                <div className="task-title">03 出借任务<span className="fz12">（出借越多奖励越多）</span></div>
                <div className="m-task">
                   <Row className="m-task-item">
                      <span className="icon iconfont icon-right"></span>
                      <Col span={8}>
                        <div className="task-item-con task-info">开通银行存管账户</div>
                      </Col>
                      <Col span={12}>
                        <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                      </Col>
                      <Col span={4}>
                        <div className="task-item-con">
                          <div className="u-btn linear-golden">领取奖励</div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="m-task-item">
                      <span className="icon iconfont icon-right"></span>
                      <Col span={8}>
                        <div className="task-item-con task-info">开通银行存管账户</div>
                      </Col>
                      <Col span={12}>
                        <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                      </Col>
                      <Col span={4}>
                        <div className="task-item-con">
                          <div className="u-btn linear-golden">领取奖励</div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="m-task-item m-task-wait">
                      <span className="icon iconfont icon-right"></span>
                      <Col span={8}>
                        <div className="task-item-con task-info">开通银行存管账户</div>
                      </Col>
                      <Col span={12}>
                        <div className="task-item-con"><strong className="fz16 text-golden">100</strong> 金币</div>
                      </Col>
                      <Col span={4}>
                        <div className="task-item-con">
                          <div className="u-btn linear-golden">领取奖励</div>
                        </div>
                      </Col>
                    </Row>
                </div>
                <div className="task-explain taj">备注：在借本金指用户在活动期间新出借的本金的最大值，包括满标还款中的出借本金和未满标冻结中的出借本金。<br/>举个例子：小囧在2019年2月10日出借了平台90天项目28万元，即可拿到30元+50元+100元+100元+100元+200元=580元的成长任务奖励，在2019年5月11日项目结束回款28万元，小囧拿着28万元回款续投平台项目，那么不再享有同等条件奖励，但是小囧如果再增资出借2万元，那么小囧又可以拿到200元京东e卡任务奖励。</div>
                <div className="u-title">成长任务规则</div>
                 <Reminder content="1.   活动时间：2019年2月1日（00:00:00）-6月30日（23:59:59）。<br />2.   用户完成每项任务可叠加获得奖励。<br />3.   虚拟奖励系统在领取后一个工作日内自动发放，实物奖励领取需认真填写“收货地址”，我们将尽快为您寄出。<br />4.   本课程解释权归囧羊平台所有，如有疑问请致电在线小羊或拨打400-008-8782。" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Task;
