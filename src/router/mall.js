/*
* @Author: zk
* @Date:   2019-03-28 09:55:21
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-07-10 15:53:26
*/
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LoadingText } from '@containers/common/loading';
import '@assets/mall/index.scss'


const MallLayout = Loadable({
    loader: () => import('@containers/layout/MallLayout'),
    loading: LoadingText
  })

const AsyncMall = Loadable({
    loader: () => import('@views/mall'),
    loading: LoadingText
  })

const AsyncPhonefee = Loadable({
  loader: () => import('@views/mall/phonefee'),
  loading: LoadingText
})
const AsyncSinopec = Loadable({
  loader: () => import('@views/mall/sinopec'),
  loading: LoadingText
})
const AsyncInfo = Loadable({
  loader: () => import('@views/mall/info'),
  loading: LoadingText
})
const AsyncCart = Loadable({
  loader: () => import('@views/mall/cart'),
  loading: LoadingText
})
const AsyncCollect = Loadable({
  loader: () => import('@views/mall/collect'),
  loading: LoadingText
})
const AsyncOrder= Loadable({
  loader: () => import('@views/mall/order'),
  loading: LoadingText
})
const AsyncSureorder= Loadable({
  loader: () => import('@views/mall/sureorder'),
  loading: LoadingText
})
const AsyncAddress= Loadable({
  loader: () => import('@views/mall/address'),
  loading: LoadingText
})
// const AsyncGoodslist= Loadable({
//   loader: () => import('@views/mall/goodslist'),
//   loading: LoadingText
// })

const AsyncNoMatch = Loadable({
loader: () => import('@containers/common/404'),
loading: LoadingText
})

const MallRouter = (
  <MallLayout>
    <Switch>
      <Route exact path='/mall' component={ AsyncMall }/>
      <Route exact path='/mall/phonefee' component={ AsyncPhonefee }/>
      <Route exact path='/mall/sinopec' component={ AsyncSinopec }/>
      <Route exact path='/mall/info' component={ AsyncInfo }/>
      <Route exact path='/mall/cart' component={ AsyncCart }/>
      <Route exact path='/mall/collect' component={ AsyncCollect }/>
      <Route exact path='/mall/order' component={ AsyncOrder }/>
      <Route exact path='/mall/sureorder' component={ AsyncSureorder }/>
      <Route exact path='/mall/address' component={ AsyncAddress }/>
      {/* <Route exact path='/mall/goodslist' component={ AsyncGoodslist }/> */}

      <Redirect from="/mall/index" to="/mall" />
      <Route component={ AsyncNoMatch } />
   
    </Switch>
  </MallLayout>
)

export default MallRouter;