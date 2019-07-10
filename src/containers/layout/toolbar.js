import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToolBar = styled.div`
.toolbar {
	position:fixed;
	width:50px;
	right:0;
	top:50%;
	height:299px;
	margin-top:-100px;
	box-shadow:1px 1px 4px 2px rgba(0,0,0,0.3);
	z-index:11
}
.toolbar li {
	position:relative;
	width:50px;
	height:50px;
}
.tab-ico {
	position:relative;
	display:block;
	width:50px;
	height:50px;
	background:#ffffff url(https://img.jylc168.com/Asset/Home/common2/img/index/sider_img.png) 0 0 no-repeat;
	z-index:1;
	cursor:pointer
}
.tab-ico:hover {
	background:#ffffff url(https://img.jylc168.com/Asset/Home/common2/img/index/sider_img2.png) no-repeat 0 0;
}
.toolbar .toolbar-txt:hover .tab-text {
	display:block!important;
}
.tab-ewm {
	position:absolute;
	top:0;
	left:50px;
	-webkit-transition:left .3s ease-in-out .1s;
	transition:left .3s ease-in-out .1s
}
.toolbar .toolbar-ewm:hover .tab-ewm {
	left:-154px
}
.tab-ico1,.tab-ico1:hover {
	background-position:0 -50px
}
.tab-ico2,.tab-ico2:hover {
	background-position:0 -100px
}
.tab-ico3,.tab-ico3:hover {
	background-position:0 -150px
}
.tab-ico4,.tab-ico4:hover {
	background-position:0 -200px
}
.tab-ico5,.tab-ico5:hover {
	background-position:0 -250px
}
.toolbar em {
	font-style:inherit;
}
.tab-text {
	position:absolute;
	width:120px;
	height:55px;
	line-height:55px;
	background-color:#ffffff;
	color:#424242;
	bottom:0;
	left:-138px;
	font-size:14px;
	text-align:center;
	box-shadow:0px 1px 3px 2px rgba(0,0,0,0.2);
	z-index:1;
	display:none;
}
.tab-wx {
	line-height:30px;
	width:116px;
	height:116px;
	bottom:-33px;
}
.tab-fxts {
	line-height:24px;
	width:155px;
	height:88px;
	color:#f13e00;
	bottom:-38px;
	left:-171px;
	p {
	margin-top:10px;
    }
}
.tab-text label {
	position:absolute;
	background:url(https://img.jylc168.com/Asset/Home/common2/img/index/sider_img3.png) no-repeat 0 0;
	width:10px;
	height:12px;
	right: -9px;
}
.tab-text label.seat1 {
	top: 21px;
}
.tab-text label.seat2 {
	top: 52px;
}
.tab-text label.seat3 {
	top: 20px;
}
`
const scrollWindow = () => {
    window.scrollTo(0,0)
  }
  
class Toolbar extends Component {
    render() {
      return (
        <ToolBar>
          <ul className="toolbar">
        <li className="toolbar-txt">
            <i className="tab-ico"></i>
            <em className="tab-text tab-fxts">
                <label className="seat3"></label>
                <p>
                    风险提示<br /> 网络借贷为自愿，<br />  本息损失皆自担。
                </p>

            </em>
        </li>
        <li className="toolbar-txt">
            <i className="tab-ico tab-ico1"></i>
            <em className="tab-text tab-wx">
                <label className="seat2"></label>
                <p>APP下载</p>
                <img src="https://img.jylc168.com/Asset/Home/common2/img/index/apper.jpg" alt="" width="75" height="75" />
            </em>
        </li>
        <li className="toolbar-txt">
            <Link to="/user/sign">
                <i className="tab-ico tab-ico2"></i>
                <em className="tab-text">
                    <label className="seat1"></label>
                    登录后签到
                </em>
            </Link>
            <em id="sign_result" className="tab-text" style={{display:"none"}}>
                已签到
            </em>

        </li>
        <li className="toolbar-txt">
            <i className="tab-ico tab-ico3"></i>
            <em className="tab-text tab-wx">
                <label className="seat2"></label>
                <p>官方微信</p>
                <img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/fuwuhao.jpg" alt="" width="75" height="75" />
            </em>
        </li>
        <li className="toolbar-txt">
            <Link to="/calc">
                <i className="tab-ico tab-ico4"></i>
                <em className="tab-text tab-text1">
                    <label className="seat1"></label>
                    收益计算
                </em>
            </Link>
        </li>
        <li>
            <a href="script:;" onClick={scrollWindow} >
                <i className="tab-ico tab-ico5"></i>
            </a>
        </li>
    </ul>
        </ToolBar>
      );
    }
  }
  
  
  
  export default Toolbar;
  