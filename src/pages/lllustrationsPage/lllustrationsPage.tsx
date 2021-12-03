import React from 'react';

import { Container, Grid, Pagination, Typography } from '@mui/material';

import Layout from '../../components/Layout';
import ContentCard from './components/ContentCard';

import './IllustrationsPage.pcss';
import mockCardsData from './IllustrationsPage.mock';

export const IllustrationsPage = () => {
  const renderCards = (): React.ReactNode => {
    return mockCardsData.map((item) => {
      return (
        <Grid item={true} xs={12} sm={4} key={item.id}>
          <ContentCard text={item.text} src={item.src} />
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <section className={'page-wrapper'}>
        <Grid
          container={true}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          spacing={3}
        >
          <Grid xs={12} spacing={3}>
            <Grid
              item={true}
              xs={12}
              sm={12}
              alignContent={'center'}
              alignItems={'center'}
            >
              <Typography variant={'h4'}>IllustrationsPage</Typography>
            </Grid>
          </Grid>
          <Container>
            <Grid container={true} xs={12} spacing={3}>
              {renderCards()}

              <Grid item={true} xs={12}>
                <section className={'pagination'}>
                  <Pagination
                    classes={{ ul: 'pagination-active' }}
                    count={10}
                  />
                </section>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </section>
    </Layout>
  );
};
