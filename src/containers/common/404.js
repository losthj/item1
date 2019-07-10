import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`

  font-family: 'Helvetica, STHeiti, "Microsoft YaHei", Verdana, Arial, Tahoma, sans-serif';
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 11111;
  * {
    box-sizing: border-box;
  }
  .notfound {
    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h2 {
      font-size: 22px;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
      color: #232323;
    }
    p {
      color: #787878;
      padding: 10px;
    }
    a {
      display: inline-block;
      padding: 12px 30px;
      font-weight: 700;
      background-color: #f99827;
      color: #fff;
      border-radius: 40px;
      text-decoration: none;
      transition: 0.2s all;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .notfound-404 {
    height: 190px;
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 146px;
      font-weight: 700;
      margin: 0px;
      color: #232323;
      span {
        display: inline-block;
        width: 120px;
        height: 120px;
        background-image: url('https://img.jylc168.com/Pc/home/index/emoji.png');
        background-size: cover;
        transform: scale(1.4);
        z-index: -1;
      }
    }
  }
`

const NotFound = () => (
  <Wrapper>
    <div className="notfound">
      <div className="notfound-404">
        <h1>4<span></span>4</h1>
      </div>
      <h2>页面不存在</h2>
      <p>对不起您访问的页面不存在，请输入正确的地址!</p>
      <Link to="/">返回首页</Link>
    </div>
  </Wrapper>
)

export default NotFound;