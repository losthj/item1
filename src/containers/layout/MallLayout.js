import React, { Component, Fragment } from 'react';
import { Affix } from 'zent';
import Top from './top';
import Nav from './nav';
import Bottom from './bottom';

class MallLayout extends Component {
  render(){
    return (
        <Fragment>
          <Affix>
            <Top />
            <Nav />
          </Affix>
          { this.props.children }
          <Bottom />
        </Fragment>
     )
  }
}

export default MallLayout;