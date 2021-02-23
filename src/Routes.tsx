import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { toLoadable } from '@/utils';
import Layout from '@/components/layout/Layout.component';

// Lazy Loading Views
const IndexView = toLoadable(() => import('@/views/index/Index.view'));

const Routes: FC = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={IndexView} />
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
