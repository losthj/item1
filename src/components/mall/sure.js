import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tag } from 'zent';

const SureCon = styled.div`
    .m-addres{
        margin:30px 0;
    }
    .addres-add{
        float:left;
        width:270px;
        height:155px;
        background:url(https://img.jylc168.com/Pc/mall/index/add-icon.jpg) no-repeat 50% 50%;
    }
    .addres-add-user{
        float:left;
        position: relative;
        width:210px;
        height:125px;
        padding:30px 30px 0;
        margin-right:12px;
        font-size: 12px;
        background:url(https://img.jylc168.com/Pc/mall/index/add-icon1.jpg) no-repeat 50% 50%;
    }
    .address-close{
        position:absolute;
        right: -6px;
        top: -6px;
        width:28px;
        height:28px;
        background:url(https://img.jylc168.com/Pc/mall/index/close-icon.png) no-repeat 50% 50%;
        cursor: pointer;
    }
    .address-edit{
        width:20px;
        height:20px;
        position:absolute;
        right: 22px;
        top: 111px;
    }
    .zent-tag{
        position: absolute;
        right: 30px;
        background: linear-gradient(#cdb37d, #a18b64);
        border:0;
        padding:4px;
    }
`

class Sure extends PureComponent {
    render(){
        return(
           <SureCon>
                <h2 className="mian-title"><label>确认收货地址</label></h2>
                <div className="m-addres clearfix">
                    <div className="addres-add-user">
                        <div className="address-close"></div>
                        <ul>
                            <li>孙亚文 收    <Tag>默认地址</Tag></li>
                            <li>上海 上海 黄浦区</li>
                            <li>九江路686号宝龙大厦15楼</li>
                            <li>电话：13736552025</li>
                        </ul>
                        <Link to="###" className="address-edit"></Link>
                    </div>
                    <div className="addres-add-user">
                        <div className="address-close"></div>
                        <ul>
                            <li>孙亚文 收    <Tag>默认地址</Tag></li>
                            <li>上海 上海 黄浦区</li>
                            <li>九江路686号宝龙大厦15楼</li>
                            <li>电话：13736552025</li>
                        </ul>
                        <Link to="###" className="address-edit"></Link>
                    </div>

                    <Link to="###" className="addres-add"></Link>
                </div>
           </SureCon>

        )
    }
}

export default Sure;  