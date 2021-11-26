import * as React from 'react';
import RoutesPage from './constants/routes';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

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
    component: ErrorPage,
  },
  {
    route: RoutesPage.map,
    component: ErrorPage,
  },
];

export default Router;
