import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

const SeriesDescription: FC = () => {
  const { id } = useParams();
  return <Typography variant="h2">{`SeriesDescription. id: ${id}`}</Typography>;
};

export default SeriesDescription;
