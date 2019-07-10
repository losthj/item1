import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LoadingText } from '@containers/common/loading';
import HomeWrapper from '@containers/layout/HomeWrapper';

const AsyncHome = Loadable({
  loader: () => import('@views/home'),
  loading: LoadingText
})
const AsyncLogin = Loadable({
  loader: () => import('@views/home/login'),
  loading: LoadingText
})
const AsyncProduct = Loadable({
  loader: () => import('@views/home/product/product'),
  loading: LoadingText
})
const AsyncDetail = Loadable({
  loader: () => import('@views/home/product/detail'),
  loading: LoadingText
})
const AsyncProducts = Loadable({
  loader: () => import('@views/home/product/products'),
  loading: LoadingText
})
const AsyncItemone = Loadable({
  loader: () => import('@views/home/product/itemone'),
  loading: LoadingText
})

const AsyncAbout = Loadable({
  loader: () => import('@views/home/about/about'),
  loading: LoadingText
})
const AsyncNotice = Loadable({
  loader: () => import('@views/home/about/notice'),
  loading: LoadingText
})
const AsyncPress = Loadable({
  loader: () => import('@views/home/about/press'),
  loading: LoadingText
})
const AsyncHonor = Loadable({
  loader: () => import('@views/home/about/honor'),
  loading: LoadingText
})
const AsyncHotspot = Loadable({
  loader: () => import('@views/home/about/hotspot'),
  loading: LoadingText
})
const AsyncPartner = Loadable({
  loader: () => import('@views/home/about/partner'),
  loading: LoadingText
})
const AsyncContact = Loadable({
  loader: () => import('@views/home/about/contact'),
  loading: LoadingText
})
const AsyncDisclosure = Loadable({
  loader: () => import('@views/home/disclosure/disclosure'),
  loading: LoadingText
})
const AsyncPrepare = Loadable({
  loader: () => import('@views/home/disclosure/prepare'),
  loading: LoadingText
})
const AsyncCustody = Loadable({
  loader: () => import('@views/home/disclosure/custody'),
  loading: LoadingText
})
const AsyncRisks= Loadable({
  loader: () => import('@views/home/disclosure/risks'),
  loading: LoadingText
})
const AsyncPartners= Loadable({
  loader: () => import('@views/home/disclosure/partners'),
  loading: LoadingText
})
const AsyncOrganize= Loadable({
  loader: () => import('@views/home/disclosure/organize'),
  loading: LoadingText
})
const AsyncBranch= Loadable({
  loader: () => import('@views/home/disclosure/branch'),
  loading: LoadingText
})
const AsyncChannel= Loadable({
  loader: () => import('@views/home/disclosure/channel'),
  loading: LoadingText
})
const AsyncAuditing= Loadable({
  loader: () => import('@views/home/disclosure/auditing'),
  loading: LoadingText
})
const AsyncAudit= Loadable({
  loader: () => import('@views/home/disclosure/audit'),
  loading: LoadingText
})
const AsyncCompliance= Loadable({
  loader: () => import('@views/home/disclosure/compliance'),
  loading: LoadingText
})
const AsyncCharge= Loadable({
  loader: () => import('@views/home/disclosure/charge'),
  loading: LoadingText
})
const AsyncOverdue= Loadable({
  loader: () => import('@views/home/disclosure/overdue'),
  loading: LoadingText
})
const AsyncOperate= Loadable({
  loader: () => import('@views/home/disclosure/operate'),
  loading: LoadingText
})
const AsyncBorrower= Loadable({
  loader: () => import('@views/home/disclosure/borrower'),
  loading: LoadingText
})
const AsyncBasic= Loadable({
  loader: () => import('@views/home/disclosure/basic'),
  loading: LoadingText
})

const AsyncEvaluate= Loadable({
  loader: () => import('@views/home/disclosure/evaluate'),
  loading: LoadingText
})

