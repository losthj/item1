import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavCon = styled.div`
  height: 100px;
  background:#fff;
`
const Logo = styled.h1`
  float: left;
  width: 190px;
  height: 100px;
  background: url(https://img.jylc168.com/Asset/Home/common2/img/index/logo.png) 0 50% no-repeat;
`
const FourthImg = styled.div`
  float: left;
  width: 70px;
  height: 100px;
  background: url(https://img.jylc168.com/Pc/home/index/fourth.png) 0 50% no-repeat;
`
const NavRight = styled.ul`
  float: right;
  height: 100px;
  .nav-item {
    display:inline-block;
    width:120px;
    height:96px;
    font-size:18px;
    border-top:4px solid #fff;
    text-align:center
    &:hover {
      border-color: #fdd23e;
    }
    a {
      display:block;
      line-height:96px;
      :hover {
        color:#333;
        font-weight:800;
      }
    }
  }
`


class Nav extends Component {
  render() {
    return (
      <Fragment>
      <NavCon>
        <div className="container clearfix">
          <Link to="/">
            <Logo />
            <FourthImg />
          </Link>
          <NavRight>
            <li className="nav-item"><Link to="/">首页</Link></li>
            <li className="nav-item"><Link to="/product">我要出借</Link></li>
            <li className="nav-item"><Link to="/products">我要借款</Link></li>
            <li className="nav-item"><Link to="/about">关于我们</Link></li>
            <li className="nav-item"><Link to="/prepare">信息披露</Link></li>
            <li className="nav-item"><Link to="/account">我的账户</Link></li>
          </NavRight>
        </div>
      </NavCon>
      </Fragment>
    );
  }
}



export default Nav;
