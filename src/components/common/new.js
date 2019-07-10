import React, { PureComponent  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'zent';
const { Row, Col } = Layout;

const Rownews = styled.div`
  .zent-row{
    height:50px;
    line-height:50px;
    font-size:14px;
  }
  .zent-row:hover{
    color:#bfa451;
  }
  .zent-col:first-child{
    background:url(https://img.jylc168.com/Pc/home/about/new-icon1.png) no-repeat center center;
    width: 68px;
    line-height: 50px;
    height: 50px;
  }
  .zent-row:hover .zent-col:first-child{
    background-image:url(https://img.jylc168.com/Pc/home/about/new-icon2.png)
  }
  .zent-col:last-child{
    text-align: right;
  }
`
function ListItem(){
    return  <Link to="/">
    <Row > 
    <Col span={2}></Col>
    <Col span={18}>《上海拙赢金融信息服务有限公司反欺诈制度》</Col>
    <Col span={4}>2018-12-29 10:27</Col>
    </Row>
  </Link>
};

class New extends PureComponent  {
    render() {
      return (
        <Rownews>
            {this.props.numbers.map((number,index) => 
            <ListItem key={index} />
            )}
        </Rownews>
      );
    }
  }
  export default New;
  