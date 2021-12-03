import React from 'react';

import './Header.pcss';
import { AppBar, Link, Typography } from '@mui/material';
import Svg from '../Svg';
import RoutesPage from '../../constants/routes';

const logo = require('../../assets/icons/location.svg');

export const Header = () => {
  return (
    <AppBar color="transparent" position="static" id="header">
      <Typography variant="h6" className={'title'} paragraph={true}>
        <Link
          href={RoutesPage.main}
          color="inherit"
          variant="inherit"
          underline="none"
        >
          <div className={'section'}>
            <Svg file={logo} />
          </div>
          <span>оdaerjay</span>
        </Link>
      </Typography>
      <Typography variant="subtitle1" className={'title'} paragraph={true}>
        <Link
          href={RoutesPage.illustrations}
          color="inherit"
          variant="inherit"
          underline="none"
          className={'nav-link'}
        >
          иллюстрации
        </Link>
        <Link
          href={RoutesPage.error}
          color="inherit"
          variant="inherit"
          underline="none"
          className={'nav-link'}
        >
          кофейная карта
        </Link>
      </Typography>
    </AppBar>
  );
};
