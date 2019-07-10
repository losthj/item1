import React, { PureComponent } from "react";
import styled from 'styled-components';
import { Input,Layout,Avatar  } from 'zent';
const { Row, Col } = Layout

const InputCon = styled.div`
    .zent-row{
        margin-bottom:10px;
        .zent-col{
            input{
                width: 98px;
                height: 24px;
                line-height: 24px;
                border-radius: 3px;
                text-align: center;
                color: #666;
                background-color: #fdd23c;
                cursor: pointer;
            }
            input:hover{
                color:#ffffff;
                background-color: #f6ab42;
            }
            .zent-avatar{
                width:60px;
                height:60px;
            }
        }
    }
    .mess-items{
        border-top:1px dashed #dddddd;
        .zent-row{
            border-bottom:1px dashed #dddddd;
        }
        .zent-col{
            padding:15px 0 10px;
            p{
                word-wrap: break-word;
            }
        }
        .zent-col:first-child{
            text-align:center;
        } 
    }
    .text-mall{
        color: #06c0c8;
    }
`

class Message extends PureComponent {
    render() {

      return (
            <InputCon>
              <form action="demo-form.php">
                <Row>
                    <Col span={24}>
                        <Input type="textarea" name="" placeholder="我有话说..."  required oninvalid="setCustomValidity('不能为空aaa')" oninput="setCustomValidity('')" />
                    </Col>
                </Row>
                <Row>    
                    <Col span={3} offset={21}> 
                        <input type="submit" value="评论" />
                    </Col>
                </Row>
            </form>
            <div className="mess-items">
                <Row>
                    <Col span={4}>
                    <Avatar src="https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png" />
                    <div className="text-mall">
                        139xxxx2541
                    </div>
                    </Col>
                    <Col span={20}>
                    <div>2017-08-04 16:20:59 发表</div>
                    <p>
                        sdfasdf
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                    <Avatar src="https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png" />
                    <div className="text-mall">
                        139xxxx2541
                    </div>
                    </Col>
                    <Col span={20}>
                    <div>2017-08-04 16:20:59 发表</div>
                    <p>
                        sdfasdf
                    </p>
                    </Col>
                </Row>
            </div>
            </InputCon>
      )
    }
}

export default Message;