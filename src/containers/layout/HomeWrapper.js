import React, { PureComponent } from "react";
import Loadable from 'react-loadable';
import { LoadingText } from '@containers/common/loading';

const AsyncLayout = Loadable({
  loader: () => import('@containers/layout/HomeLayout'),
  loading: LoadingText
})

const HomeLayout = HomeWapper => {
  return class extends PureComponent {
    render(){
      return(
        <AsyncLayout>
          <HomeWapper />
        </AsyncLayout>
      )
    }
  }
}

export default HomeLayout;