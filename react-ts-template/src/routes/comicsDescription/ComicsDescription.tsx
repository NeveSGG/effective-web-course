import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

const ComicsDescription: FC = () => {
  const { id } = useParams();
  return <Typography variant="h2">{`ComicsDescription. id: ${id}`}</Typography>;
};

export default ComicsDescription;
