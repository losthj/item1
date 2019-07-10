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
  .zent-grid-tfoot{
      margin:20px 0;
  }
`
const columns = [
    {
      title: '账号',
      name: 'name',
      nowrap: true,
      onCellClick: data => {
        console.log(data, 'data');
      }
    }, {
      title: '出借金额（元）',
      name: 'uv'
    }, {
      title: '出借时间',
      name: 'stock'
    }
    , {
        title: '出借方式',
        name: 'stock1'
      }
      , {
        title: '状态',
        name: 'stock2'
      }
  ];
  
  const totalItem = 10;
  
  const datasets = [];
 // const datasets2 = [];
  
  for (let i = 0; i < 10; i++) {
    datasets.push({
      id: `f-${i}`,
      name: `139****265`,
      uv: '100,000.00',
      stock:  "	2019-02-27 14:09:13",
      stock1:  "无",
      stock2:  "成功",
    })
    // datasets2.push({
    //   id: `s-${i}`,
    //   name: `宠物商品 ${i}`,
    //   uv: 20,
    //   stock: "无"
    // })
  }
  
class Investlist extends PureComponent  {
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
            datasets={datasets}
            pageInfo={{
            current: current,
            totalItem: totalItem,
            pageSize: [ {value: 10, isCurrent: true}, 10 ]
            }}
            onChange={this.onChange}
            ellipsis
        />
          </Detail>
        
      );
    }
  }
  export default Investlist;
  