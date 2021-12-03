import * as React from 'react';

import RoutesPage from './constants/routes';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import IllustrationsPage from './pages/lllustrationsPage';

import { IRoute } from './types/common';

const Router: IRoute[] = [
  {
    route: RoutesPage.main,
    component: MainPage,
  },
  {
    route: RoutesPage.error,
    component: ErrorPage,
  },
  {
    route: RoutesPage.illustrations,
    component: IllustrationsPage,
  },
  {
    route: RoutesPage.map,
    component: ErrorPage,
  },
];

export default Router;
