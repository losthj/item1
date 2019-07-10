import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout,Badge } from 'zent';
const { Row, Col } = Layout;

const Columns = styled.div`
    margin-bottom:20px;
    height:90px;
    background: url(https://img.jylc168.com/Pc/mall/index/icon1.png) no-repeat 0 0;
    width:100%;
    text-align:center;
    .zent-row{
        position: relative;
        top: 38px;
    }
    .zent-col {
        border-right:1px solid #a2895d;
    }
   .zent-col:nth-of-type(4){
       border:0;
   }
    .zent-col a{
        display:block;
        color:#ffffff;
        height:17px;
        font-size:16px;
        line-height:16px;
    }
    .zent-badge.zent-badge--has-content .zent-badge-count{
        top: -11px;
        right: -11px;
    }
`

class Column extends PureComponent {
    render(){
        return(
           <Columns>
               <Row>
                   <Col span={6}>
                    <Link to="#">我的订单</Link>
                   </Col>
                   <Col span={6}>
                   <Link to="#">我的收藏</Link>
                   </Col>
                   <Col span={6}>
                   <Link to="#">收货地址</Link>
                   </Col>
                   <Col span={6}>
                   <Link to="#">
                    <Badge count={5}>
                        购物车
                    </Badge>
                   </Link>
                   </Col>
               </Row>
           </Columns>

        )
    }
}

export default Column;  