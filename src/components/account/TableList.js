import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'zent';

const Wrapper = styled.div`
  .zent-grid-table {
    text-align:center;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }
  .zent-grid-th{
    font-weight:800;
    font-size:14px;
    color:#a99573!important;
    background-color:#f5f2e9;
    padding:15px 10px;
  }
  .zent-grid-tr:hover {
    background-color:#f5f2e9;
  }
  .zent-grid-td{
    padding:13px 10px;
  }
  .zent-checkbox {
    top:-2px;
    left:10px;
  }
`
class TableList extends Component {
  render(){
    const { current,columns,datasets,pageSize,totalItem,onChange,selection } = this.props;
    return (
      <Wrapper>
        <Grid
            columns={columns}
            datasets={datasets}
            pageInfo={{
              current: current,
              pageSize: pageSize,
              totalItem: totalItem,
            }}
            onChange={onChange}
            selection={selection}
            ellipsis
          />
      </Wrapper>
    )
  }
}

export default TableList;