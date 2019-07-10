import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LoadingText } from '@containers/common/loading';

const EventLayout = Loadable({
  loader: () => import('@containers/layout/EventLayout'),
  loading: LoadingText
})

const EventSignature = Loadable({
  loader: () => import('@views/event/hd2019/signature'),
  loading: LoadingText
})

const EventRouter = (
  <EventLayout>
    <Switch>
      <Route exact path='/event/signature' component={ EventSignature }/>
    </Switch>
  </EventLayout>
)
export default EventRouter;