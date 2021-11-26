import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Layout from '../../components/Layout';
import RoutesPage from '../../constants/routes';

import './ErrorPage.pcss';

export const ErrorPage = () => {
  return (
    <Layout>
      <Container
        maxWidth={'xl'}
        classes={{ root: 'error-container' }}
        id="error-container"
      >
        <Typography variant={'h4'} className={'font-title'}>
          Такой страницы не существует :(
        </Typography>
        <Link className={'error-link'} to={RoutesPage.main}>
          На главную страницу
        </Link>
      </Container>
    </Layout>
  );
};
