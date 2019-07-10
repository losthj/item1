import React, { PureComponent  } from 'react';
import { Pagination } from 'zent';
import styled from 'styled-components';

const Page = styled.div`
    margin-top:50px;
    height: 40px;
    background:#fff;
    .zent-pagination .pagination-list .pager--current{
        background:#a48413;
        border-color:#a48413;
    }
    .zent-pagination .pagination-list .pager--jump{
        display:none;
    }
`
class Paging extends PureComponent  {
    state = {
        current: 1,
        totalItem: 1000
      }
    
    render() {
     
      return (
        <Page>
            <Pagination
                current={this.state.current}
                totalItem={this.state.totalItem}
                onChange={this.onChange}
                maxPageToShow={10}
            />
        </Page>
      );
    }
    onChange = (page) => {
        this.setState({
          current: page
        });
      };
  }

  export default Paging;