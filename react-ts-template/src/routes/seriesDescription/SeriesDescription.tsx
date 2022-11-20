import React, { FC, useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import seriesData from 'mocks/seriesData';

const SeriesDescription: FC = () => {
  const [id, setId] = useState<string | undefined>(useParams().id);
  const [idFound, setIdFound] = useState<boolean>(false);

  useEffect(() => {
    console.log(id);
    if (id) {
      const numberId = parseInt(id, 10);
      setIdFound(seriesData.some((series) => series.id === numberId));
    } else {
      setIdFound(false);
    }
  }, [id]);

  return (
    <Typography variant="h2">
      {idFound
        ? `SeriesDescription. id: ${id}`
        : 'This series not found. Try another one'}
    </Typography>
  );
};

export default SeriesDescription;
