import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';

import './App.pcss';
import { IRoute, IView } from '../../types/common';
import Router from '../../router';

const getPages = (): React.ReactElement[] =>
  Router.map(({ route, component }: IRoute) => {
    const Component: React.FC<IView> = component;
    const link: string = Array.isArray(route) ? route[0] : route;

    return <Route path={link} key={link} element={<Component />} />;
  });

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>{getPages()}</Routes>
    </BrowserRouter>
  );
};
