import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

const FixWrap = styled.div`
  bottom: 0;
  height: 50px;
  width: 100%;
  line-height: 50px;
  background: #fff;
  position: fixed;
  opacity: .8;
  padding: 0;
  margin: 0 0 5px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  box-sizing: border-box;
  z-index:2;
`
const CloseBtn = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 14px;
  right: 12px;
  cursor: pointer;
  line-height: 16px;
`
export default class fixRisk extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      riskStatus: true
    }
    this.closeTip = this.closeTip.bind(this);
  }
  closeTip(){
    this.setState(state => ({
      riskStatus: !this.state.riskStatus
    }))
  }
  render(){
    return (
      <Fragment>
        {
          this.state.riskStatus ? 
          <FixWrap>
          风险提示：利率披露不构成对收益的承诺
            <CloseBtn onClick={ this.closeTip }>X</CloseBtn>
          </FixWrap>
          : null
        }
      </Fragment>
    )
  }
}