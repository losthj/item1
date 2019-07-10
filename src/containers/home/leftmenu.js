import React, {Component} from 'react';
import '@assets/home/about.css';
import { NavLink} from 'react-router-dom';


const leftmenu1=[
    <NavLink to="/about" activeClassName="on">公司介绍</NavLink>,
    <NavLink to="/notice" activeClassName="on">网站公告</NavLink>,
    <NavLink to="/press" activeClassName="on">行业资讯</NavLink>,
    <NavLink to="/honor" activeClassName="on">荣誉资质</NavLink>,
    <NavLink to="/hotspot" activeClassName="on">囧羊热点</NavLink>,
    <NavLink to="/partner" activeClassName="on">合作伙伴</NavLink>,
    <NavLink to="/contact" activeClassName="on">联系我们</NavLink>
  ];
  

class Leftmenu extends Component {
    render() {
        return (
        <div className="leftmenu">
           <ul>
              {
                leftmenu1.map((item,index)=>{
                    return(
                      <li key={index}>{item}</li>
                    )
                })
              }
                </ul> 
        </div>
        )
    }
}

export default Leftmenu;

