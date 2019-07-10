import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LoadingText } from '@containers/common/loading';

// account
const AccountLayout = Loadable({
  loader: () => import('@containers/layout/AccountLayout'),
  loading: LoadingText
})

const AsyncAccount = Loadable({
  loader: () => import('@views/account'),
  loading: LoadingText
})
const AsyncRecharge = Loadable({
  loader: () => import('@views/account/recharge'),
  loading: LoadingText
})
const AsyncWithDrawal = Loadable({
  loader: () => import('@views/account/withdrawal'),
  loading: LoadingText
})
const AsyncAssets = Loadable({
  loader: () => import('@views/account/assets'),
  loading: LoadingText
})
const AsyncLendDetail = Loadable({
  loader: () => import('@views/account/lend_detail'),
  loading: LoadingText
})
const AsyncReward = Loadable({
  loader: () => import('@views/account/reward'),
  loading: LoadingText
})
const AsyncActivity = Loadable({
  loader: () => import('@views/account/activity'),
  loading: LoadingText
})

const AsyncManage = Loadable({
  loader: () => import('@views/account/manage'),
  loading: LoadingText
})
const AsyncSignature = Loadable({
  loader: () => import('@views/account/signature'),
  loading: LoadingText
})
const AsyncRisk = Loadable({
  loader: () => import('@views/account/risk'),
  loading: LoadingText
})
const AsyncBankCard = Loadable({
  loader: () => import('@views/account/bankcard'),
  loading: LoadingText
})

const AsyncTask = Loadable({
  loader: () => import('@views/account/task'),
  loading: LoadingText
})
const AsyncFriend = Loadable({
  loader: () => import('@views/account/friend'),
  loading: LoadingText
})
const AsyncMessage = Loadable({
  loader: () => import('@views/account/message'),
  loading: LoadingText
})
const AsyncPet = Loadable({
  loader: () => import('@views/account/pet'),
  loading: LoadingText
})
const AsyncNoMatch = Loadable({
  loader: () => import('@containers/common/404'),
  loading: LoadingText
})
// 账户中心布局
const AccountRouter = (
  <AccountLayout>
    <Switch>
      <Route exact path='/account/' component={ AsyncAccount }/>
      <Route exact path='/account/recharge' component={ AsyncRecharge }/>
      <Route exact path='/account/withdrawal' component={ AsyncWithDrawal }/>
      <Route exact path='/account/assets' component={ AsyncAssets }/>
      <Route exact path='/account/lend_detail/:id' component={ AsyncLendDetail }/>
      <Route exact path='/account/reward/:id' component={ AsyncReward }/>
      <Route exact path='/account/activity' component={ AsyncActivity }/>
      <Route exact path='/account/manage' component={ AsyncManage }/>
      <Route exact path='/account/signature' component={ AsyncSignature }/>
      <Route exact path='/account/risk_assessment' component={ AsyncRisk }/>
      <Route exact path='/account/bankcard' component={ AsyncBankCard }/>
      <Route exact path='/account/task' component={ AsyncTask }/>
      <Route exact path='/account/friend' component={ AsyncFriend }/>
      <Route exact path='/account/message' component={ AsyncMessage }/>
      <Route exact path='/account/pet' component={ AsyncPet }/>

      <Redirect from="/account/index" to="/account" />
      <Route component={ AsyncNoMatch } />
    </Switch>
  </AccountLayout>
)

export default AccountRouter;