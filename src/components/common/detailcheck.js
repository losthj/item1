import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Layout,Tag,Form,Badge,Icon,Button} from 'zent';
const { Row, Col } = Layout
const {FormSelectField,createForm } = Form;

const Check = styled.div`
.zent-dialog-r{padding:0}
.zent-form,.zent-form__control-group,.zent-form--horizontal .zent-form__control-label + .zent-form__controls{margin:0}
.zent-form--horizontal .zent-form__control-label{width:0;}
`
const Maskpop = styled.div`
padding:20px
.zent-row{
  height:37px;line-height:35px;
}
span{
  color:#bea551;
}
`
const Maskcircle = styled.div`
padding:0 20px; 
background:#ffefba;
height:60px;
line-height:60px;
font-size:12px;
.zenticon{
  color:#bea551;
}
`
const MaskBtn = styled.div`
padding:15px 0 10px 0;
background:#fed23d;
.zent-btn-primary{
  width:200px;
  height:47px;
  background:url(https://img.jylc168.com/Pc/home/index/icon-top3.png) no-repeat 0 0;
  font-size:18px;
  border:0;
}
`

class Detailcheck extends PureComponent  {
  state = {showDot: true}

  handleChange = (showDot) => {
    this.setState({ showDot });
  }
    render() {
      // const { showDot } = this.state;
      return (
        <Check>
            <Form horizontal>
          <Maskpop>

          <Row>
            <Col span={8}>项目名称  </Col>
            <Col span={16}><span>暖阳系列 企信宝4期</span></Col>
          </Row>
          <Row>
            <Col span={8}>协议约定借款年化利率</Col>
            <Col span={16}><span>8.00% <Tag color="green">基础</Tag>+0.00% <Tag color="green">贴息</Tag></span></Col>
          </Row>
          <Row>
            <Col span={8}>出借本金  </Col>
            <Col span={16}>￥100.00(实际支付<span>100.00</span>元)</Col>
          </Row>
          <Row>
            <Col span={8}>账户余额  </Col>
            <Col span={16}>￥206.10</Col>
          </Row>
          <Row>
            <Col span={8}>预期收益  </Col>
            <Col span={16}><span>￥2.01</span></Col>
          </Row>
          <Row>
            <Col span={8}>预期金币  </Col>
            <Col span={16}><span>2个</span></Col>
          </Row>
          <Row>
            <Col span={8}>现金券抵扣  </Col>
            <Col span={16}>
            {/* 无可用现金券 */}
         
              <FormSelectField name="type1" data={[ { value: 1, text: '不使用' }, { value: 2, text: '囧羊券1' }, { value: 3, text: '囧羊券2' } ]} />
             
            </Col>
          </Row>
          <Row>
            <Col span={8}>加息卡
            <Badge dot  offset={[-2, -2]} / >
             </Col>
            <Col span={16}>
   
              <FormSelectField name="type" data={[ { value: 1, text: '请选择加息卡' }, { value: 2, text: '加息卡1' }, { value: 3, text: '加息卡2' } ]} />
             
            </Col>
          </Row>
          <Row>
            <Col span={8}>项目期限  </Col>
            <Col span={16}>3个月</Col>
          </Row>
          <Row>
            <Col span={8}>还款方式  </Col>
            <Col span={16}>按月付息到息还本</Col>
          </Row>
          </Maskpop> 
          <Maskcircle>
          <Row>
          <Col span={24}><Icon type="info-circle" /> 注：使用现金券后，如遇支付失败，系统将在15分钟后返还所有使用的现金券。  </Col>
          </Row>
          </Maskcircle>
          <MaskBtn>
            <Row>
            <Col span={10} offset={14}>
              <Button type="primary" >
                支付
              </Button>
             </Col>
            </Row>
          </MaskBtn>
        
          </Form>
        </Check>
        
      );
    }
  }

  const WrappedForm  = createForm()(Detailcheck);
  export default WrappedForm;
  