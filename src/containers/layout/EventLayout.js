import React, { Component, Fragment } from 'react';
import Top from './top';
import Bottom from './bottom';

class Layout extends Component {
  render(){
    return (
        <Fragment>
          <Top />
          { this.props.children }
          <Bottom />
        </Fragment>
     )
  }
}

export default Layout;