import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pop } from 'zent';

class LeftMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 2
    }
  }
  componentWillReceiveProps(){
    console.log(window.location.pathname);
    this.currentMenu();
    console.log(this.state.current)

  }
  componentDidMount(){
    console.log(window.location.pathname)
    this.currentMenu()
    console.log(this.state.current)
  }
  currentMenu(){
    const path = window.location.pathname;
    switch(path){
      case '/account': 
        this.setState({current: 1});
        break;
      case '/account/assets': 
        this.setState({current: 2});
        break;
      case '/account/reward/1': 
        this.setState({current: 3});
        break;
      case '/account/reward/2': 
        this.setState({current: 3});
        break;
      case '/account/manage': 
        this.setState({current: 4});
        break;
      case '/account/task': 
        this.setState({current: 5});
        break;
      case '/account/friend': 
        this.setState({current: 6});
        break;
      case '/account/pet': 
        this.setState({current: 7});
        break;
      case '/account/message': 
        this.setState({current: 8});
        break;
      default: 
        return ;
    }
  }
  render(){
    const { current } = this.state;
    return (
      <div className="left-menu">
        <div className="user-con">
          <Link to="">
            <img src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" alt="" className="user-img"/>
          </Link>
          <ul className="user-list">
            <li><Link to="">137****1233</Link></li>
            <li><Link to="">4级萌宠</Link></li>
            <li className="mt-5">
              <Pop trigger='hover' position="bottom-center" content="No.1-9999">
                <img alt="silver-icon" src={require('@assets/common/icon/icon_silver_1.png')}  />
              </Pop>
              <Pop trigger='hover' position="bottom-center" content="No.1-9999">
                <img alt="silver-icon" src={require('@assets/common/icon/icon_silver_02.png')}  />
              </Pop>
              <Pop trigger='hover' position="bottom-center" content="No.1-9999">
                <img alt="silver-icon" src={require('@assets/common/icon/icon_silver_03.png')}  />
              </Pop>
            </li>
          </ul>
          <Link to="">
            {/**filterGray**/}
            <div className="sign-btn linear-red">签到</div>
          </Link>
        </div>
        <ul className="menu-list">
           <li className={current === 1 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account">
               <span className="icon iconfont icon-home"></span>
                账户首页
             </Link>
           </li>
           <li className={current === 2 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/assets">
               <span className="icon iconfont icon-money"></span>
                资产管理
             </Link>
           </li>
           <li className={current === 3 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/reward/1">
               <span className="icon iconfont icon-stars"></span>
                奖励管理
             </Link>
           </li>
           <li className={current === 4 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/manage">
               <span className="icon iconfont icon-vote_pieb"></span>
                账户管理
             </Link>
           </li>
           <li className={current === 5 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/task">
               <span className="icon iconfont icon-datagrow_fill"></span>
                成长任务
             </Link>
           </li>
           <li className={current === 6 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/friend">
               <span className="icon iconfont icon-weixin"></span>
                好友推荐
             </Link>
           </li>
           <li className={current === 7 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/pet">
               <span className="icon iconfont icon-yangtou"></span>
                我的萌宠
             </Link>
           </li>
           <li className={current === 8 ? 'menu-list-item menu-list-current' : 'menu-list-item'}>
             <Link to="/account/message"> 
               <span className="icon iconfont icon-message"></span>
                消息管理
             </Link>
           </li>
           
        </ul>
      </div>
    )
  }
}

export default LeftMenu;