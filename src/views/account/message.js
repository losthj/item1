import React, { Component } from 'react';
import { Form } from 'zent';
import ReactTooltip from 'react-tooltip'
import TableList from '@components/account/TableList';
const { FormSelectField, createForm } = Form;
// 充值记录
const columns = [
 {
    title: '类型',
    name: 'type',
    width: 130,
  }, {
    title: '内容',
    name: 'content',
    width: 530,
  }, {
    title: '时间',
    name: 'time'
  }
];
const datasets = [];
for (let i = 0; i < 5; i++) {
  datasets.push({
    id: `${i}`,
    type: '还款通知',
    content: <div className="txo" data-tip="尊敬的客户：2018年11月04日23点59分您投资的喜羊系列 企信宝71期收益回款金额72.96元已经到账，更多优质项目等您来投，感谢您的支持！">尊敬的客户：2018年11月04日23点59分您投资的喜羊系列 企信宝71期收益回款金额72.96元已经到账，更多优质项目等您来投，感谢您的支持！<ReactTooltip place="top" type="dark" effect="float"/></div>,
    time: `2019-01-14 10:10:00`,
  })
}

class Message extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 1,
      pageSize: 10,
      datasets,
      selectedRowKeys: [],
    }
  }
  onSelectType = (value) => {
    console.log(value)
  }
  onSelectTime = (value) => {
    console.log(value)
  }
  onChange = (checkedList) => {
    console.log(checkedList);
    this.setState({ checkedList });
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
    
  }
  render() {
    return (
      <div className="m-charge">
        <div className="chart-title" style={{margin:'10px 0 30px'}}>
          站内消息
        </div>
        <div className="m-tab-con">
          <Form inline>
            <FormSelectField
              name="type"
              label="选择类型:"
              data={[
                { value: 1, text: '全部' },
                { value: 2, text: '系统公告' },
                { value: 3, text: '收益通知' },
                { value: 4, text: '活动通知' },
              ]}
              onChange = { this.onSelectType }
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
            <div className="message-btn">
              <span>全选</span>
              <span>标为已读</span>
              <span>删除</span>
            </div>
          </Form>
          <TableList 
            columns={columns} 
            current={this.state.current}
            pageSize= {this.state.pageSize}
            totalItem={30}
            datasets = {datasets}
            onChange={this.onPageChange}
            selection={{
              selectedRowKeys: this.state.selectedRowKeys,
              onSelect: (selectedRowKeys, selectedRows, currentRow) => {
                console.log(selectedRowKeys);
                this.setState({
                  selectedRowKeys
                });
              }
            }}
          />
        </div>

      </div>
    );
  }
}
const WrappedForm = createForm()(Message);
export default WrappedForm;
