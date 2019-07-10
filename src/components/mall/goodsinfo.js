import React, { PureComponent } from "react";
import styled from 'styled-components';
import { Tabs,Icon,Grid  } from 'zent';
import Message from '@components/mall/message';

const TabPanel = Tabs.TabPanel;
const GoodsInfo = styled.div`
  .zent-tabs-nav-content{
    height:48px;
    margin-bottom:0;
  }
  .zent-tabs .zent-tabs-actived{
    background: linear-gradient(#cdb37d, #a18b64);
    color:#ffffff;
  }
  .zent-tabs-tab{
    background-color:#ffffff;
  }
  .zent-tabs-tab:first-child,.zent-tabs-tab:last-child{
    border-radius:0;
  }
  .zent-tabs-tab-inner{
    width:282px;
    height: 48px;
    padding:0;
    line-height:48px;
    font-size:14px;
  }
  .info-img{
    margin-top:20px;
  }

  .zent-grid-th{
    background-color:#ffffff;
}
  .zent-grid-th,.zent-grid-td{
    text-align: center;
    font-size: 14px;
  }
  .zent-pagination .pagination-list .pager--current{
    background: #a48413;
    border-color: #a48413;
  }
  .zent-grid-tfoot{
      margin:20px 0;
  }
  .message-head{
    line-height:40px;
  }
`

const columns = [
  {
    title: '用户名',
    name: 'name',
    nowrap: true,
    onCellClick: data => {
      console.log(data, 'data');
    }
  }, {
    title: '使用金币',
    name: 'uv'
  }, {
    title: '出借时间',
    name: 'stock'
  }
];

const totalItem = 10;

const datasets = [];

for (let i = 0; i < 10; i++) {
  datasets.push({
    id: `f-${i}`,
    name: `139****265`,
    uv: '100,000.00',
    stock:  "	2019-02-27 14:09:13",
  })
}


class Goodsinfo extends PureComponent {
  state = {
    activeId: '1'
  }

  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }

  render() {
    const { current } = this.state;
    return (
      <GoodsInfo>
        <Tabs activeId={this.state.activeId} onChange={this.onTabChange} >
                <TabPanel tab="商品详情" id="1">
                  <div>
                      <div className="mall-warn mall-warn1">
                          <ul>
                              <li><Icon type="warning" />小囧温馨提示</li>
                              <li>1. 囧羊平台金币商城，实物商品满6000金币起兑换，虚拟商品无此限制！</li>
                              <li>2. 实物商品如出现断货缺货情况，客服人员将尽快与您联系，请您谅解！</li>
                              <li>3. 实物商品发货到货正常时间为3-5个工作日，虚拟商品正常情况1个工作日发放！</li>
                              <li>4. 虚拟商品一经发放不可取消，请谨慎兑换！ </li>
                          </ul>
                      </div>
                      <div className="info-img">
                        
                      </div>
                  </div>
                </TabPanel>
                <TabPanel tab="兑换记录" id="2">
                  <div>
                    <Grid columns={columns} datasets={datasets} pageInfo={{current: current,totalItem: totalItem,                    pageSize: [ {value: 10, isCurrent: true}, 10 ]}} onChange={this.onChange} ellipsis />
                  </div>
                </TabPanel>
                <TabPanel tab="用户点评" id='3'>
                  <div>
                    <div className="message-head">留言</div>
                    <div>
                      <Message></Message>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
      </GoodsInfo>
    );
  }
}
export default Goodsinfo;  