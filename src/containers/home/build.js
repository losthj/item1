import React, {Component} from 'react';
import '@assets/home/about.css';
import { Layout } from 'zent';
const { Row, Col } = Layout

class Build extends Component {
    
    render(){
        return(
            <div className="reveal-lists reveal-lists1">
                <Row>
                    <Col span={24}>
                        建设中…    
                        <img src="https://img.jylc168.com/Pc/home/disclosure/icon2.png" alt=""/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Build;