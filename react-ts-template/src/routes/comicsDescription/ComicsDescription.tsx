import React, { FC, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import comicsData from 'mocks/comicsData';

const ComicsDescription: FC = () => {
  const [idFound, setIdFound] = useState<boolean>(false);

  const ind = useParams().id;

  useMemo(() => {
    if (ind) {
      const indInt = parseInt(ind, 10);
      const t = comicsData.some((comics) => comics.id === indInt);
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
        ? `ComicsDescription. id: ${ind}`
        : 'This comics not found. Try another one'}
    </Typography>
  );
};

export default ComicsDescription;
