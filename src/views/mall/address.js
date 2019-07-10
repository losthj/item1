import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { Layout, Button} from 'zent';
// import Sure from '@components/mall/sure';
// const { Row, Col } = Layout;

class Address extends Component { 
    render(){
        return(
            <div className="mall-view">
                <div className="container">
                    <div className="mall-title">
                        <Link to="/" >首页 </Link> &gt;     
                        <Link to="/mall"> 金币商城</Link> &gt;  
                        <Link to="/mall/address" className="text-golden"> 管理收货地址</Link>
                    </div>
                    <div className="mall-mian">
                        <h2 className="mian-title"><label>新增收货地址</label></h2>
                

                    </div>            
                </div>
            </div>
        )
    }
}

export default Address;  