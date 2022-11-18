import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import CustomCard from 'components/card';
import Search from 'components/search';

import comicsData from 'mocks/comicsData';

const Comics: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2,
          alignItems: 'end'
        }}
      >
        <Typography variant="h3" fontWeight={800} gutterBottom>
          <>{t('Comics')}</>
        </Typography>
        <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
          (3)
        </Typography>
      </Box>
      <Search searchText="Comics" />
      <Grid container spacing={2}>
        {comicsData.map((comics, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={4} key={`${id}123`}>
            <CustomCard {...comics} pathname="/comics/" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Comics;
