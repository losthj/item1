import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout } from 'zent';
const { Row, Col } = Layout

const Seall = styled.div`
    margin-top:30px;
  `;
  
class Seal extends Component  {
    render(){
        return(
            <Seall>
                <Row>
                    <Col span={4} offset={20}>
                        <img src="https://img.jylc168.com/Pc/home/disclosure/seal.png" alt=""/>
                    </Col>
                </Row>
            </Seall>
        );
    }
}

export default Seal;