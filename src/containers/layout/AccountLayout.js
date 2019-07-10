import React, { Component, Fragment } from 'react';
import Top from './top';
import Nav from './nav';
import Bottom from './bottom';
import AccountMenu from './AccountMenu';
import AccountInfo from './AccountInfo';
import AccountTitle from './AccountTitle';

import '@assets/account/index.scss';

class Layout extends Component {
  render(){
    return (
        <Fragment>
          <Top />
          <Nav />
          <div className="account-warp">
            <div className="container">
                <AccountTitle />
                <div className="clearfix">
                  <div className="menu-wrap">
                    <AccountMenu />
                   </div>
                  <div className="account-main">
                    <AccountInfo />
                    <div className="account-common">
                     { this.props.children }
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <Bottom />
        </Fragment>
     )
  }
}

export default Layout;