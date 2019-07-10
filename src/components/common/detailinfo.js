import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Grid } from 'zent';

const Detail = styled.div`
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
`
const columns = [
    {
      title: '周期',
      name: 'name',
      nowrap: true,
      onCellClick: data => {
        console.log(data, 'data');
      }
    }, {
      title: '借款资金运用情况',
      name: 'uv'
    }, {
      title: '经营、财务状况',
      name: 'stock'
    }
    , {
        title: '还款能力变化情况',
        name: 'stock1'
      }
      , {
        title: '逾期情况',
        name: 'stock2'
      }
      , {
        title: '涉诉情况',
        name: 'stock3'
      }
      , {
        title: '受行政处罚情况',
        name: 'stock4'
      }
      , {
        title: '重大信息',
        name: 'stock5'
      }
  ];
  
  const totalItem = 10;
  
  const datasets = [];
  const datasets2 = [];
  
  for (let i = 0; i < 5; i++) {
    datasets.push({
      id: `f-${i}`,
      name: `母婴商品 ${i}`,
      uv: 20,
      stock:  "无",
      stock1:  "无",
      stock2:  "无",
      stock3:  "无",
      stock4:  "无",
      stock5:  "无"
    })
    datasets2.push({
      id: `s-${i}`,
      name: `宠物商品 ${i}`,
      uv: 20,
      stock: "无"
    })
  }
  

class Detailinfo extends PureComponent  {
    state = {
        current: 1,
        datasets
      }
    
      onChange = ({ current, pageSize }) => {
        this.setState({
          current,
          pageSize,
        })
      }
    render() {
        
    const { current } = this.state;
      return (
          <Detail>
            <Grid
            columns={columns}
            datasets={current === 1 ? datasets : datasets2}
            pageInfo={{
            current: current,
            totalItem: totalItem,
            pageSize: [ {value: 5, isCurrent: true}, 10 ]
            }}
            onChange={this.onChange}
            ellipsis
        />
          </Detail>
        
      );
    }
  }
  export default Detailinfo;
  