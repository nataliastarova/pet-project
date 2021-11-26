import React from 'react';

export interface ILayout {
  children: React.ReactNode;
}

export type IView = {};

export interface IRoute {
  route: string | string[];
  component: React.FC<IView> | any;
}
