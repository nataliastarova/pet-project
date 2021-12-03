import React from 'react';
import { ILayout } from '../../types/common';
import './Layout.pcss';

export const Layout = (props: ILayout) => {
  return <main className={'main-container'}>{props.children}</main>;
};
