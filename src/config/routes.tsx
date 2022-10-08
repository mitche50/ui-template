import { QueryParams, Route } from 'mobx-router';
import React from 'react';

import { NotFound } from '../components/common/NotFound';
import { RootStore } from '../mobx/stores/RootStore';
import Landing from '../pages/Landing';

const routes = {
  home: new Route<RootStore, QueryParams>({
    path: '/',
    component: <Landing />,
  }),
  notFound: new Route<RootStore, QueryParams>({
    path: '/not-found',
    component: <NotFound />,
  }),
};

export default routes;
