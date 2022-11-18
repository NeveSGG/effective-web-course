import React, { FC, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import seriesData from 'mocks/seriesData';

const SeriesDescription: FC = () => {
  const [idFound, setIdFound] = useState<boolean>(false);

  const ind = useParams().id;

  useMemo(() => {
    if (ind) {
      const indInt = parseInt(ind, 10);
      const t = seriesData.some((series) => series.id === indInt);
      if (t) {
        setIdFound(true);
      } else {
        setIdFound(false);
      }
    } else {
      setIdFound(false);
    }
  }, [ind]);

  return (
    <Typography variant="h2">
      {idFound
        ? `SeriesDescription. id: ${ind}`
        : 'This series not found. Try another one'}
    </Typography>
  );
};

export default SeriesDescription;