const AsyncCapital= Loadable({
  loader: () => import('@views/home/disclosure/capital'),
  loading: LoadingText
})
const AsyncMajor= Loadable({
  loader: () => import('@views/home/disclosure/major'),
  loading: LoadingText
})
const AsyncConsult= Loadable({
  loader: () => import('@views/home/disclosure/consult'),
  loading: LoadingText
})
const AsyncSystem= Loadable({
  loader: () => import('@views/home/disclosure/system'),
  loading: LoadingText
})
const AsyncPolicy= Loadable({
  loader: () => import('@views/home/disclosure/policy'),
  loading: LoadingText
})
const AsyncLoan= Loadable({
  loader: () => import('@views/home/disclosure/loan'),
  loading: LoadingText
})
const AsyncRisk= Loadable({
  loader: () => import('@views/home/disclosure/risk'),
  loading: LoadingText
})
const AsyncNoMatch = Loadable({
  loader: () => import('@containers/common/404'),
  loading: LoadingText
})

const HomeRouter = () => (
    <Switch>
      <Route exact path='/' component={ HomeWrapper(AsyncHome) }/>
      <Route path='/about' component={ HomeWrapper(AsyncAbout) }/>
      <Route path='/login' component={ HomeWrapper(AsyncLogin) }/>
      <Route path='/notice' component={ HomeWrapper(AsyncNotice) }/>
      <Route path='/press' component={ HomeWrapper(AsyncPress) }/>
      <Route path='/honor' component={ HomeWrapper(AsyncHonor) }/>
      <Route path='/hotspot' component={ HomeWrapper(AsyncHotspot) }/>
      <Route path='/partner' component={ HomeWrapper(AsyncPartner) }/>
      <Route path='/contact' component={ HomeWrapper(AsyncContact) }/>
      <Route path='/disclosure' component={ HomeWrapper(AsyncDisclosure) }/>
      <Route path='/prepare' component={ HomeWrapper(AsyncPrepare) }/>
      <Route path='/custody' component={ HomeWrapper(AsyncCustody) }/>
      <Route path='/risks' component={ HomeWrapper(AsyncRisks) }/>
      <Route path='/partners' component={ HomeWrapper(AsyncPartners) }/>
      <Route path='/organize' component={ HomeWrapper(AsyncOrganize) }/>
      <Route path='/branch' component={ HomeWrapper(AsyncBranch) }/>
      <Route path='/Channel' component={ HomeWrapper(AsyncChannel) }/>
      <Route path='/auditing' component={ HomeWrapper(AsyncAuditing) }/>
      <Route path='/audit' component={ HomeWrapper(AsyncAudit) }/>
      <Route path='/compliance' component={ HomeWrapper(AsyncCompliance) }/>
      <Route path='/charge' component={ HomeWrapper(AsyncCharge) }/>
      <Route path='/overdue' component={ HomeWrapper(AsyncOverdue) }/>
      <Route path='/operate' component={ HomeWrapper(AsyncOperate) }/>
      <Route path='/borrower' component={ HomeWrapper(AsyncBorrower) }/>
      <Route path='/basic' component={ HomeWrapper(AsyncBasic) }/>
      <Route path='/evaluate' component={ HomeWrapper(AsyncEvaluate) }/>
      <Route path='/capital' component={ HomeWrapper(AsyncCapital) }/>
      <Route path='/major' component={ HomeWrapper(AsyncMajor) }/>
      <Route path='/consult' component={ HomeWrapper(AsyncConsult) }/>
      <Route path='/system' component={ HomeWrapper(AsyncSystem) }/>
      <Route path='/policy' component={ HomeWrapper(AsyncPolicy) }/>
      <Route path='/loan' component={ HomeWrapper(AsyncLoan) }/>
      <Route path='/risk' component={ HomeWrapper(AsyncRisk) }/>
      <Route path='/product' component={ HomeWrapper(AsyncProduct) }/>
      <Route path='/detail' component={ HomeWrapper(AsyncDetail) }/>
      <Route path='/products' component={ HomeWrapper(AsyncProducts) }/>
      <Route path='/itemone' component={ HomeWrapper(AsyncItemone) }/>

      <Redirect exact from="/index.html" to="/" />
      <Route component={ AsyncNoMatch } />
    </Switch>
)
export default HomeRouter;