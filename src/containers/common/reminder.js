import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px dashed #e5ddc4;
  padding: 30px 40px 25px 130px;
  line-height: 24px;
  font-size: 12px;
  background: #f5f2e9 url(https://img.jylc168.com/Pc/account/index/reminder.png) 29px 50% no-repeat;
`
const Title = styled.div`
  padding-left: 28px;
  background: url(https://img.jylc168.com/Pc/account/index/icon_reminder.png) 0 50% no-repeat;
  margin-bottom: 8px;
  font-size: 14px;
`

const Reminder = (props) => (
  <Wrapper>
    <Title>小囧温馨提示</Title>
    <div dangerouslySetInnerHTML={{ __html: props.content}} />
  </Wrapper>
)

export default Reminder;