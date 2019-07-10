import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FixRisk from '@containers/home/fixRisk';
import Paging from '@components/common/paging';
import { Layout } from 'zent';
import { Button } from 'zent';
import '@assets/home/home.scss'
import '@assets/home/about.css';
const { Row, Col } = Layout;


class Product extends Component {
  constructor(props){
      super(props);
      this.state = {
          loginState: true,
          project: [1,3,2,3]
      }
  }
  render() {
    return (
      <div>
         <div className="bd-wrap">
                <div className="container">
                  <div className="screen-lists">
                    <Row>
                      <Col span={3}>项目收益</Col>
                      <Col span={3}><Button className="active">全部</Button></Col>
                      <Col span={3}><Button>7%以下</Button></Col>
                      <Col span={3}><Button>7%-0.9%</Button></Col>
                      <Col span={3}><Button>0.9%以上</Button></Col>
                    </Row>
                    <Row>
                      <Col span={3}>项目状态</Col>
                      <Col span={3}><Button className="active">全部</Button></Col>
                      <Col span={3}><Button>预发布</Button></Col>
                      <Col span={3}><Button>可出借</Button></Col>
                      <Col span={3}><Button>还款中</Button></Col>
                      <Col span={3}><Button>已还款</Button></Col>
                    </Row>
                    <Row>
                      <Col span={3}>借款期限</Col>
                      <Col span={3}><Button className="active">全部</Button></Col>
                      <Col span={3}><Button>1-3个月</Button></Col>
                      <Col span={3}><Button>4-6个月</Button></Col>
                      <Col span={3}><Button>6个月以上</Button></Col>
                    </Row>
                    <Row>
                      <Col span={3}>还款方式</Col>
                      <Col span={3}><Button className="active">全部</Button></Col>
                      <Col span={3}><Button>先息后本</Button></Col>
                      <Col span={3}><Button>等额本息</Button></Col>
                      <Col span={3}><Button>一次性还本付息</Button></Col>
                    </Row>
                  </div>
                </div>
            </div>
            
            <div className="container">
            <div className="page-container">
                        <div className="project-main product-item" >
                            {
                              this.state.project.map((item,index) => (
                                <div className="project-item" key={index}>
                                    <div className="project-top">
                                        <Link to="">喜羊系列 企信宝200期</Link>
                                    </div>
                                    <Row>
                                      <Col span={4}>
                                        <div className="col-item rate-num">
                                            8.5 <span>%</span>
                                        </div>
                                        <div className="col-item">协议约定借款年化利率</div>
                                      </Col>
                                      <Col span={5}>
                                        <div className="col-item">
                                            <strong>90</strong>天
                                        </div>
                                        <div className="col-item">项目期限</div>
                                      </Col>
                                      <Col span={5}>
                                        <div className="col-item">
                                            <strong>0</strong>元
                                        </div>
                                        <div className="col-item">剩余金额</div>
                                      </Col>
                                      <Col span={5}>
                                        <div className="col-item">
                                            先息后本
                                        </div>
                                        <div className="col-item">还款方式</div>
                                      </Col>
                                      <Col span={5}>
                                          <div>
                                              <Link className={ index === 2 ? 'm-btn filterGray' : 'm-btn'} to="m-btn">出&nbsp;&nbsp;借</Link>
                                              <div className="progress-outter jy-f-r">
                                                <div className="progress-inner" style={{width: "79%"}}>
                                                </div>
                                              </div>
                                          </div>
                                      </Col>
                                    </Row>
                                </div>
                              ))
                            }
                        </div>
                        <Paging></Paging>
                      </div>
            </div>
      
        <FixRisk />
      </div>
    );
  }
}



export default Product;
