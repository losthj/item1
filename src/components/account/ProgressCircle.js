import React, { PureComponent } from 'react';
import styled from 'styled-components';
const Progress = styled.div`
  position: relative;
  display: inline-block;
  width: 170px;
  height: 170px;
  background-image: url(https://img.jylc168.com/Pc/account/index/circle.png);
  background-repeat:no-repeat;
  background-position: -${props => props.progress * 170 || 0}px 50%;
`
const ProgressInfo = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  margin-top: -18px;
  font-weight: 800;
  color: #a08a64;
  font-size: 20px;
`
const Num = styled.span`
  font-size:14px;
`

class ProgressCircle extends PureComponent {
  render(){
    return (
      <Progress progress={this.props.progress}>
        <ProgressInfo>{this.props.progress} <Num>%</Num></ProgressInfo>
      </Progress>
    )
  }
}

export default ProgressCircle;
